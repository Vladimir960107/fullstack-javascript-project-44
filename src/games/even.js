// evenGame.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_EVEN = 1;
const MAX_RANDOM_INT_EVEN = 100;

// Функция для проверки, является ли число четным
const isEven = (number) => number % 2 === 0;

// Функция для вывода начального сообщения игры
export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция для проведения раунда игры
export const generateRound = () => {
  const question = generateNumber(MIN_RANDOM_INT_EVEN, MAX_RANDOM_INT_EVEN);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default { description, generateRound };
