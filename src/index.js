import readlineSync from 'readline-sync';
import askNameAndGreet from './askName.js';

const NUMBER_OF_RIGHT_ANSWERS_BEFORE_EXIT = 3;

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

const playGame = (gameChosen) => {
  const gameModule = gameChosen;
  const userName = askNameAndGreet();
  console.log(gameModule.description);

  playGameRounds(gameModule, userName);
};

export default playGame;
