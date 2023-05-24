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
        items: ['rock', 'scissors', 'paper'],
        start: `Input: ${FIRUGE_ENG.join(', ')}`,
        tie: `Tie \n User: ${valueUser}\n Comp: ${valueComp}`,
        userWin: `Win :) \n User: ${valueUser}\n Comp: ${valueComp}`,
        compWin: `Loss :( \n User: ${valueUser}\n Comp: ${valueComp}`,
        result: `Result:\nUser: ${valueUser}\nComp: ${valueComp}`,
        exit: `Are you sure want to exit?`,
      },
      RUS: {
        items: ['камень', 'ножницы', 'бумага'],
        start: `Введите: ${FIRUGE_RUS.join(', ')}`,
          tie: `Ничья \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          userWin: `Выйграл :) \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          compWin: `Проиграл :( \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
          result: `Конечный счет:\nИгрок: ${valueUser}\nКомп: ${valueComp}`,
          exit: `Точно ли вы хотите выйти?`,
      },
    };
    const rules = {
      камень: {
        ножницы: true,
        бумага: false,
      },
      ножницы: {
        бумага: true,
        камень: false,
      },
      бумага: {
        камень: true,
        ножницы: false,
      },
      rock: {
        scissors: true,
        paper: false,
      },
      scissors: {
        paper: true,
        rock: false,
      },
      paper: {
        rock: true,
        scissors: false,
      },
    };

      const choise = {
        prop: '',
        text : translations[language],
        defineChoise(value) {
          const sciRegExp = /^s|sci|^н|нож/i;
          const papRegExp = /^p|pap|^б|бум/i;
          const rocRegExp = /^r|roc|^к|кам/i;

          if (sciRegExp.test(value)) {
            this.prop = translations[language].items[1];
          } else if (papRegExp.test(value)) {
            this.prop = translations[language].items[2];
          } else if (rocRegExp.test(value)) {
            this.prop = translations[language].items[0];
          }
        },
        controll(comp) {
          const result = rules[this.prop][comp];
          return result;
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
      //console.log(choise)
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
        console.log(`user = ${choise.prop} - ${choise.text.items[guess]}`);

        if (choise.prop === choise.text.items[guess]) {
          alert(`${choise.text.tie}`);
        } else {
          const controllResult = choise.controll(choise.text.items[guess]);
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


