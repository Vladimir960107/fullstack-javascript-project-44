import readlineSync from 'readline-sync';
import AskNameAndGreet from './cli.js';

const RIGHT_ANSWERS_COUNT = 3;

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

const playGame = (gameModule) => {
  const userName = AskNameAndGreet();
  console.log(gameModule.description);
  for (let i = 0; i < RIGHT_ANSWERS_COUNT; i += 1) {
    const isCorrect = playRound(gameModule);
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
