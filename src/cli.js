import readlineSync from 'readline-sync';

const AskNameAndGreet = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default AskNameAndGreet;
