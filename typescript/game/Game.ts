import { Board } from './Board';
import { IPlayer } from './Player';
import { MoveValidator } from './MoveValidator';
import { WinChecker } from './WinChecker';

export class Game {
    private board: Board;
    private players: IPlayer[];
    private currentPlayerIndex: number;

    constructor(players: IPlayer[]) {
        this.board = new Board();
        this.players = players;
        this.currentPlayerIndex = 0;
    }

    public start(): void {
        let winner: IPlayer | null = null;

        while (!this.board.isFull()) {
            this.board.printBoard();
            const player = this.players[this.currentPlayerIndex];
            let column: number;
            do {
                column = player.makeMove(this.board);
            } while (!MoveValidator.validateMove(column, this.board));

            this.board.placeToken(column, player.token);

            if (WinChecker.checkForWin(this.board, player.token)) {
                winner = player;
                break;
            }

            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }

        this.board.printBoard();
        if (winner) {
            console.log(`${winner.name} wins!`);
        } else {
            console.log('It\'s a draw!');
        }
    }
}
