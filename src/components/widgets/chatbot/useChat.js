/**
 * useChat — conversation state for the ChatBot widget.
 * Sends via askBot(), shows a typing indicator for typingDelay(), then appends
 * the reply and swaps the suggestion chips to that reply's follow-ups.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { askBot, resetMemory, typingDelay } from '@/chatbot/engine';
import { getGreeting, suggestions as starterSuggestions } from '@/chatbot/knowledge';
import { renderMini } from '@/utils/miniMarkdown';

const greeting = () => ({ from: 'bot', html: renderMini(getGreeting()) });

export function useChat() {
  const [messages, setMessages] = useState(() => [greeting()]);
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState(starterSuggestions);
  const busy = useRef(false);
  const timer = useRef(0);
  const session = useRef(0); // bumps on reset so late replies are dropped

  useEffect(() => () => window.clearTimeout(timer.current), []);

  /** Returns true when the message was accepted (so the composer can clear). */
  const send = useCallback((raw) => {
    const content = (raw ?? '').trim();
    if (!content || busy.current) return false;
    busy.current = true;
    setTyping(true);
    setMessages((m) => [...m, { from: 'user', html: renderMini(content) }]);

    const id = session.current;
    askBot(content).then((reply) => {
      // Small delay so the typing indicator reads naturally.
      timer.current = window.setTimeout(() => {
        if (id !== session.current) return;
        busy.current = false;
        setTyping(false);
        setMessages((m) => [
          ...m,
          { from: 'bot', html: renderMini(reply.text), chart: reply.chart, actions: reply.actions },
        ]);
        setChips(reply.followUps);
      }, typingDelay(reply.text));
    });
    return true;
  }, []);

  const reset = useCallback(() => {
    session.current += 1;
    window.clearTimeout(timer.current);
    busy.current = false;
    setTyping(false);
    resetMemory();
    setMessages([greeting()]);
    setChips(starterSuggestions);
  }, []);

  return { messages, typing, chips, send, reset };
}
