import readlineSync from 'readline-sync';

const MIN_RANDOM_INT = 1;
const MAX_RANDOM_INT = 100;
const NUMBEROFRIGHTANSWERSBEFOREEXIT = 3;
const GREETING_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';

const GetRandomArbitraryInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const IsNumberEvenCheckerYesOrNo = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } if (number % 2 === 1) {
    return 'no';
  }
  return null;// For cases where the number is not an integer
};

const playRound = (counter) => {
  const randInt = GetRandomArbitraryInt(MIN_RANDOM_INT, MAX_RANDOM_INT);
  console.log(`Question: ${randInt}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = IsNumberEvenCheckerYesOrNo(randInt);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return counter + 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return -1;
};

const EvenGame = (name = '') => {
  console.log(GREETING_MESSAGE);
  let counterOfRightAnswers = 0;
  while (counterOfRightAnswers < NUMBEROFRIGHTANSWERSBEFOREEXIT) {
    counterOfRightAnswers = playRound(counterOfRightAnswers);
    if (counterOfRightAnswers === -1) {
      console.log(`Let's try again, ${name}`);
      break;
    } else if (counterOfRightAnswers === NUMBEROFRIGHTANSWERSBEFOREEXIT) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default EvenGame;
