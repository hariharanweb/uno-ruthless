import React from 'react';
import { CardShell, COLOR_MAP } from './UnoCard';

const CARD_W = 38;
const CARD_H = 52;
const OFFSET = 2;    // px shift per card in x and y
const COUNT = 12;

// Stack of COUNT cards, bottom to top, top card face-up with "+12"
// Bounding box in 100×100 viewBox:
//   top card top-left : (20, 13)
//   bottom card       : (20 + 11*2, 13 + 11*2) = (42, 35)
//   overall           : (20,13)→(80,87) — centered at (50,50)
function CardStackIcon({ color, size }) {
  const cards = Array.from({ length: COUNT }, (_, i) => i); // 0 = top, 11 = bottom

  return (
    <svg
      style={{ width: size, height: size, display: 'block' }}
      viewBox="0 0 100 100"
    >
      {/* Render bottom→top so top card paints last (on top visually) */}
      {[...cards].reverse().map((n) => {
        const x = 20 + n * OFFSET;
        const y = 13 + n * OFFSET;
        const isTop = n === 0;

        return (
          <g key={n}>
            <rect
              x={x} y={y}
              width={CARD_W} height={CARD_H}
              rx={3} ry={3}
              fill={isTop ? 'white' : color}
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={isTop ? 1 : 1.5}
            />
            {isTop && (
              <>
                {/* Inner frame on the face-up card */}
                <rect
                  x={x + 2.5} y={y + 2.5}
                  width={CARD_W - 5} height={CARD_H - 5}
                  rx={2} ry={2}
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity="0.35"
                />
                {/* "+12" label */}
                <text
                  x={x + CARD_W / 2}
                  y={y + CARD_H / 2 + 5}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="900"
                  fill={color}
                  fontFamily="Arial Black, Arial, sans-serif"
                >
                  +12
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function DrawTwelveCard({ color }) {
  const { text } = COLOR_MAP[color];

  const cornerContent = (
    <span
      style={{
        color: 'white',
        fontSize: '0.30in',
        fontWeight: 900,
        lineHeight: 1,
        fontFamily: "'Arial Black', Arial, sans-serif",
        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
        display: 'block',
        whiteSpace: 'nowrap',
      }}
    >
      +12
    </span>
  );

  return (
    <CardShell
      color={color}
      cornerContent={cornerContent}
      ovalContent={<CardStackIcon color={text} size="1.25in" />}
    />
  );
}
