// progression.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const RECOMMENDED_PROG_LENGTH = 10;

// Начальное сообщение игры
export const description = 'What number is missing in the progression?';

// Раунд игры
export const generateRound = () => {
  const startNumber = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const step = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const hiddenIndex = generateNumber(0, RECOMMENDED_PROG_LENGTH - 1);

  const progression = Array.from({ RECOMMENDED_PROG_LENGTH }, (_, i) => startNumber + step * i);
  const correctAnswer = progression[hiddenIndex].toString();
  const question = progression.splice(hiddenIndex, 1, '..').toString();
  return [question, correctAnswer];
};

export default { description, generateRound };
