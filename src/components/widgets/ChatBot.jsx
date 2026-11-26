/**
 * ChatBot — floating macOS-style assistant window.
 * Uses askBot() (scripted engine, AI-upgrade-ready). Renders safe mini-markdown,
 * plus an inline chart for questions that carry one (see chatbot/intents `chart`),
 * and swaps the suggestion row to that reply's follow-ups so the conversation
 * has an obvious next step instead of resetting every turn.
 */
import { useCallback, useEffect, useState } from 'react';
import AppIcon from '@/components/ui/AppIcon';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useSectionNav } from '@/hooks/useNav';
import { profile } from '@/data/profile';
import ChatPanel from './chatbot/ChatPanel';
import { useChat } from './chatbot/useChat';
import { useTeaser } from './chatbot/useTeaser';
import { usePop } from './chatbot/usePop';
import s from './ChatBot.module.css';

export default function ChatBot() {
  const hidden = useScrollDirection();
  const goToSection = useSectionNav();
  const [open, setOpen] = useState(false);
  const chat = useChat();
  const { teaser, dismissTeaser } = useTeaser(open);
  const panel = usePop(open);
  const nudge = usePop(teaser);

  useEffect(() => {
    document.body.classList.toggle('chat-lock', open);
    return () => document.body.classList.remove('chat-lock');
  }, [open]);

  const toggle = useCallback(() => {
    if (!open) dismissTeaser();
    setOpen(!open);
  }, [open, dismissTeaser]);

  const close = useCallback(() => setOpen(false), []);

  const runSection = useCallback(
    (id) => {
      setOpen(false);
      goToSection(id);
    },
    [goToSection],
  );

  const launcherCls = [s.launcher, open ? s.open : '', hidden && !open ? s.scrollHidden : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={s.root}>
      {panel.mounted && (
        <ChatPanel
          chat={chat}
          open={open}
          leaving={panel.leaving}
          onClose={close}
          onSection={runSection}
        />
      )}

      {nudge.mounted && (
        <button type="button" className={`${s.teaser} ${nudge.leaving ? s.popLeave : s.popEnter}`} onClick={toggle}>
          👋 Ask me about {profile.firstName}&apos;s projects
          <span
            className={s.teaserX}
            role="button"
            aria-label="Dismiss"
            onClick={(e) => {
              e.stopPropagation();
              dismissTeaser();
            }}
          >
            ×
          </span>
        </button>
      )}

      <button type="button" className={launcherCls} aria-label="Open chat assistant" onClick={toggle}>
        <AppIcon name={open ? 'close' : 'chat'} size={24} />
      </button>
    </div>
  );
}
