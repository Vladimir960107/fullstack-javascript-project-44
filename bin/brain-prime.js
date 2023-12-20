#!/usr/bin/env node
import name from './brain-games.js';
import Game from '../src/index.js';

const tempName = name;
Game(tempName, 'Prime');
