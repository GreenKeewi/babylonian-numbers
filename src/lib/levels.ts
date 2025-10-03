export type Level = {
  level: number;
  title: string;
  task: string;
  tooltip: string;
  problem: string | number;
  answer: number;
};

export const levels: Level[] = [
  {
    level: 1,
    title: 'Counting Goods',
    task: 'Represent the number below in Babylonian numerals.',
    tooltip: 'Babylonian numbers are base-60, written with symbols for 1 (▼) and 10 (◄).',
    problem: 37,
    answer: 37,
  },
  {
    level: 2,
    title: 'Time & Stars',
    task: 'A wise astronomer tracks a star moving 45 degrees across the sky. How would she write this number?',
    tooltip: 'The Babylonians measured time and angles in 60s, a system we still use today for minutes, seconds, and degrees.',
    problem: 45,
    answer: 45,
  },
  {
    level: 3,
    title: 'Palace Bricks',
    task: 'A builder needs to combine two piles of bricks. Solve the addition problem.',
    tooltip: 'Babylonians used their number system for everyday tasks like trade, construction, and administration.',
    problem: '20 + 15',
    answer: 35,
  },
];
