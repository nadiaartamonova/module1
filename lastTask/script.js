'use strict';

const rspGame = window.RPS('RUS');


const getWinner = (result) => {
  if (result.player > result.computer) {
    const startGame = window.MARBLE(true);
    startGame();
  } else if (result.player < result.computer) {
    const startGame = window.MARBLE(false);
    startGame();
  }
};
getWinner(rspGame());
