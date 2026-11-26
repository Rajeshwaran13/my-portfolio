/** ChatComposer — message input + send button. Clears only when the message is accepted. */
import { useState } from 'react';
import AppIcon from '@/components/ui/AppIcon';
import s from './ChatPanel.module.css';

export default function ChatComposer({ onSend }) {
  const [input, setInput] = useState('');

  function submit(e) {
    e.preventDefault();
    if (onSend(input)) setInput('');
  }

  return (
    <form className={s.composer} onSubmit={submit}>
      <input
        type="text"
        placeholder="Ask me anything…"
        aria-label="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={s.send} aria-label="Send" disabled={!input.trim()}>
        <AppIcon name="send" size={18} />
      </button>
    </form>
  );
}
