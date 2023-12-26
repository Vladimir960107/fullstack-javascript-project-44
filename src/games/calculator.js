import GetRandomArbitraryInt from './getrandom.js';

const MIN_RANDOM_INT_CALC = 1;
const MAX_RANDOM_INT_CALC = 10;
const STRING_OF_OPERATIONS = ['+', '-', '*'];

const Calculator = () => {
  const arbitraryNumber1 = GetRandomArbitraryInt(MIN_RANDOM_INT_CALC, MAX_RANDOM_INT_CALC);
  const arbitraryNumber2 = GetRandomArbitraryInt(MIN_RANDOM_INT_CALC, MAX_RANDOM_INT_CALC);
  const arbitraryOperation = GetRandomArbitraryInt(0, STRING_OF_OPERATIONS.length);
  switch (arbitraryOperation) {
    case 0:
      return [arbitraryNumber1 + arbitraryNumber2, `${arbitraryNumber1} + ${arbitraryNumber2}`];
    case 1:
      return [arbitraryNumber1 - arbitraryNumber2, `${arbitraryNumber1} - ${arbitraryNumber2}`];
    case 2:
      return [arbitraryNumber1 * arbitraryNumber2, `${arbitraryNumber1} * ${arbitraryNumber2}`];
    default:
      return [null, null];
  }
};

export default Calculator;
