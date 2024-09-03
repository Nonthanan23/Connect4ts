import { Cell, Token } from './Player.js';

export class Board {
    private grid: Cell[][];
    public readonly columns: number;
    public readonly rows: number;

    constructor(columns: number = 7, rows: number = 6) {
        this.columns = columns;
        this.rows = rows;
        this.grid = Array.from({ length: rows }, () => Array(columns).fill(' ' as Cell));
    }

    public placeToken(column: number, token: Token): boolean {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.grid[row][column] === ' ') {
                this.grid[row][column] = token;
                return true;
            }
        }
        return false;
    }

    public isFull(): boolean {
        return this.grid[0].every(cell => cell !== ' ');
    }

    public isColumnValid(column: number): boolean {
        return this.grid[0][column] === ' ';
    }

    public printBoard(): void {
        for (let row of this.grid) {
            console.log(row.join('|'));
        }
        console.log('-'.repeat(this.columns * 2 - 1));
    }

    public getGrid(): Cell[][] {
        return this.grid;
    }
}
