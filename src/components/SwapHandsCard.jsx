import React from 'react';
import { CardShell } from './UnoCard';

const FAN_CARDS = [
  { angle: -24, fill: '#D4AC0D' }, // yellow — furthest back
  { angle:  -8, fill: '#1E8449' }, // green
  { angle:   8, fill: '#2471A3' }, // blue
  { angle:  24, fill: '#C0392B' }, // red  — front
];

const CW = 11; // mini card width
const CH = 19; // mini card height

// Two mirrored card fans with ↔ swap arrows between them
function SwapHandsIcon({ size }) {
  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
    >
      {/* Left fan — cards fan upward, rotating around grip at origin */}
      <g transform="translate(20, 64)">
        {FAN_CARDS.map(({ angle, fill }, i) => (
          <rect
            key={i}
            transform={`rotate(${angle}, 0, 0)`}
            x={-CW / 2} y={-CH}
            width={CW} height={CH}
            rx={2} ry={2}
            fill={fill}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Right fan — horizontally mirrored */}
      <g transform="translate(80, 64) scale(-1, 1)">
        {FAN_CARDS.map(({ angle, fill }, i) => (
          <rect
            key={i}
            transform={`rotate(${angle}, 0, 0)`}
            x={-CW / 2} y={-CH}
            width={CW} height={CH}
            rx={2} ry={2}
            fill={fill}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Swap arrows — right-pointing (top) */}
      <line x1="35" y1="42" x2="58" y2="42" stroke="#222" strokeWidth="4" strokeLinecap="round" />
      <polyline
        points="52,36 60,42 52,48"
        fill="none" stroke="#222" strokeWidth="4"
        strokeLinejoin="round" strokeLinecap="round"
      />

      {/* Swap arrows — left-pointing (bottom) */}
      <line x1="65" y1="56" x2="42" y2="56" stroke="#222" strokeWidth="4" strokeLinecap="round" />
      <polyline
        points="48,50 40,56 48,62"
        fill="none" stroke="#222" strokeWidth="4"
        strokeLinejoin="round" strokeLinecap="round"
      />
    </svg>
  );
}

// Compact corner icon — just the ↔ arrows (fans too small at corner size)
function SwapCornerIcon({ size }) {
  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Right arrow */}
      <line x1="10" y1="35" x2="70" y2="35" stroke="white" strokeWidth="11" />
      <polyline points="58,22 73,35 58,48" stroke="white" strokeWidth="11" />
      {/* Left arrow */}
      <line x1="90" y1="65" x2="30" y2="65" stroke="white" strokeWidth="11" />
      <polyline points="42,52 27,65 42,78" stroke="white" strokeWidth="11" />
    </svg>
  );
}

export function SwapHandsCard() {
  return (
    <CardShell
      color="wild"
      cornerContent={<SwapCornerIcon size="0.36in" />}
      ovalContent={<SwapHandsIcon size="1.2in" />}
    />
  );
}
