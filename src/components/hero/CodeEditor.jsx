import { useEffect, useRef, useState } from 'react';
import { editorLines } from '../../data/heroContent';

/* ── Build a flat character sequence from the logical lines ── */
function buildSequence(lines) {
  const seq = [];
  lines.forEach((line, li) => {
    if (line.type === 'blank') {
      seq.push({ lineIdx: li, char: '' });
      return;
    }
    const fullText =
      line.type === 'status'
        ? line.label + '  ' + line.text
        : line.text;
    for (let ci = 0; ci < fullText.length; ci++) {
      seq.push({ lineIdx: li, char: fullText[ci] });
    }
    // end-of-line marker (signals 220ms pause)
    seq.push({ lineIdx: li, char: null, eol: true });
  });
  return seq;
}

const sequence = buildSequence(editorLines);

/* ── Render a single logical line with correct colour ─────── */
function EditorLine({ line, partialText, isCurrent, isDone }) {
  if (line.type === 'blank') {
    return (
      <span style={{ display: 'block', height: '1.7em' }}>
        {isCurrent && !isDone && <span className="editor-cursor" aria-hidden="true" />}
      </span>
    );
  }

  if (line.type === 'status') {
    const labelPart   = partialText.slice(0, line.label.length);
    const spacerPart  = partialText.slice(line.label.length, line.label.length + 2);
    const textPart    = partialText.slice(line.label.length + 2);
    return (
      <span style={{ display: 'block' }}>
        <span className="editor-status-label">{labelPart}</span>
        <span>{spacerPart}</span>
        <span>{textPart}</span>
        {isCurrent && !isDone && <span className="editor-cursor" aria-hidden="true" />}
      </span>
    );
  }

  return (
    <span style={{ display: 'block' }}>
      {partialText}
      {isCurrent && !isDone && <span className="editor-cursor" aria-hidden="true" />}
    </span>
  );
}

/* ── Ghost (invisible) full text to reserve height ─────────── */
function GhostLine({ line }) {
  if (line.type === 'blank') return <span style={{ display: 'block', height: '1.7em' }} />;
  const text = line.type === 'status' ? line.label + '  ' + line.text : line.text;
  return <span style={{ display: 'block' }}>{text}</span>;
}

export default function CodeEditor() {
  const cardRef   = useRef(null);
  const rafRef    = useRef(null);
  const seqIdx    = useRef(0);
  const eolTimer  = useRef(null);
  const reduced   = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  /* partials[lineIdx] = string typed so far for that line */
  const initPartials = () => editorLines.map(() => '');
  const [partials,  setPartials]  = useState(initPartials);
  const [curLine,   setCurLine]   = useState(0);
  const [done,      setDone]      = useState(false);
  const [started,   setStarted]   = useState(false);

  /* ── Complete instantly ─────────────────────────────────── */
  const completeAll = () => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(eolTimer.current);
    setPartials(editorLines.map(line => {
      if (line.type === 'blank') return '';
      return line.type === 'status' ? line.label + '  ' + line.text : line.text;
    }));
    setCurLine(editorLines.length - 1);
    setDone(true);
  };

  /* ── Start typing engine ────────────────────────────────── */
  const startTyping = () => {
    if (reduced.current) { completeAll(); return; }

    let last = performance.now();

    const tick = (now) => {
      if (now - last < 16) { rafRef.current = requestAnimationFrame(tick); return; }
      last = now;

      if (seqIdx.current >= sequence.length) { setDone(true); return; }

      const item = sequence[seqIdx.current];

      if (item.eol) {
        seqIdx.current++;
        setCurLine(item.lineIdx + 1);
        eolTimer.current = setTimeout(() => {
          rafRef.current = requestAnimationFrame(tick);
        }, 220);
        return;
      }

      if (item.char !== null) {
        setPartials(prev => {
          const next = [...prev];
          next[item.lineIdx] = (next[item.lineIdx] || '') + item.char;
          return next;
        });
        setCurLine(item.lineIdx);
      }

      seqIdx.current++;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  /* ── IntersectionObserver: start when 35% visible ────────── */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          startTyping();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
      clearTimeout(eolTimer.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Click to complete ──────────────────────────────────── */
  const handleClick = () => { if (!done) completeAll(); };

  return (
    <div
      ref={cardRef}
      className="editor-card card"
      onClick={handleClick}
      style={{ cursor: done ? 'default' : 'pointer', position: 'relative' }}
      title={done ? '' : 'click to skip'}
    >
      {/* Title bar */}
      <div className="editor-titlebar">
        <span className="editor-dot" />
        <span className="editor-dot" />
        <span className="editor-dot" />
        <span className="editor-tab">about-me.md</span>
      </div>

      {/* Body: gutter + content, with invisible ghost for height */}
      <div style={{ position: 'relative' }}>

        {/* Ghost layer — reserves final height */}
        <div
          className="editor-ghost editor-body"
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, padding: '16px 0', overflow: 'hidden' }}
        >
          <div className="editor-gutter">
            {editorLines.map((_, i) => (
              <span key={i} style={{ display: 'block' }}>{i + 1}</span>
            ))}
          </div>
          <div className="editor-content">
            {editorLines.map((line, i) => (
              <GhostLine key={i} line={line} />
            ))}
          </div>
        </div>

        {/* Visible typed layer */}
        <div className="editor-body" aria-live="polite" aria-atomic="false">
          <div className="editor-gutter" aria-hidden="true">
            {editorLines.map((_, i) => (
              <span key={i} style={{ display: 'block' }}>
                {partials[i] !== undefined && (partials[i].length > 0 || i < curLine || done) ? i + 1 : ''}
              </span>
            ))}
          </div>
          <div className="editor-content">
            {editorLines.map((line, i) => (
              <EditorLine
                key={i}
                line={line}
                partialText={partials[i] || ''}
                isCurrent={i === curLine && !done}
                isDone={done}
              />
            ))}
            {done && <span className="editor-cursor" aria-hidden="true" />}
          </div>
        </div>
      </div>
    </div>
  );
}
