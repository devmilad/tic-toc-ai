

interface BoardProps{
    board: Array<Array<string | null>>,
    handleClick : (row:number, col:number) => void
}

export const Board = ({board, handleClick}: BoardProps) => {
  return (
    <div className='flex justify-center items-center flex-col gap-2.5 '>
        {board.map((row, rowIndex)=>(
            <div key={rowIndex} className='flex'>
                {row.map((cell, cellIndex)=>(
                    <button
                        key={cellIndex}
                        className='w-24 h-24 rounded-none border-none text-center align-middle text-5xl  font-bold  text-white outline-none bg-sky-500 hover:bg-orange-300'
                        onClick={()=>handleClick(rowIndex, cellIndex)}
                    >
                        {cell}
                    </button>
                ))}
            </div>
        ))}
    </div>
  )
}
