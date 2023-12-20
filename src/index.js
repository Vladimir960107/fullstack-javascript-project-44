import readlineSync from 'readline-sync';

const MIN_RANDOM_INT_EVEN = 1;
const MAX_RANDOM_INT_EVEN = 100;
const MIN_RANDOM_INT_CALC = 1;
const MAX_RANDOM_INT_CALC = 10;
const MIN_RANDOM_INT_DIVISOR = 1;
const MAX_RANDOM_INT_DIVISOR = 100;
const MIN_RANDOM_INT_PROG_START = 1;
const MAX_RANDOM_INT_PROG_START = 10;
const MIN_PROG_LENGTH = 5;
const MAX_PROG_LENGTH = 15;
const RECOMMENDED_PROG_LENGTH = 10;
const USE_RECOMMENDED_PROG_LENGTH = true;
const MIN_RANDOM_INT_PRIME = 0;
const MAX_RANDOM_INT_PRIME = 100;
const NUMBEROFRIGHTANSWERSBEFOREEXIT = 3;
const STRING_OF_OPERATIONS = ['+', '-', '*'];
const GREETING_MESSAGE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const GREETING_MESSAGE_CALCULATOR = 'What is the result of the expression?';
const GREETING_MESSAGE_DIVISOR = 'Find the greatest common divisor of given numbers.';
const GREETING_MESSAGE_PROGRESSION = 'What number is missing in the progression?';
const GREETING_MESSAGE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const GetRandomArbitraryInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const IsNumberEvenCheckerYesOrNo = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } if (number % 2 === 1) {
    return 'no';
  }
  return null;
};

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

const Divisor = () => {
  const arbitraryNumber1 = GetRandomArbitraryInt(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  const arbitraryNumber2 = GetRandomArbitraryInt(MIN_RANDOM_INT_DIVISOR, MAX_RANDOM_INT_DIVISOR);
  return [GreatestCommonDivisor(arbitraryNumber1, arbitraryNumber2), `${arbitraryNumber1} ${arbitraryNumber2}`];
};

const Progression = () => {
  const startNumber = GetRandomArbitraryInt(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const progNumber = GetRandomArbitraryInt(MIN_RANDOM_INT_PROG_START, MAX_RANDOM_INT_PROG_START);
  const RandQuantity = GetRandomArbitraryInt(MIN_PROG_LENGTH, MAX_PROG_LENGTH);
  const quantityOfNumbers = USE_RECOMMENDED_PROG_LENGTH ? RECOMMENDED_PROG_LENGTH : RandQuantity;
  const missingIndex = GetRandomArbitraryInt(0, quantityOfNumbers);
  return CreateProgression(startNumber, progNumber, quantityOfNumbers, missingIndex);
};

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

const playRound = (counter, game) => {
  let correctAnswer;
  let question;
  switch (game) {
    case 'EvenGame':
      question = GetRandomArbitraryInt(MIN_RANDOM_INT_EVEN, MAX_RANDOM_INT_EVEN);
      correctAnswer = IsNumberEvenCheckerYesOrNo(question);
      break;
    case 'Calculator':
      [correctAnswer, question] = Calculator();
      correctAnswer = correctAnswer.toString();
      break;
    case 'Divisor':
      [correctAnswer, question] = Divisor();
      correctAnswer = correctAnswer.toString();
      break;
    case 'Progression':
      [correctAnswer, question] = Progression();
      correctAnswer = correctAnswer.toString();
      break;
    case 'Prime':
      [correctAnswer, question] = Prime();
      break;
    default:
      [correctAnswer, question] = [null, null];
  }
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return counter + 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return -1;
};

const Game = (name = '', game = 'EvenGame') => {
  switch (game) {
    case 'EvenGame':
      console.log(GREETING_MESSAGE_EVEN);
      break;
    case 'Calculator':
      console.log(GREETING_MESSAGE_CALCULATOR);
      break;
    case 'Divisor':
      console.log(GREETING_MESSAGE_DIVISOR);
      break;
    case 'Progression':
      console.log(GREETING_MESSAGE_PROGRESSION);
      break;
    case 'Prime':
      console.log(GREETING_MESSAGE_PRIME);
      break;
    default:
      console.log('Game was not found. Breaking!');
      return;
  }
  let counterOfRightAnswers = 0;
  while (counterOfRightAnswers < NUMBEROFRIGHTANSWERSBEFOREEXIT) {
    counterOfRightAnswers = playRound(counterOfRightAnswers, game);
    if (counterOfRightAnswers === -1) {
      console.log(`Let's try again, ${name}!`);
      break;
    } else if (counterOfRightAnswers === NUMBEROFRIGHTANSWERSBEFOREEXIT) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default Game;
