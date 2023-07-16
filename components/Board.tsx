import React, { useState } from 'react';
import { Button } from './Button';
import './Board.css';

const winCombinations = [
  // Linhas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Colunas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonais
  [0, 4, 8],
  [2, 4, 6]
];

export function Board() {
  const [data, setData] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (id) => {
    const newData = [...data];
    newData[id] = currentPlayer;
    setData(newData);
    const winner = checkWinner(newData);
    if (winner) {
      alert(`Parabéns, jogador ${winner} venceu!`);
      resetGame();
    } else if (isTie(newData)) {
      alert('Empate! Ninguém venceu desta vez.');
      resetGame();
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isTie = (board) => {
    return board.every((square) => square !== '');
  };

  const resetGame = () => {
    setData(Array(9).fill(''));
    setCurrentPlayer('X');
  };

  return (
    <div className="board">
      <div>
        <Button id={0} value={data[0]} onClick={handleClick} />
        <Button id={1} value={data[1]} onClick={handleClick} />
        <Button id={2} value={data[2]} onClick={handleClick} />
      </div>
      <div>
        <Button id={3} value={data[3]} onClick={handleClick} />
        <Button id={4} value={data[4]} onClick={handleClick} />
        <Button id={5} value={data[5]} onClick={handleClick} />
      </div>
      <div>
        <Button id={6} value={data[6]} onClick={handleClick} />
        <Button id={7} value={data[7]} onClick={handleClick} />
        <Button id={8} value={data[8]} onClick={handleClick} />
      </div>
    </div>
  );
}