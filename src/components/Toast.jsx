import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import './Footer.css';

/* ── Context ─────────────────────────────────────────────── */
const ToastCtx = createContext(null);

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx.show;
}

/* ── Provider + rendered pill ────────────────────────────── */
export function ToastProvider({ children }) {
  const [msg,     setMsg]     = useState('copied!');
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const show = useCallback((message = 'copied!') => {
    // restart timer on rapid second click
    clearTimeout(timerRef.current);
    setMsg(message);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 1800);
  }, []);

  return (
    <ToastCtx.Provider value={{ show }}>
      {children}

      {/* Toast pill — always in DOM, toggled via class */}
      <div
        className={'toast-wrap' + (visible ? ' is-visible' : '')}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-label={visible ? msg : undefined}
      >
        <FiCheck className="toast-icon" aria-hidden="true" />
        {msg}
      </div>
    </ToastCtx.Provider>
  );
}
