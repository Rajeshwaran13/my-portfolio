/**
 * ChatMessage — one bubble (bot or user), optional action buttons and inline chart.
 * `html` is renderMini() output (escaped, safe). `typing` renders the dots indicator.
 */
import MessageActions from './MessageActions';
import ChatChart from './ChatChart';
import s from './ChatMessage.module.css';

export default function ChatMessage({ msg, typing, onClose, onSection }) {
  if (typing) {
    return (
      <div className={`${s.msg} ${s.bot}`}>
        <span className={`${s.bubble} ${s.typing}`}>
          <i />
          <i />
          <i />
        </span>
      </div>
    );
  }

  return (
    <div className={`${s.msg} ${msg.from === 'user' ? s.user : s.bot}`}>
      <div className={s.bubbleCol}>
        <span className={s.bubble} dangerouslySetInnerHTML={{ __html: msg.html }} />
        {msg.actions?.length > 0 && (
          <MessageActions actions={msg.actions} onClose={onClose} onSection={onSection} />
        )}
        {msg.chart && <ChatChart kind={msg.chart} onClose={onClose} />}
      </div>
    </div>
  );
}
