// prime.js
import generateNumber from '../utils.js';

const MIN_RANDOM_INT_PRIME = 2;
const MAX_RANDOM_INT_PRIME = 100;

// Функция для проверки, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Начальное сообщение игры
export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Раунд игры
export const generateRound = () => {
  const question = generateNumber(MIN_RANDOM_INT_PRIME, MAX_RANDOM_INT_PRIME);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
