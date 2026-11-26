/** ChatPanel — the assistant window: header, message list, suggestion chips, composer. */
import { useEffect, useRef } from 'react';
import AppIcon from '@/components/ui/AppIcon';
import { profile } from '@/data/profile';
import ChatMessage from './ChatMessage';
import ChatComposer from './ChatComposer';
import s from './ChatPanel.module.css';

export default function ChatPanel({ chat, open, leaving, onClose, onSection }) {
  const { messages, typing, chips, send, reset } = chat;
  const scroller = useRef(null);

  // Keep the latest message in view (on open, new message, typing toggle).
  useEffect(() => {
    if (!open) return;
    const el = scroller.current;
    el?.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [open, messages, typing]);

  return (
    <section
      className={`${s.panel} ${leaving ? s.popLeave : s.popEnter}`}
      role="dialog"
      aria-label="Portfolio assistant"
    >
      <header className={s.head}>
        {profile.photo ? (
          <img className={s.avatar} src={profile.photo} alt={profile.name} />
        ) : (
          <span className={s.avatar}>{profile.initials}</span>
        )}
        <div className={s.who}>
          <strong>Portfolio Assistant</strong>
          <span className={s.status}>
            <i /> Online · usually instant
          </span>
        </div>
        <button type="button" className={s.x} aria-label="Start a new chat" title="New chat" onClick={reset}>
          <AppIcon name="spark" size={17} />
        </button>
        <button type="button" className={s.x} aria-label="Close chat" onClick={onClose}>
          <AppIcon name="close" size={18} />
        </button>
      </header>

      <div ref={scroller} className={s.messages}>
        <div className={s.messagesInner}>
          {messages.map((m, i) => (
            <ChatMessage key={i} msg={m} onClose={onClose} onSection={onSection} />
          ))}
          {typing && <ChatMessage typing />}
        </div>
      </div>

      <div className={s.suggestions}>
        {chips.map((c) => (
          <button type="button" key={c} className={s.sugg} onClick={() => send(c)}>
            {c}
          </button>
        ))}
      </div>

      <ChatComposer onSend={send} />
    </section>
  );
}
