import React from 'react';
import { CardShell, COLOR_MAP } from './UnoCard';

// Two thick arrows pointing away from each other (↗ and ↙),
// overlapping in the center like the real UNO reverse card.
function ReverseIcon({ color, size }) {
  // Arrow shape pointing right (→): shaft + filled arrowhead
  const arrow = "M -32,-7 L 10,-7 L 10,-20 L 50,0 L 10,20 L 10,7 L -32,7 Z";

  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
    >
      {/* Arrow 1 — lower half, pointing ↗ */}
      <g transform="translate(50,72) rotate(-45)">
        <path d={arrow} fill={color} />
      </g>

      {/* Arrow 2 — upper half, pointing ↙ */}
      <g transform="translate(50,28) rotate(135)">
        <path d={arrow} fill={color} />
      </g>
    </svg>
  );
}

export function ReverseCard({ color }) {
  const { text } = COLOR_MAP[color];

  return (
    <CardShell
      color={color}
      cornerContent={<ReverseIcon color="white" size="0.36in" />}
      ovalContent={<ReverseIcon color={text} size="1.3in" />}
    />
  );
}
