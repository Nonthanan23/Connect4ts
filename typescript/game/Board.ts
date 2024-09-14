import { Cell, Token } from './Player.js';

export class Board {
  private grid: Cell[][];
  public readonly columns: number;
  public readonly rows: number;

  constructor(columns = 7, rows = 6) {
    this.columns = columns;
    this.rows = rows;
    this.grid = Array.from({ length: rows }, () => Array(columns).fill(' '));
  }

  placeToken(column: number, token: Token): boolean {
    for (let row = this.rows -1; row >= 0; row--) {
      if (this.grid[row][column] === ' ') {
        this.grid[row][column] = token;
        return true;
      }
    }
    return false;
  }

  isFull(): boolean {
    return this.grid[0].every(cell => cell === ' ');
  }
  isColumnValid(column: number): boolean {
    return this.grid[0][column] === ' ';
  }
  getGrid(): Cell[][] {
    return this.grid;
  }
  printBoard(): void {
    const horizontalSeparator = '┼───'.repeat(this.columns - 1) + '┼';
    const topBottomBorder = '┌───'.repeat(this.columns - 1) + '┐';

    console.log(topBottomBorder);
    for(const row of this.grid) {
      const rowContent = row.map(cell => ` ${cell} `).join('│');
      console.log(`│${rowContent}│`);
      console.log(horizontalSeparator);
    }
  }
}