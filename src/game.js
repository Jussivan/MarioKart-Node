import prompt from 'prompt-sync';
//components
import { SelectPlayer } from './players/selectPlayer.js';

const scanner = prompt();

let Player1 = SelectPlayer(scanner);
let Player2 = SelectPlayer(scanner);