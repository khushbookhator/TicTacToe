import React, { useState } from 'react'
import { Box } from './Box'
import styled from 'styled-components'
import { BoardDiv } from './board.style'


const Board = () => {
    const [board, setBoard] = useState(new Array(3).fill(0).map(() => new Array(3).fill("")))

    const [activePlayer, setActivePlayer] = useState("X")

    const handleBoardValues = (index) => {
        const updatedBoard = board?.map((element, rowIndex) => (
            element?.map((value, colIndex) => {
                if(value !== ""){
                    return value;
                }
                return `${rowIndex},${colIndex}` === index ? activePlayer : "" 
            })
        ))
        setBoard(updatedBoard)
        setActivePlayer(activePlayer === "X" ? "O" : "X")
        checkWinner(updatedBoard)
    }

    const checkWinner = (updatedboard) => {
        
        
    }


    return (
        <BoardDiv>
            {
                board?.map((element, rowIndex) => (
                    element?.map((value, colIndex) => (
                        <Box value={value} handleBoardValues={handleBoardValues} index={`${rowIndex},${colIndex}`} />
                    ))
                ))
            }
        </BoardDiv>
    )
}

export {Board}
