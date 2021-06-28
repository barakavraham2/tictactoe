import React, { useState } from 'react'
import Square from "./Square"
import { calculateWinner } from '../helper'

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const winner = calculateWinner(board)

    function startANewGame() {
        setBoard(Array(9).fill(null))
    }
    const [xNext, setIfXNext] = useState(false)
    const state = () => {
        if (winner) {
            if (winner === 'X') {
                return 'winner is X'
            } else {
                return 'winner is O'
            }
        }
        else return <p className={`${xNext ? 'gold' : 'green'}`}> {xNext ? 'next move is X' : 'next move is O'} </p>
    }

    const renderSquare = position => {
        return (<Square value={board[position]}
            onClick={() => handleSquareClick(position)}

        />
        )

    };

    const handleSquareClick = position => {
        if (winner) {
            return;
        }
        setBoard(
            prev => {
                return prev.map((Square, pos) => {
                    if (pos === position && Square === null) {

                        return xNext ? 'X' : 'O';
                    }
                    return Square
                })
            }
        )
        setIfXNext((prev) => !prev)

    }


    return (
        <>
            <div>
                <div>{state()} </div>
            </div>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div>
                <button onClick={startANewGame}> new game</button>
            </div>
        </>
    )
}


