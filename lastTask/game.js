'use strict';

(() => {
  const guessRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (step) => {
    console.log(step);
    const result = {
      player: 5,
      computer: 5,
      stepPlayer: step,
      checkMin() {
        return Math.min(this.player, this.computer);
      },
      checkWinner(value, guess) {
        if (value % 2 === 0 && guess % 2 === 0) {
          return true;
        } else if (value % 2 !== 0 && guess % 2 !== 0) {
          return true;
        } else {
          return false;
        }
      },

    };

    return function start() {
      if (result.player > 0 && result.computer > 0) {
        let userGuess;
        let compGuess;

        if (result.stepPlayer) {
          userGuess = prompt('Загадай количество шариков:');
          userGuess = parseInt(userGuess);
          if (!Number.isFinite(userGuess)) {
            const a = confirm(`Вы хотите покинуть игру?`);
            if (a) {
              alert(`GAME OVER!
              У вас ${result.player}.\r\n У бота ${result.computer}.`);
              return;
            }
          }

          if (userGuess > result.checkMin()) {
            alert(`Загадай, небольше чем ${result.checkMin()} шариков`);
            start();
          }

          compGuess = guessRandom(1, 2);

          if (result.checkWinner(userGuess, compGuess)) {
            result.player -= userGuess;
            result.computer += userGuess;
          } else {
            result.player += userGuess;
            result.computer -= userGuess;
          }
          result.stepPlayer = false;
        } else {
          compGuess = guessRandom(1, result.checkMin());
          console.log('COMP min/max', compGuess, 'min', result.checkMin());
          userGuess = prompt('Загадай 1 / 2');
          userGuess = parseInt(userGuess);

          if (!Number.isFinite(userGuess)) {
            const a = confirm(`Вы хотите покинуть игру?`);
            if (a) {
              alert(`GAME OVER! \n 
              У вас ${result.player}.\r\n У бота ${result.computer}.`);
              return;
            }
          }

          if (result.checkWinner(compGuess, userGuess)) {
            result.player += compGuess;
            result.computer -= compGuess;
          } else {
            result.player -= compGuess;
            result.computer += compGuess;
          }
          result.stepPlayer = true;
        }

        alert(`CЧЕТ\n У вас ${result.player}. \r\n У бота ${result.computer}.`);

        start();
      } else {
        alert(`GAME OVER! \n У вас ${result.player}. 
        \r\n У бота ${result.computer}.`);
      }
    };
  };

  window.MARBLE = game;
})();


