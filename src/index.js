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

const congratulateUser = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const encourageUserToTryAgain = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

const playRound = (gameModule) => {
  const [question, correctAnswer] = gameModule.playRound();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const playGameRounds = (gameModule, userName) => {
  let counterOfRightAnswers = 0;
  while (counterOfRightAnswers < NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT) {
    const isCorrect = playRound(gameModule);
    if (isCorrect) {
      counterOfRightAnswers += 1;
      if (counterOfRightAnswers === NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT) {
        congratulateUser(userName);
        break;
      }
    } else {
      encourageUserToTryAgain(userName);
      break;
    }
  }
};

const displayGameInstructions = (gameModule) => {
  console.log(gameModule.startGame());
};

const playGame = (gameChosen = 'Even') => {
  const gameModule = games[gameChosen];
  const userName = askNameAndGreet();
  displayGameInstructions(gameModule);

  playGameRounds(gameModule, userName);
};

export default playGame;
