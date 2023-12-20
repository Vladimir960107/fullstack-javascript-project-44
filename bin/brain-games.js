#!/usr/bin/env node
import AskNameAndGreet from '../src/cli.js';
import Game from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = AskNameAndGreet();
Game(name, 'Divisor');
