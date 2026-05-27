import React from 'react';
import { CardShell, COLOR_MAP } from './UnoCard';

// Two parallel arcs with arrowheads, pointing in opposite directions
function ReverseIcon({ color, size }) {
  const sw = 9;   // stroke width
  const asw = 8;  // arrowhead stroke width

  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
      fill="none"
      strokeLinecap="round"
    >
      {/* Top arc: left → right (curves upward) */}
      <path
        d="M 12,46 C 20,16 80,16 88,46"
        stroke={color}
        strokeWidth={sw}
      />
      {/* Arrowhead at right end of top arc, pointing down-right */}
      <path
        d="M 76,33 L 88,46 L 78,58"
        stroke={color}
        strokeWidth={asw}
        strokeLinejoin="round"
      />

      {/* Bottom arc: right → left (curves downward) */}
      <path
        d="M 88,54 C 80,84 20,84 12,54"
        stroke={color}
        strokeWidth={sw}
      />
      {/* Arrowhead at left end of bottom arc, pointing up-left */}
      <path
        d="M 24,67 L 12,54 L 22,42"
        stroke={color}
        strokeWidth={asw}
        strokeLinejoin="round"
      />
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
