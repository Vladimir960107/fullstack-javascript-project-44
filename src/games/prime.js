import GetRandomArbitraryInt from './getrandom.js';

const MIN_RANDOM_INT_PRIME = 0;
const MAX_RANDOM_INT_PRIME = 100;

const IsPrimeNumber = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

const Prime = () => {
  const randomPrimeNumber = GetRandomArbitraryInt(MIN_RANDOM_INT_PRIME, MAX_RANDOM_INT_PRIME);
  return [IsPrimeNumber(randomPrimeNumber), `${randomPrimeNumber}`];
};

export default Prime;
