import React from 'react';
import { CardShell } from './UnoCard';

// 4 quarter-circle arcs, one per UNO color, forming a clockwise rotation ring
// Each arc ends with an arrowhead pointing in its travel direction
function ShuffleArrowsIcon({ size }) {
  const sw  = 9; // arc stroke width
  const asw = 8; // arrowhead stroke width

  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
      fill="none"
      strokeLinecap="round"
    >
      {/* Red — top-right quarter (12 → 3 o'clock) */}
      <path d="M 50,15 A 35,35 0 0,1 85,50" stroke="#C0392B" strokeWidth={sw} />
      {/* Arrowhead at (85,50) pointing south */}
      <polyline points="79,42 85,53 91,42" stroke="#C0392B" strokeWidth={asw} strokeLinejoin="round" />

      {/* Yellow — bottom-right quarter (3 → 6 o'clock) */}
      <path d="M 85,50 A 35,35 0 0,1 50,85" stroke="#D4AC0D" strokeWidth={sw} />
      {/* Arrowhead at (50,85) pointing west */}
      <polyline points="58,79 47,85 58,91" stroke="#D4AC0D" strokeWidth={asw} strokeLinejoin="round" />

      {/* Green — bottom-left quarter (6 → 9 o'clock) */}
      <path d="M 50,85 A 35,35 0 0,1 15,50" stroke="#1E8449" strokeWidth={sw} />
      {/* Arrowhead at (15,50) pointing north */}
      <polyline points="9,58 15,47 21,58" stroke="#1E8449" strokeWidth={asw} strokeLinejoin="round" />

      {/* Blue — top-left quarter (9 → 12 o'clock) */}
      <path d="M 15,50 A 35,35 0 0,1 50,15" stroke="#2471A3" strokeWidth={sw} />
      {/* Arrowhead at (50,15) pointing east */}
      <polyline points="42,9 53,15 42,21" stroke="#2471A3" strokeWidth={asw} strokeLinejoin="round" />
    </svg>
  );
}

export function ShuffleHandsCard() {
  return (
    <CardShell
      color="wild"
      cornerContent={<ShuffleArrowsIcon size="0.36in" />}
      ovalContent={<ShuffleArrowsIcon size="1.2in" />}
    />
  );
}
