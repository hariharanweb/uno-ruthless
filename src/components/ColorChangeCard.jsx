import React from 'react';
import { CardShell } from './UnoCard';

// 4-quadrant color wheel — each quarter a UNO color
function ColorWheelIcon({ size }) {
  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
    >
      {/* Red — top-left quarter */}
      <path d="M 50,50 L 10,50 A 40,40 0 0,1 50,10 Z" fill="#C0392B" />
      {/* Blue — top-right quarter */}
      <path d="M 50,50 L 50,10 A 40,40 0 0,1 90,50 Z" fill="#2471A3" />
      {/* Yellow — bottom-right quarter */}
      <path d="M 50,50 L 90,50 A 40,40 0 0,1 50,90 Z" fill="#D4AC0D" />
      {/* Green — bottom-left quarter */}
      <path d="M 50,50 L 50,90 A 40,40 0 0,1 10,50 Z" fill="#1E8449" />
      {/* White dividing cross */}
      <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="3" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="3" />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="3.5" />
    </svg>
  );
}

export function ColorChangeCard() {
  return (
    <CardShell
      color="wild"
      cornerContent={<ColorWheelIcon size="0.36in" />}
      ovalContent={<ColorWheelIcon size="1.2in" />}
    />
  );
}
