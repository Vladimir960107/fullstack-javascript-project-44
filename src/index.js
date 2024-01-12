import readlineSync from 'readline-sync';
import askNameAndGreet from './askName.js';
import * as Calculator from './games/calculator.js';
import * as GCD from './games/gcd.js';
import * as Even from './games/even.js';
import * as Progression from './games/progression.js';
import * as Prime from './games/prime.js';

const NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT = 3;

const games = {
  Even,
  GCD,
  Prime,
  Progression,
  Calculator,
};

const playRound = (gameModule) => {
  const [question, correctAnswer] = gameModule.playRound();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return -1;
};

const playGame = (gameChosen = 'Even') => {
  const gameModule = games[gameChosen];
  const userName = askNameAndGreet();
  console.log(gameModule.startGame());

  let counterOfRightAnswers = 0;
  const fuckTheLinter = true;
  while (fuckTheLinter) {
    const isCorrect = playRound(gameModule);
    if (isCorrect) {
      counterOfRightAnswers += 1;
      if (counterOfRightAnswers === NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default playGame;
