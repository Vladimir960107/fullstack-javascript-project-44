// progression.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const MIN_PROG_LENGTH = 5;
const MAX_PROG_LENGTH = 15;
const RECOMMENDED_PROG_LENGTH = 10;
const USE_RECOMMENDED_PROG_LENGTH = true;

// Функция для создания прогрессии и определения пропущенного числа
const createProgression = (startNumber, step, length, hiddenIndex) => {
  let progression = '';
  let currentNumber = startNumber;
  const hiddenNumber = startNumber + hiddenIndex * step;

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression += '.. ';
    } else {
      progression += `${currentNumber} `;
    }
    currentNumber += step;
  }

  return [progression.trim(), hiddenNumber.toString()];
};

// Начальное сообщение игры
export const startGame = () => 'What number is missing in the progression?';

// Раунд игры
export const playRound = () => {
  const startNumber = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const step = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const length = USE_RECOMMENDED_PROG_LENGTH
    ? RECOMMENDED_PROG_LENGTH
    : generateNumber(MIN_PROG_LENGTH, MAX_PROG_LENGTH);
  const hiddenIndex = generateNumber(0, length - 1);

  return createProgression(startNumber, step, length, hiddenIndex);
};

export default { startGame, playRound };
