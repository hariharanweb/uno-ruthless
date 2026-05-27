import React from 'react';
import { CardShell, COLOR_MAP } from './UnoCard';

// No-entry circle: outline ring + diagonal slash
function SkipIcon({ color, size }) {
  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle
        cx="50" cy="50" r="42"
        stroke={color}
        strokeWidth="11"
      />
      {/* Diagonal slash top-right → bottom-left */}
      <line
        x1="79" y1="21" x2="21" y2="79"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SkipCard({ color }) {
  const { text } = COLOR_MAP[color];

  return (
    <CardShell
      color={color}
      cornerContent={<SkipIcon color="white" size="0.36in" />}
      ovalContent={<SkipIcon color={text} size="1.25in" />}
    />
  );
}
