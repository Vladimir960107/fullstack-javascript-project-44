import getRandomArbitraryInt from './getrandom.js';

const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const MIN_PROG_LENGTH = 5;
const MAX_PROG_LENGTH = 15;
const RECOMMENDED_PROG_LENGTH = 10;
const USE_RECOMMENDED_PROG_LENGTH = true;

const CreateProgression = (startNumber, progNumber, quantityOfNumbers, missingIndex) => {
  let progression = '';
  let temp = startNumber;
  const missingNumber = startNumber + missingIndex * progNumber;
  for (let i = 0; i < quantityOfNumbers; i += 1) {
    if (i === missingIndex) {
      progression += '.. ';
      temp += progNumber;
    } else {
      progression += `${temp} `;
      temp += progNumber;
    }
  }
  return [missingNumber, progression];
};

const generateProgression = () => {
  const startNumber = getRandomArbitraryInt(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const progNumber = getRandomArbitraryInt(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const RandQuantity = getRandomArbitraryInt(MIN_PROG_LENGTH, MAX_PROG_LENGTH);
  const quantityOfNumbers = USE_RECOMMENDED_PROG_LENGTH ? RECOMMENDED_PROG_LENGTH : RandQuantity;
  const missingIndex = getRandomArbitraryInt(0, quantityOfNumbers);
  return CreateProgression(startNumber, progNumber, quantityOfNumbers, missingIndex);
};

export default generateProgression;
