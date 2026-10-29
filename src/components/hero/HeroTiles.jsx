import { useEffect, useState } from 'react';
import './HeroTiles.css';

/* Target tile size per breakpoint */
function targetSize(w) {
  if (w >= 1024) return 64;
  if (w >=  640) return 56;
  return 44;
}

/* Max tile count per breakpoint */
function maxTiles(w) {
  if (w >= 1024) return 520;
  if (w >=  640) return 340;
  return 260;
}

/* Compute cols/rows from container dimensions */
function computeGrid(w, h) {
  if (!w || !h) return { cols: 1, rows: 1 };
  let size = targetSize(w);
  const cap = maxTiles(w);

  let cols = Math.ceil(w / size);
  let rows = Math.ceil(h / size);

  if (w >= 1024) {
    while (cols * rows > cap) {
      size += 2;
      cols = Math.ceil(w / size);
      rows = Math.ceil(h / size);
    }
  }

  return { cols, rows };
}

export default function HeroTiles() {
  const [grid, setGrid] = useState({ cols: 1, rows: 1 });

  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const measure = () => {
      const { width, height } = hero.getBoundingClientRect();
      const nextGrid = computeGrid(width, height);
      setGrid((currentGrid) =>
        currentGrid.cols === nextGrid.cols && currentGrid.rows === nextGrid.rows
          ? currentGrid
          : nextGrid
      );
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(hero);
    return () => ro.disconnect();
  }, []);

  const tiles = [];
  for (let r = 0; r < grid.rows; r++) {
    for (let c = 0; c < grid.cols; c++) {
      tiles.push(
        <span
          key={r + '-' + c}
          className="hero-tile"
          style={{ '--r': r, '--c': c }}
        />
      );
    }
  }

  return (
    <div
      className="hero-tiles"
      aria-hidden="true"
      style={{ '--cols': grid.cols, '--rows': grid.rows }}
    >
      {tiles}
    </div>
  );
}
