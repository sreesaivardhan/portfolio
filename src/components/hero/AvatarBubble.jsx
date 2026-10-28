import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

export default function AvatarBubble() {
  const [open, setOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const wrapRef = useRef(null);
  const lastType = useRef('mouse');

  const show = () => {
    setOpen(true);
    setGlitch(true);
    if (wrapRef.current) {
      const r = wrapRef.current.getBoundingClientRect();
      // Anchor to the avatar's left edge so the bubble sits directly above the image
      const bubbleW = Math.min(260, window.innerWidth - 32);
      const rawLeft = r.left;
      const clampedLeft = Math.min(rawLeft, window.innerWidth - bubbleW - 16);
      setPos({ top: r.top - 8, left: Math.max(16, clampedLeft) });
    }
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const bubbleStyle = {
    position: 'fixed',
    top: pos.top + 'px',
    left: pos.left + 'px',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transform: open
      ? 'translateY(-100%) translateY(-16px)'
      : 'translateY(-100%) translateY(-6px) scale(.85) rotate(-4deg)',
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
        <span className="glitch" data-text="hey, i am sai vardhan">
          hey, i am vardhan
        </span>
      </div>
    </div>
  );
}
