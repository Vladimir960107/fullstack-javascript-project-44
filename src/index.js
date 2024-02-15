import readlineSync from 'readline-sync';
import AskNameAndGreet from './cli.js';

const ROUNDS_COUNT = 3;

const playGame = (gameModule) => {
  const userName = AskNameAndGreet();
  console.log(gameModule.description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = gameModule.generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
