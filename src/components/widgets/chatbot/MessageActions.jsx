/**
 * MessageActions — buttons under a bot reply.
 * `to` → router page (closes the chat), `href` → external / download link,
 * `section` → closes the chat and scrolls to that home-page section.
 */
import { useNavigate } from 'react-router-dom';
import s from './ChatMessage.module.css';

export default function MessageActions({ actions, onClose, onSection }) {
  const navigate = useNavigate();

  return (
    <div className={s.actions}>
      {actions.map((a) => {
        if (a.to) {
          return (
            <a
              key={a.label}
              href={a.to}
              className={s.act}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                navigate(a.to);
              }}
            >
              {a.label}
            </a>
          );
        }
        if (a.href) {
          return (
            <a key={a.label} href={a.href} className={s.act} target="_blank" rel="noopener noreferrer">
              {a.label}
            </a>
          );
        }
        return (
          <button key={a.label} type="button" className={s.act} onClick={() => onSection(a.section)}>
            {a.label}
          </button>
        );
      })}
    </div>
  );
}
