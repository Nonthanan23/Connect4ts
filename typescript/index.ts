import promptSync from 'prompt-sync';
const prompt = promptSync();

import { Game } from './game/Game.js';
import { HumanPlayer, ComputerPlayer, IPlayer, HardComputerPlayer } from './game/Player.js';

function main(): void {
  const player1Name = prompt('Enter Player 1 name: ');
  const player1 = new HumanPlayer(player1Name, 'X');

  let player2: IPlayer;

  const opponentType = prompt('Do you want to play against a computer? (y/n): ') || 'n';
  if (opponentType.toLowerCase() === 'y') {
      const difficulty = prompt('Choose difficulty (easy/hard): ').toLowerCase();
      if (difficulty === 'hard') {
          player2 = new HardComputerPlayer('Computer (Hard)', 'O');
      } else {
          player2 = new ComputerPlayer('Computer (Easy)', 'O');
      }
    } else {
      const player2Name = prompt('Enter Player 2 name: ');
      player2 = new HumanPlayer(player2Name, 'O');
    }
    const game = new Game([player1, player2]);
    game.start();
}

main();
