import React from 'react';

export const COLOR_MAP = {
  red:    { bg: '#C0392B', frame: 'rgba(255,255,255,0.55)', text: '#C0392B' },
  blue:   { bg: '#2471A3', frame: 'rgba(255,255,255,0.55)', text: '#2471A3' },
  green:  { bg: '#1E8449', frame: 'rgba(255,255,255,0.55)', text: '#1E8449' },
  yellow: { bg: '#D4AC0D', frame: 'rgba(255,255,255,0.55)', text: '#D4AC0D' },
  wild:   { bg: '#1C1C1E', frame: 'rgba(255,255,255,0.22)', text: '#FFFFFF' },
};

// Shared card shell — oval + frame + two corners.
// cornerContent is rendered at top-left (upright) and bottom-right (rotated 180°).
// ovalContent is rendered inside the slanting oval, already counter-rotated upright.
export function CardShell({ color, cornerContent, ovalContent }) {
  const { bg, frame } = COLOR_MAP[color];

  return (
    <div
      className="uno-card"
      style={{
        width: '2.25in',
        height: '3.5in',
        backgroundColor: bg,
        borderRadius: '0.18in',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        boxShadow: '0 3px 10px rgba(0,0,0,0.35)',
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
        flexShrink: 0,
      }}
    >
      {/* Inner frame */}
      <div
        style={{
          position: 'absolute',
          inset: '0.1in',
          border: `0.05in solid ${frame}`,
          borderRadius: '0.1in',
          pointerEvents: 'none',
        }}
      />

      {/* Top-left corner */}
      <div
        style={{
          position: 'absolute',
          top: '0.18in',
          left: '0.2in',
          userSelect: 'none',
        }}
      >
        {cornerContent}
      </div>

      {/* Slanting oval */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-25deg)',
          width: '1.55in',
          height: '2.3in',
          backgroundColor: 'white',
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Counter-rotate so content stays upright */}
        <div style={{ transform: 'rotate(25deg)', userSelect: 'none' }}>
          {ovalContent}
        </div>
      </div>

      {/* Bottom-right corner (rotated 180° so the card reads from both ends) */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.18in',
          right: '0.2in',
          transform: 'rotate(180deg)',
          userSelect: 'none',
        }}
      >
        {cornerContent}
      </div>
    </div>
  );
}

export function UnoCard({ color, number }) {
  const { text } = COLOR_MAP[color];

  const cornerContent = (
    <span
      style={{
        color: 'white',
        fontSize: '0.38in',
        fontWeight: 900,
        lineHeight: 1,
        fontFamily: "'Arial Black', Arial, sans-serif",
        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
        display: 'block',
      }}
    >
      {number}
    </span>
  );

  const ovalContent = (
    <span
      style={{
        color: text,
        fontSize: '1.15in',
        fontWeight: 900,
        fontFamily: "'Arial Black', Arial, sans-serif",
        lineHeight: 1,
      }}
    >
      {number}
    </span>
  );

  return (
    <CardShell color={color} cornerContent={cornerContent} ovalContent={ovalContent} />
  );
}
