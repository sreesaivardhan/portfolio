import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

export default function AvatarBubble() {
  const [open, setOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const wrapRef = useRef(null);
  const lastType = useRef('mouse');

  const show = () => {
    setOpen(true);
    setGlitch(true);
    setTimeout(() => setGlitch(false), 650);
  };
  const hide = () => setOpen(false);

  // touch: tap outside closes
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) hide();
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  // touch devices only: show once after 1.4 s and stay permanently
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    const t = setTimeout(show, 1400);
    return () => clearTimeout(t);
  }, []);

  const bubbleStyle = {
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
  };

  return (
    <div
      ref={wrapRef}
      className={
        'avatar-wrap' +
        (open ? ' is-open' : '') +
        (glitch ? ' is-glitching' : '')
      }
    >
      <button
        type="button"
        className="avatar-btn"
        aria-describedby="hero-bubble"
        aria-label="say hi"
        onPointerDown={(e) => { lastType.current = e.pointerType; }}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') show(); }}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') hide(); }}
        onFocus={show}
        onBlur={hide}
        onClick={() => {
          if (lastType.current !== 'mouse') open ? hide() : show();
        }}
      >
        <img
          src={siteConfig.avatar}
          alt="Sai Vardhan"
          width="168"
          height="168"
          fetchPriority="high"
          decoding="async"
          onError={(e) => { e.currentTarget.src = '/images/sai-placeholder.svg'; }}
        />
      </button>

      <div
        id="hero-bubble"
        role="status"
        className="bubble"
        aria-hidden={!open}
        style={bubbleStyle}
      >
        <span className="glitch" data-text="hey, i am vardhan">
          hey, i am vardhan
        </span>
      </div>
    </div>
  );
}
