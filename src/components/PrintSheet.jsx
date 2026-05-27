import React from 'react';
import { UnoCard } from './UnoCard';
import { SkipCard } from './SkipCard';
import { ReverseCard } from './ReverseCard';
import { DrawTwelveCard } from './DrawTwelveCard';
import { WildDrawTwentyFourCard } from './WildDrawTwentyFourCard';
import { ColorChangeCard } from './ColorChangeCard';
import { ShuffleHandsCard } from './ShuffleHandsCard';
import { SwapHandsCard } from './SwapHandsCard';
import { WildBlankCard } from './WildBlankCard';

const COLORS = ['red', 'blue', 'green', 'yellow'];

function buildDeck() {
  const cards = [];
  for (const color of COLORS) {
    // Number cards: 1×0, 2×1–9
    cards.push({ type: 'number', color, number: 0 });
    for (let n = 1; n <= 9; n++) {
      cards.push({ type: 'number', color, number: n });
      cards.push({ type: 'number', color, number: n });
    }
    // Special cards: 2× Skip, 2× Reverse, 2× DrawTwelve per color
    cards.push({ type: 'skip', color });
    cards.push({ type: 'skip', color });
    cards.push({ type: 'reverse', color });
    cards.push({ type: 'reverse', color });
    cards.push({ type: 'draw12', color });
    cards.push({ type: 'draw12', color });
  }
  // Wild cards (colorless)
  cards.push({ type: 'wild24' });
  cards.push({ type: 'wild24' });
  cards.push({ type: 'wild24' });
  cards.push({ type: 'colorchange' });
  cards.push({ type: 'colorchange' });
  cards.push({ type: 'colorchange' });
  cards.push({ type: 'shufflehands' });
  cards.push({ type: 'shufflehands' });
  cards.push({ type: 'swaphands' });
  cards.push({ type: 'swaphands' });
  cards.push({ type: 'wildblank' });
  cards.push({ type: 'wildblank' });
  cards.push({ type: 'wildblank' });
  return cards; // 113 cards total
}

const DECK = buildDeck();

function renderCard(card, i) {
  if (card.type === 'skip')    return <SkipCard       key={i} color={card.color} />;
  if (card.type === 'reverse') return <ReverseCard    key={i} color={card.color} />;
  if (card.type === 'draw12')  return <DrawTwelveCard          key={i} color={card.color} />;
  if (card.type === 'wild24')       return <WildDrawTwentyFourCard key={i} />;
  if (card.type === 'colorchange')  return <ColorChangeCard        key={i} />;
  if (card.type === 'shufflehands') return <ShuffleHandsCard       key={i} />;
  if (card.type === 'swaphands')    return <SwapHandsCard          key={i} />;
  if (card.type === 'wildblank')    return <WildBlankCard          key={i} />;
  return <UnoCard key={i} color={card.color} number={card.number} />;
}

export function PrintSheet() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Screen header */}
      <div className="no-print mb-6 text-center">
        <h1 className="text-3xl font-black text-gray-800 mb-1">UNO Ruthless — Print Sheet</h1>
        <p className="text-gray-500 text-sm">
          {DECK.length} cards · 4 colors · numbers 0–9 · Skip · Reverse · +12 · Wild +24 · Color Change · Shuffle · Swap
        </p>
        <button
          onClick={() => window.print()}
          className="mt-3 px-6 py-2 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors"
        >
          Print
        </button>
      </div>

      {/* Card grid */}
      <div
        className="print-sheet"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.15in',
          padding: '0.25in',
          justifyContent: 'flex-start',
        }}
      >
        {DECK.map(renderCard)}
      </div>
    </div>
  );
}
