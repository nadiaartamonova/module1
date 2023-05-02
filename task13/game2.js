'use strict';

(() => {
  const FIRUGE_ENG = ['rock', 'scissors', 'paper'];
  const FIRUGE_RUS = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (language, valueUser = 0, valueComp = 0) => {
    const translations = {
      ENG: {
        start: `Input: ${FIRUGE_ENG.join(', ')}`,
        tie: `Tie \n User: ${valueUser}\n Comp: ${valueComp}`,
        userWin: `Win :) \n User: ${valueUser}\n Comp: ${valueComp}`,
        compWin: `Loss :( \n User: ${valueUser}\n Comp: ${valueComp}`,
        result: `Result:\nUser: ${valueUser}\nComp: ${valueComp}`,
        exit: `Are you sure want to exit?`,
      },
      RUS: {
        start: `Введите: ${FIRUGE_RUS.join(', ')}`,
          tie: `Ничья \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          userWin: `Выйграл :) \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          compWin: `Проиграл :( \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          result: `Конечный счет:\nИгрок: ${valueUser}\nКомп: ${valueComp}`,
          exit: `Точно ли вы хотите выйти?`,
      },
    };

      const choise = {
        prop: '',
        items: ['камень', 'ножницы', 'бумага'],
        text : translations[language],
        defineChoise(value) {
          if (value === 's' || value.substring().includes('sci') 
              || value === 'н' || value.substring().includes('нож')) {
            this.prop = 'ножницы';
          } else if (value === 'p' || value.substring().includes('pap') 
                    || value === 'б' || value.substring().includes('бум')) {
            this.prop = 'бумага';
          } else if (value === 'r' || value.substring().includes('roc')
                    || value === 'к' || value.substring().includes('кам')) {
            this.prop = 'камень';
          }
        },
        controll(user, comp) {
          switch (user) {
            case 'камень':
              if (comp === 'бумага') {
                return false;
              }
              return true;
            case 'бумага':
              if (comp === 'ножницы') {
                return false;
              }
              return true;
            case 'ножницы':
              if (comp === 'камень') {
                return false;
              }
              return true;
          }
        },

      };
      return choise;
  };

  const game = (language = 'RUS') => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {

      let choise = getFigure(language, result.player, result.computer);
      console.log(choise)
      const answer = prompt(`${choise.text.start}`);

      if (answer === null) {
        const a = confirm(`${choise.text.exit}`);
        if (a) {
          alert(`${choise.text.result}`);
          return;
        }
      }

      choise.defineChoise(answer.toLowerCase());

      if (choise.prop !== '') {
        const guess = getRandomIntInclusive(0, 2);
        console.log(`user = ${choise.prop} - ${choise.items[guess]}`);

        if (choise.prop === choise.items[guess]) {
          alert(`${choise.text.tie}`);
        } else {
          const controllResult = choise.controll(choise.prop, choise.items[guess]);
          if (controllResult) {
            result.player += 1;
            choise = getFigure(language, result.player, result.computer);
            alert(`${choise.text.userWin}`);
          } else {
            result.computer += 1;
            choise = getFigure(language, result.player, result.computer);
            alert(`${choise.text.compWin}`);
          }
        }
      }

      start();
    };
  };

  window.RPS = game;
})();


