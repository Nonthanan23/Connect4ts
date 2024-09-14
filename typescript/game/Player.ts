import { Board } from "./Board.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();

export type Token = 'X' | 'O';
export type Cell = Token | ' ';

export interface IPlayer {
  name: string;
  token: Token;
  makeMove(board: Board): void;
}

export class HumanPlayer implements IPlayer {
  name: string;
  token: Token;

  constructor(name: string, token: Token) {
    this.name = name;
    this.token = token;
  }
  makeMove(board: Board): void {
    const column = parseInt(promptSync(`${this.name}, enter your move (column 0-${board.columns - 1}): `), 10);
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
    console.log(`${this.name} (Computer) chooses column ${column}`);
    return column;
  }
}