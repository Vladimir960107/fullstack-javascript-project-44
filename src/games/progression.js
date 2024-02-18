// progression.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const PROG_LENGTH = 10;

// Начальное сообщение игры
export const description = 'What number is missing in the progression?';

// Раунд игры
export const generateRound = () => {
  const startNumber = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const step = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const hiddenIndex = generateNumber(0, PROG_LENGTH - 1);

  const progression = Array.from({ length: PROG_LENGTH }, (_, i) => startNumber + step * i);
  const correctAnswer = progression[hiddenIndex].toString();
  progression.splice(hiddenIndex, 1, '..');
  const question = progression.join(' ');
  return [question, correctAnswer];
};
