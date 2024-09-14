import { Board } from "./Board.js";
import promptSync from 'prompt-sync';
import { WinChecker } from "./WinChecker.js";
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
  makeMove(board: Board): number {
    const column = parseInt(prompt(`${this.name}, enter your move (column 0-${board.columns - 1}): `), 10);
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

export class HardComputerPlayer implements IPlayer {
  name: string;
  token: Token;

  constructor(name: string, token: Token) {
    this.name = name;
    this.token = token;
  }
  makeMove(board: Board): number {
    const opponentToken = this.token === 'X' ? 'O' : 'X';
    for (let column = 0; column < board.columns; column++) {
      if (board.isColumnValid(column)) {
        board.placeToken(column, this.token);
        if (WinChecker.checkForWin(board, this.token)) {
          board.removeToken(column);
          return column;
        }
        board.removeToken(column);
      }
    }
    for (let column = 0; column < board.columns; column++) {
      if (board.isColumnValid(column)) {
        board.placeToken(column, opponentToken);
        if (WinChecker.checkForWin(board, opponentToken)) {
          board.removeToken(column);
          return column;
        }
        board.removeToken(column);
      }
    }
    let column: number;
    do {
      column = Math.floor(Math.random() * board.columns);
    } while (!board.isColumnValid(column));
    console.log(`${this.name} (Computer) chooses column ${column}`);
    return column;
  }
}