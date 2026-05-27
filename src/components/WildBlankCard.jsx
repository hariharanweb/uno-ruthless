import React from 'react';
import { CardShell } from './UnoCard';

// Portrait 4-color oval for the corner.
// viewBox 100×148 ≈ 1.55:2.3 (matches the card's oval proportions).
// Center (50,74), ellipse rx=48 ry=72 — 4 pie-slice quadrants.
function FourColorOvalCorner() {
  return (
    <svg
      style={{ width: '0.28in', height: '0.42in', display: 'block' }}
      viewBox="0 0 100 148"
    >
      {/* Red — top-left */}
      <path d="M 50,74 L 2,74  A 48,72 0 0,1 50,2   Z" fill="#C0392B" />
      {/* Blue — top-right */}
      <path d="M 50,74 L 50,2  A 48,72 0 0,1 98,74  Z" fill="#2471A3" />
      {/* Yellow — bottom-right */}
      <path d="M 50,74 L 98,74 A 48,72 0 0,1 50,146 Z" fill="#D4AC0D" />
      {/* Green — bottom-left */}
      <path d="M 50,74 L 50,146 A 48,72 0 0,1 2,74  Z" fill="#1E8449" />
      {/* White cross */}
      <line x1="50" y1="2"  x2="50" y2="146" stroke="white" strokeWidth="3" />
      <line x1="2"  y1="74" x2="98" y2="74"  stroke="white" strokeWidth="3" />
      {/* Outline */}
      <ellipse cx="50" cy="74" rx="48" ry="72" fill="none" stroke="white" strokeWidth="2.5" />
    </svg>
  );
}

export function WildBlankCard() {
  return (
    <CardShell
      color="wild"
      cornerContent={<FourColorOvalCorner />}
      ovalContent={null}
    />
  );
}
