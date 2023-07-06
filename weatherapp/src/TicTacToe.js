import React, { useState } from "react";
import "./style.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        return;
      }
    }

    setPlayer(player === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((cell) => cell !== null)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${player}`;
  }

  return (
    
    <div className="game">
      <h1 className="TictacToe">TicTacToe</h1>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      <div className="status">{status}</div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
