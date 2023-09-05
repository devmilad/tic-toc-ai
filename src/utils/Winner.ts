import { BoardArray } from "../components/TicToc";


export const checkWinner = (board: BoardArray): string | null => {
    const lines = [
        //Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        //columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],

        //Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];
    for (const line of lines) {
        if (line[0] && line[0] === line[1] && line[1] === line[2]) {
            return line[0];
        }
    }
    return null;
};