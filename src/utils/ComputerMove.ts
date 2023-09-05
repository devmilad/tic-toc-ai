
import { BoardArray } from "../components/TicToc"



// computer movment
export const computerMove = (board: BoardArray): [number, number] => {
    const emptyCells: [number, number][] = []
    board.forEach((row, rowIndex) =>
        row.forEach((cell, cellIndex) => {
            if (!cell) {
                emptyCells.push([rowIndex, cellIndex])
            }
        })
    )
    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    return emptyCells[randomIndex]
}


// celever movment



export const getCleverMove = (board:BoardArray, player:string, chackWinner: (board:BoardArray) => string | null): [number , number] => {
    const cleverMoves: Array<[number, number]> = []

    // check winning moves
    board.forEach((row, rowIndex) =>
        row.map((col, colIndex) => {
            if (!board[rowIndex][colIndex]) {
                const clonedBoard = board.map(r => [...r])
                col?.at
                clonedBoard[rowIndex][colIndex] = player
                if (chackWinner(clonedBoard) === player) {
                    cleverMoves.unshift([rowIndex, colIndex])
                }
            }
        })
    )

    // opponent moves
    const opponent = player === "X" ? "O" : "X"
    board.some((row, rowIndex) =>
        row.some((col, colIndex) => {
            if (!board[rowIndex][colIndex]) {
                const clonedBoard = board.map(r => [...r])
                col?.at
                clonedBoard[rowIndex][colIndex] = opponent
                if (chackWinner(clonedBoard) === opponent) {
                    cleverMoves.push([rowIndex, colIndex])
                    return true
                }
                return false
            }

        })
    )
    if (cleverMoves.length > 0) {
        return cleverMoves[0];
    }
    // choose the centger cell
    if (!board[1][1]) {
        return [1,1]
    }
    // random move
    return computerMove(board)
}
