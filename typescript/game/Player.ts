import { Board } from "./Board.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();

export type Token = 'X' | 'O';
export type Cell = Token | ' ';

export interface IPlayer {
    name: string;
    token: Token;
    makeMove(board: Board): number;
}

export class HumanPlayer implements IPlayer {
    name: string;
    token: Token;
    constructor(name: string, token: Token) {
        this.name = name;
        this.token = token;
    }
    makeMove(_board: Board): number {
        const column = parseInt(prompt(`${this.name}, enter your move (column0-6: `) || '0');
        return column;
    }
}

export class ComputerPlayer implements IPlayer {
    name: string;
    token: Token;

    constructor(name: string, token: Token) {
        this.name = name;
        this.token = token;
    }

    makeMove(board: Board): number {
        let column: number;
        do {
            column = Math.floor(Math.random() * board.columns);
        } while (!board.isColumnValid(column));
        return column;
    }
}
