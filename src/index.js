import readlineSync from 'readline-sync';
import AskNameAndGreet from './cli.js';
import GetRandomArbitraryInt from './games/getrandom.js';
import Calculator from './games/calculator.js';
import Divisor from './games/gcd.js';
import IsNumberEvenCheckerYesOrNo from './games/even.js';
import Progression from './games/progression.js';
import Prime from './games/prime.js';

const MIN_RANDOM_INT_EVEN = 1;
const MAX_RANDOM_INT_EVEN = 100;
const NUMBEROFRIGHTANSWERSBEFOREEXIT = 3;
const GREETING_MESSAGE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const GREETING_MESSAGE_CALCULATOR = 'What is the result of the expression?';
const GREETING_MESSAGE_DIVISOR = 'Find the greatest common divisor of given numbers.';
const GREETING_MESSAGE_PROGRESSION = 'What number is missing in the progression?';
const GREETING_MESSAGE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const Game = (game = 'EvenGame') => {
  const userName = AskNameAndGreet();
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
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (counterOfRightAnswers === NUMBEROFRIGHTANSWERSBEFOREEXIT) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default Game;
