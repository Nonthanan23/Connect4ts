import promptSync from 'prompt-sync';
const prompt = promptSync();

import { Game } from './game/Game.js';
import { HumanPlayer, ComputerPlayer } from './game/Player.js';

function main(): void {
  const player1Name = prompt('Enter Player 1 name: ');
  const player1 = new HumanPlayer(player1Name, 'X');

  let player2: HumanPlayer | ComputerPlayer;

  const opponentType = prompt('Do you want to play against a computer? (y/n): ') || 'n';
  if (opponentType.toLowerCase() === 'y') {
      player2 = new ComputerPlayer('Computer', 'O');
    } else {
      player2 = new HumanPlayer('Player 2', 'O');
    }
    const game = new Game([player1, player2]);
    game.start();
}

main();
