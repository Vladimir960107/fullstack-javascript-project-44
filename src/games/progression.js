// progression.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const RECOMMENDED_PROG_LENGTH = 10;

// Функция для создания прогрессии и определения пропущенного числа
const createProgression = (startNumber, step, length) => {
  const progression = Array.from({ length }, (_, i) => startNumber + step * i);
  return progression;
};

// Начальное сообщение игры
export const description = 'What number is missing in the progression?';

// Раунд игры
export const playRound = () => {
  const startNumber = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const step = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const hiddenIndex = generateNumber(0, RECOMMENDED_PROG_LENGTH - 1);

  const progression = createProgression(startNumber, step, RECOMMENDED_PROG_LENGTH);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default { description, playRound };
