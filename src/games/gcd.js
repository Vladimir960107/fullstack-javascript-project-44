import generateNumber from '../utils.js';

const MIN_RANDOM_INT_DIVISOR = 1;
const MAX_RANDOM_INT_DIVISOR = 100;

const findGreatestCommonDivisor = (number1, number2) => {
  let t;
  let x = number1;
  let y = number2;
  while (y) {
    t = y;
    y = x % y;
    x = t;
  }
  return x;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = generateNumber(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  const num2 = generateNumber(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGreatestCommonDivisor(num1, num2).toString();
  return [question, correctAnswer];
};
