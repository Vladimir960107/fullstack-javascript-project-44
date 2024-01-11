import getRandomArbitraryInt from './getrandom.js';

const MIN_RANDOM_INT_DIVISOR = 1;
const MAX_RANDOM_INT_DIVISOR = 100;

const GreatestCommonDivisor = (number1, number2) => {
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

const generateDivisor = () => {
  const arbitraryNumber1 = getRandomArbitraryInt(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  const arbitraryNumber2 = getRandomArbitraryInt(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  return [GreatestCommonDivisor(arbitraryNumber1, arbitraryNumber2), `${arbitraryNumber1} ${arbitraryNumber2}`];
};

export default generateDivisor;
