import { Game } from './game/Game';
import { HumanPlayer, ComputerPlayer } from './game/Player';

function main(): void {
    const player1 = new HumanPlayer('Player 1', 'X');
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
