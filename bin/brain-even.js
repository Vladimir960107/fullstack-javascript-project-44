import readlineSync from 'readline-sync';

const MINRANDOMINT = 1;
const MAXRANDOMINT = 100;
const NUMBEROFRIGHTANSWERSBEFOREEXIT = 3;

const getRandomArbitraryInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const IsNumberEvenCheckerYesOrNo = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } if (number % 2 === 1) {
    return 'no';
  }
  return null;// For cases where the number is not an integer
};

const EvenGame = (name = '') => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counterOfRightAnswers = 0;
  while (counterOfRightAnswers < NUMBEROFRIGHTANSWERSBEFOREEXIT) {
    const randInt = getRandomArbitraryInt(MINRANDOMINT, MAXRANDOMINT);
    console.log(`Question: ${randInt}`);
    const answer = readlineSync.question('Your answer: ');
    const correntAnswer = IsNumberEvenCheckerYesOrNo(randInt);
    if (answer === correntAnswer) {
      console.log('Corect!');
      counterOfRightAnswers += 1;
      if (counterOfRightAnswers === NUMBEROFRIGHTANSWERSBEFOREEXIT) {
        console.log(`Congratulations, ${name}`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correntAnswer}'`);
      console.log(`let's try again ${name}`);
      break;
    }
  }
};

export default EvenGame;
