import React, { useState } from 'react';
import { Box } from './Box';
import { BoardDiv } from './board.style';

const Board = () => {
  const [board, setBoard] = useState(
    new Array(3).fill(0).map(() => new Array(3).fill(''))
  );

  const [activePlayer, setActivePlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [draw, setDraw] = useState(false);

  const handleBoardValues = (index) => {
    if (draw) {
      return;
    }
    const updatedBoard = board?.map((element, rowIndex) =>
      element?.map((value, colIndex) => {
        if (value !== '') {
          return value;
        }
        return `${rowIndex},${colIndex}` === index ? activePlayer : '';
      })
    );
    let count = 0;
    updatedBoard.map((element) =>
      element?.map((value) => {
        if (value !== '') {
          count++;
        }
      })
    );
    setBoard(updatedBoard);
    if (count === 9) {
      setDraw(true);
      return;
    }
    const ans = checkWinner(updatedBoard);
    console.log(ans);
    if (ans) {
      setWinner(activePlayer);
    }
    setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = (updatedboard) => {
    console.log(updatedboard);
    for (let i = 0; i < 3; i++) {
      // horizontal
      if (
        updatedboard[i][0] === updatedboard[i][1] &&
        updatedboard[i][1] === updatedboard[i][1] &&
        updatedboard[i][2] !== ''
      ) {
        return true;
      }
      // vertical
      if (
        updatedboard[0][i] === updatedboard[1][i] &&
        updatedboard[1][i] === updatedboard[2][i] &&
        updatedboard[2][i] !== ''
      ) {
        return true;
      }
    }
    if (
      updatedboard[0][0] === updatedboard[1][1] &&
      updatedboard[0][0] === updatedboard[2][2] &&
      updatedboard[2][2] !== ''
    ) {
      return true;
    }

    if (
      updatedboard[0][2] === updatedboard[1][1] &&
      updatedboard[0][2] === updatedboard[2][0] &&
      updatedboard[2][0] !== ''
    ) {
      return true;
    }

    return false;
  };

  return (
    <>
      <BoardDiv>
        {board?.map((element, rowIndex) =>
          element?.map((value, colIndex) => (
            <Box
              key={`${rowIndex},${colIndex}`}
              value={value}
              handleBoardValues={handleBoardValues}
              index={`${rowIndex},${colIndex}`}
            />
          ))
        )}
      </BoardDiv>
      {draw && <h2>GAME OVER</h2>}
      {winner && <h2>{winner}</h2>}
    </>
  );
};

export { Board };
