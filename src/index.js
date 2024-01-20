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
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const playGameRounds = (gameModule, userName) => {
  for (let i = 0; i < NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT; i += 1) {
    const isCorrect = playRound(gameModule);
    if (isCorrect) {
      if (i === NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT - 1) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

const playGame = (gameChosen = 'Even') => {
  const gameModule = games[gameChosen];
  const userName = askNameAndGreet();
  console.log(gameModule.description);

  playGameRounds(gameModule, userName);
};

export default playGame;
