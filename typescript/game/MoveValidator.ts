import { Board } from './Board';

export class MoveValidator {
    static validateMove(column: number, board: Board): boolean {
        return column >= 0 && column < board.columns && board.isColumnValid(column);
    }
}
