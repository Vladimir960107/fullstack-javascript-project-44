#!/usr/bin/env node
import AskNameAndGreet from '../src/cli.js';

const func = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskNameAndGreet();
  return name;
};

export default func;
