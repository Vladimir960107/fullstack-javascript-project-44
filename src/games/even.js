import generateNumber from '../utils.js';

const MIN_RANDOM_INT_EVEN = 1;
const MAX_RANDOM_INT_EVEN = 100;

const isEven = (number) => number % 2 === 0;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const question = generateNumber(MIN_RANDOM_INT_EVEN, MAX_RANDOM_INT_EVEN);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
