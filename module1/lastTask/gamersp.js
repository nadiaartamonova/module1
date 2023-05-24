'use strict';

(() => {
  const FIRUGE_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (language, valueUser = 0, valueComp = 0) => {
    const translations = {
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
    };

    const choise = {
      prop: '',
      text: translations[language],
      defineChoise(value) {
        const sciRegExp = /^н|нож/i;
        const papRegExp = /^б|бум/i;
        const rocRegExp = /^^к|кам/i;

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
      const answer = prompt(`${choise.text.start}`);

      if (answer === null) {
        const a = confirm(`${choise.text.exit}`);
        if (a) {
          return result;
        }
      }

      choise.defineChoise(answer.toLowerCase());

      if (choise.prop !== '') {
        const guess = getRandomIntInclusive(0, 2);
        console.log(`user = ${choise.prop} - ${choise.text.items[guess]}`);

        if (choise.prop === choise.text.items[guess]) {
          alert(`${choise.text.tie}`);
          start();
        } else {
          const controllResult = choise.controll(choise.text.items[guess]);
          if (controllResult) {
            result.player += 1;
            choise = getFigure(language, result.player, result.computer);
            return result;
          } else {
            result.computer += 1;
            choise = getFigure(language, result.player, result.computer);
            return result;
          }
        }
      }

      return result;
    };
  };

  window.RPS = game;
})();
