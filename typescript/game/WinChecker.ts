import { Board } from './Board.js';
import { Token } from './Player.js';

export class WinChecker {
  static checkForWin(board: Board, token: Token): boolean {
    const grid = board.getGrid();
    const rows = board.rows;
    const columns = board.columns;
//Horizontal check
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 3; c++) {
        if (grid[r][c] === token && grid[r][c + 1] === token && grid[r][c + 2] === token && grid[r][c + 3] === token) {
          return true;
        }
      }
    }
//Vertical check
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 3; r++) {
        if (grid[r][c] === token && grid[r + 1][c] === token && grid[r + 2][c] === token && grid[r + 3][c] === token) {
          return true;
        }
      }
    }
//Diagonal check L-->R
    for (let r = 0; r < rows - 3; r++) {
      for (let c = 0; c < columns - 3; c++) {
        if (grid[r][c] === token && grid[r + 1][c + 1] === token && grid[r + 2][c + 2] === token && grid[r + 3][c + 3] === token) {
          return true;
        }
      }
    }
//Diagonal check R-->L
    for (let r = 3; r < rows; r++) {
      for (let c = 0; c < columns - 3; c++) {
        if (grid[r][c] === token && grid[r - 1][c + 1] === token && grid[r - 2][c + 2] === token && grid[r - 3][c + 3] === token) {
          return true;
        }
      }
    }
    return false;
  }
}
