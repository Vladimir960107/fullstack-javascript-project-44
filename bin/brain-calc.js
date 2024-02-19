#!/usr/bin/env node
import playGame from '../src/index.js';
import { description, generateRound } from '../src/games/calculator.js';

playGame({ description, generateRound });
