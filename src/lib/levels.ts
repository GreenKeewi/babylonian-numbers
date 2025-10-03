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
    problem: 37, // This will be randomized
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

export const finalScribeChallenges: Level[] = [
  {
    level: 4,
    title: 'The Royal Treasury',
    task: 'The king has 59 gold coins and adds 37 more. How many coins are in the treasury?',
    tooltip: 'A true scribe can handle large numbers with ease.',
    problem: '59 + 37',
    answer: 96,
  },
  {
    level: 5,
    title: 'The Great Ziggurat',
    task: 'A ziggurat has 4 sides. If each side has 15 steps, how many steps are there in total?',
    tooltip: 'Think about how to combine multiplication and your Babylonian number skills.',
    problem: '4 * 15',
    answer: 60,
  },
];
