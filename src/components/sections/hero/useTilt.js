/**
 * useTilt — mouse-tilt "3D" effect for the hero portrait. The frame rotates
 * toward the cursor, and the floating badge layer drifts a little further
 * for a layered parallax feel. Disabled under prefers-reduced-motion.
 */
import { useState } from 'react';

const FRAME_REST = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
const BADGE_REST = 'translate3d(0, 0, 0)';

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useTilt() {
  const [frameTransform, setFrame] = useState(FRAME_REST);
  const [badgeTransform, setBadge] = useState(BADGE_REST);

  function handleTilt(e) {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setFrame(
      `perspective(1000px) rotateX(${(-py * 10).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`,
    );
    setBadge(`translate3d(${(px * 16).toFixed(1)}px, ${(py * 16).toFixed(1)}px, 0)`);
  }

  function resetTilt() {
    setFrame(FRAME_REST);
    setBadge(BADGE_REST);
  }

  return { frameTransform, badgeTransform, handleTilt, resetTilt };
}
