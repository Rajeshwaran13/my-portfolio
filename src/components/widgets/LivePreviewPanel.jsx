/** LivePreviewPanel — slide-in "Run in Browser" panel that embeds a project's live app in an iframe. */
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import AppIcon from '@/components/ui/AppIcon';
import { usePresence } from './usePresence';
import s from './LivePreviewPanel.module.css';

export default function LivePreviewPanel({ open, onClose, url, title }) {
  const [slow, setSlow] = useState(false);
  const loaded = useRef(false);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const { mounted, shown } = usePresence(open, 300);

  useEffect(() => {
    if (!open) return undefined;
    loaded.current = false;
    setSlow(false);
    // Many enterprise apps block framing (X-Frame-Options/CSP) with no
    // detectable error — a stalled load after a few seconds is the tell.
    const slowTimer = setTimeout(() => {
      if (!loaded.current) setSlow(true);
    }, 4000);
    const onKey = (e) => {
      if (e.key === 'Escape') closeRef.current();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(slowTimer);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  function onFrameLoad() {
    loaded.current = true;
    setSlow(false);
  }

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${s.overlay} ${shown ? s.shown : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`${s.panel} surface`} role="dialog" aria-modal="true" aria-label={`${title} — live preview`}>
        <div className={s.titlebar}>
          <span className={s.title}>{title} — running in browser</span>
          <a href={url} target="_blank" rel="noopener" className={s.tool} aria-label="Open in a new tab">
            <AppIcon name="external" size={15} />
          </a>
          <button type="button" className={s.tool} aria-label="Close preview" onClick={onClose}>
            <AppIcon name="close" size={16} />
          </button>
        </div>
        <div className={s.body}>
          {slow && (
            <div className={s.fallback}>
              <p>This app may not allow embedding in another site.</p>
              <a href={url} target="_blank" rel="noopener" className="btn btn-primary">
                <AppIcon name="external" size={16} /> Open live app in a new tab
              </a>
            </div>
          )}
          <iframe
            src={url}
            title={`${title} live preview`}
            className={s.frame}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onLoad={onFrameLoad}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
