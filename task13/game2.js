'use strict';

(() => {
  const FIRUGE_ENG = ['rock', 'scissors', 'paper'];
  const FIRUGE_RUS = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const controll = (user, comp) => {
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
  };


  const getFigure = (language, valueUser = 0, valueComp = 0) => {
    // eslint-disable-next-line max-len
    const lang = language === 'EN' || language === 'ENG' ? FIRUGE_ENG : FIRUGE_RUS;

    if (language === 'EN') {
      const userInterfaceEng = {
        start: `Input: ${lang.join(', ')}`,
        tie: `Tie \n User: ${valueUser}\n Comp: ${valueComp}`,
        userWin: `Win :) \n User: ${valueUser}\n Comp: ${valueComp}`,
        compWin: `Loss :( \n User: ${valueUser}\n Comp: ${valueComp}`,
        result: `Result:\nUser: ${valueUser}\nComp: ${valueComp}`,
        exit: `Are you sure want to exit?`,
      };
      return userInterfaceEng;
    } else {
      const userInterfaceRus = {
        start: `Введите: ${lang.join(', ')}`,
        tie: `Ничья \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
        userWin: `Выйграл :) \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
        compWin: `Проиграл :( \n Игрок: ${valueUser}\n Комп: ${valueComp}`,
        result: `Конечный счет:\nИгрок: ${valueUser}\nКомп: ${valueComp}`,
        exit: `Точно ли вы хотите выйти?`,
      };
      return userInterfaceRus;
    }
  };

  const game = (language = 'RUS') => {
    const result = {
      player: 0,
      computer: 0,
      language,
    };

    return function start() {
      console.log('start', language);
      let lang = getFigure(language, result.player, result.computer);

      const answer = prompt(`${lang.start}`);

      if (answer === null) {
        const answer = confirm(`${lang.exit}`);
        if (answer) {
          alert(`${lang.result}`);
          return;
        }
      }


      answer.toLowerCase();

      const userRes = {
        prop: '',
        defineChoiceRus(value) {
          if (value === 'н' || value.substring().includes('нож')) {
            this.prop = 'ножницы';
          } else if (value === 'б' || value.substring().includes('бум')) {
            this.prop = 'бумага';
          } else if (value === 'к' || value.substring().includes('кам')) {
            this.prop = 'камень';
          }
        },
        defineChoiceEng(value) {
          if (value === 's' || value.substring().includes('sci')) {
            this.prop = 'ножницы';
          } else if (value === 'p' || value.substring().includes('pap')) {
            this.prop = 'бумага';
          } else if (value === 'r' || value.substring().includes('roc')) {
            this.prop = 'камень';
          }
        },

      };
      if (language === 'EN') {
        userRes.defineChoiceEng(answer);
      } else {
        userRes.defineChoiceRus(answer);
      }

      if (userRes.prop !== '') {
        const guess = getRandomIntInclusive(0, 2);
        console.log(`user = ${userRes.prop} - ${FIRUGE_RUS[guess]}`);

        if (userRes.prop === FIRUGE_RUS[guess]) {
          alert(`${lang.tie}`);
        } else {
          const controllResult = controll(userRes.prop, FIRUGE_RUS[guess]);
          if (controllResult) {
            result.player += 1;
            lang = getFigure(language, result.player, result.computer);
            alert(`${lang.userWin}`);
          } else {
            result.computer += 1;
            lang = getFigure(language, result.player, result.computer);
            alert(`${lang.compWin}`);
          }
        }
      }

      start();
    };
  };

  window.RPS = game;
})();


