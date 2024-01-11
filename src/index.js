import readlineSync from 'readline-sync';
import askNameAndGreet from './cli.js';
import GetRandomArbitraryInt from './games/getrandom.js';
import Calculator from './games/calculator.js';
import Divisor from './games/gcd.js';
import IsNumberEvenCheckerYesOrNo from './games/even.js';
import Progression from './games/progression.js';
import Prime from './games/prime.js';

const MIN_RANDOM_INT_EVEN = 1;
const MAX_RANDOM_INT_EVEN = 100;
const NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT = 3;

const GREETING_MESSAGES = {
  EvenGame: 'Answer "yes" if the number is even, otherwise answer "no".',
  Calculator: 'What is the result of the expression?',
  Divisor: 'Find the greatest common divisor of given numbers.',
  Progression: 'What number is missing in the progression?',
  Prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const getQuestionAndAnswer = (game) => {
  let question;
  let correctAnswer;
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
      return [null, null];
  }
  return [question, correctAnswer];
};

const playRound = (counter, game) => {
  const [question, correctAnswer] = getQuestionAndAnswer(game);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return counter + 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return -1;
};

const displayGreetingMessage = (game) => {
  console.log(GREETING_MESSAGES[game] || 'Game was not found. Breaking!');
};

const playGame = (gameChosen = 'EvenGame') => {
  const userName = askNameAndGreet();
  displayGreetingMessage(gameChosen);

  let counterOfRightAnswers = 0;
  while (counterOfRightAnswers < NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT) {
    counterOfRightAnswers = playRound(counterOfRightAnswers, gameChosen);
    if (counterOfRightAnswers === -1) {
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (counterOfRightAnswers === NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
