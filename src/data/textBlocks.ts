export interface TextBlock {
  id: string;
  label: string;
  titleLines: string[];
  bodyLines: string[];
  /** Fraction of scroll-container height where this block starts fading in (0–1) */
  startPct: number;
  /** Fraction of scroll-container height where this block finishes fading out (0–1) */
  endPct: number;
}

export const TEXT_BLOCKS: TextBlock[] = [
  {
    id: 'text-1',
    label: '01 — Origin',
    titleLines: ['Born from', 'the earth.'],
    bodyLines: ['Every landscape holds', 'a story older than memory.'],
    startPct: 0.05,
    endPct: 0.30,
  },
  {
    id: 'text-2',
    label: '02 — Movement',
    titleLines: ['Shaped by', 'wind and time.'],
    bodyLines: ['Nature sculpts in silence,', 'patient and relentless.'],
    startPct: 0.35,
    endPct: 0.60,
  },
  {
    id: 'text-3',
    label: '03 — Stillness',
    titleLines: ['Where silence', 'becomes form.'],
    bodyLines: ['At the edge of the horizon,', 'everything converges.'],
    startPct: 0.65,
    endPct: 0.90,
  },
];
