import { useState } from 'react'
import { Board } from './Board'
import {  getCleverMove } from '../utils/ComputerMove'
import { checkWinner } from '../utils/Winner'

export type BoardArray = Array<Array<string | null>>

export const TicToc = () => {
    const initialArray = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
    const [board, setBoard] = useState<BoardArray>(initialArray )
 

    const [player, setPlayer] = useState<string>("X")
    const [winner, setWinner] = useState<string | null>(null)
    const [noWinner, setNoWinner] = useState<boolean>(false)



    const handleOnClick = (row: number, col: number) => {
        if (board[row][col] || winner) {
            return
        }

        const updatedPlayer = board.map((newRow, newRowIndex) =>
            newRow.map((cell, cellIndex) =>
                newRowIndex === row && cellIndex === col ? player : cell
            )
        )
        setBoard(updatedPlayer)
        // check the winner
        const newWinner = checkWinner(updatedPlayer)
        setWinner(newWinner)
        setPlayer('X')

        // No Winner
        const hasNullValue = updatedPlayer.some((row) => 
                                                row.some(cell => cell === null))
        if (!winner && !hasNullValue) {
            setNoWinner(true)
            return
        }                                        

        // Computer Move
        if (!newWinner) {
            const nextPlayer = player === "X" ? "O" : "X" 
            const bestMove = getCleverMove(updatedPlayer, nextPlayer , checkWinner)
            
            const updatedComputer = updatedPlayer.map((newRow, newRowIndex) =>
                newRow.map((cell, cellIndex) =>
                    newRowIndex === bestMove?.[0]&& cellIndex === bestMove[1] ? nextPlayer : cell
                )
            )
            setTimeout(() => {
                setBoard(updatedComputer)
                setWinner(checkWinner(updatedComputer))
            }, 500);

        }
    }

    const handleReset =() =>{
        setBoard(initialArray)
        setPlayer('X')
        setWinner(null)
        setNoWinner(false)
    }

    return (
        <div>
            <h1 className='font-bold text-3xl my-10'>Tic Tac Toe</h1>
            <Board board={board} handleClick={handleOnClick} />
            {winner &&
                <p className='text-xl font-bold my-10 '>
                    {winner === 'X' ? (<p className='text-green-600'> You win </p>) : (<p className='text-red-600'>Computer Wins</p>)}
                </p>
            }
            {noWinner && <p className='text-xl font-bold my-10 text-yellow-600'>No one wins</p>}

            <button
                className='bg-white p-2 border-gray-950 hover:text-white capitalize my-10 w-20'
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    )
}
