// progression.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const RECOMMENDED_PROG_LENGTH = 10;

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
export const description = 'What number is missing in the progression?';

// Раунд игры
export const playRound = () => {
  const startNumber = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const step = generateNumber(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const hiddenIndex = generateNumber(0, RECOMMENDED_PROG_LENGTH - 1);

  return createProgression(startNumber, step, RECOMMENDED_PROG_LENGTH, hiddenIndex);
};

export default { description, playRound };
