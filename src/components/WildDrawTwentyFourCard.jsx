import React from 'react';
import { CardShell } from './UnoCard';

// 4 colors used in the stacked card illustration
const STACK_COLORS = [
  '#C0392B', // Red    — top-left
  '#2471A3', // Blue   — top-right
  '#1E8449', // Green  — bottom-left
  '#D4AC0D', // Yellow — bottom-right
];

const CW = 20;    // mini card width
const CH = 28;    // mini card height
const LAYERS = 6; // cards visible per stack
const D = 2;      // px offset per layer

// 2×2 grid of 4 colored stacks, each LAYERS deep.
// Each stack footprint: CW+(LAYERS-1)*D = 30, CH+(LAYERS-1)*D = 38
// Grid: 2×30 + 8gap = 68 wide, 2×38 + 8gap = 84 tall
// Centered in 100×100: startX=(100-68)/2=16, startY=(100-84)/2=8
const POSITIONS = [
  { x: 16, y: 8  }, // Red    top-left
  { x: 54, y: 8  }, // Blue   top-right
  { x: 16, y: 54 }, // Green  bottom-left
  { x: 54, y: 54 }, // Yellow bottom-right
];

function FourColorStacks({ size }) {
  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
    >
      {POSITIONS.map(({ x: sx, y: sy }, si) => {
        const color = STACK_COLORS[si];

        // Render bottom layer first so the top layer paints on top
        return Array.from({ length: LAYERS }, (_, i) => {
          const layer = LAYERS - 1 - i; // LAYERS-1 = backmost, 0 = frontmost
          const cx = sx + layer * D;
          const cy = sy + layer * D;
          const isFront = layer === 0;

          return (
            <rect
              key={`${si}-${layer}`}
              x={cx} y={cy}
              width={CW} height={CH}
              rx={2} ry={2}
              fill={color}
              stroke="rgba(255,255,255,0.65)"
              strokeWidth={isFront ? 1.8 : 1.2}
            />
          );
        });
      })}
    </svg>
  );
}

export function WildDrawTwentyFourCard() {
  const cornerContent = (
    <span
      style={{
        color: 'white',
        fontSize: '0.30in',
        fontWeight: 900,
        lineHeight: 1,
        fontFamily: "'Arial Black', Arial, sans-serif",
        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        display: 'block',
        whiteSpace: 'nowrap',
      }}
    >
      +24
    </span>
  );

  return (
    <CardShell
      color="wild"
      cornerContent={cornerContent}
      ovalContent={<FourColorStacks size="1.2in" />}
    />
  );
}
