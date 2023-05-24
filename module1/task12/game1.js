'use strict';

(() => {
  const FIRUGE_ENG = ['rock', 'scissors', 'paper'];
  const FIRUGE_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIRUGE_ENG : FIRUGE_RUS;
    const figures = getFigure(lang);

    return function start(){
      const answer = prompt(`Введите: ${figures.join(', ')}`);

      if(answer === null) {
        const answer = confirm('Точно ли вы хотите выйти?');
        if (answer) {
          console.log(`Конечный счет:\nИгрок: ${result.player}\nКомпьютер: ${result.computer}`);
          return;
        }
      }

      answer.toLowerCase();
      
      const userRes = {
        prop: '',
        defineChoice(value){
          if (value === 'н' || value.substring().includes('нож')){
            this.prop = 'ножницы';
          } else if (value === 'б' || value.substring().includes('бум')){
            this.prop = 'бумага';
          } else if(value === 'к' || value.substring().includes('кам')){
            this.prop = 'камень';
          }
        }
      };

      userRes.defineChoice(answer);

      if(userRes.prop !== ''){
        const guess = getRandomIntInclusive(0, 2);
        console.log(`user = ${userRes.prop} - ${FIRUGE_RUS[guess]}`);
        
        if(userRes.prop === FIRUGE_RUS[guess]){
          alert(`Ничья \n Игрок: ${result.player}\n Комп: ${result.computer}`);

        }else{
          const controllResult = controll(userRes.prop, FIRUGE_RUS[guess]);
          if(controllResult){
            result.player += 1;
            alert(`Выграли :) \n Игрок: ${result.player}\n Комп: ${result.computer}`);
          } else{
            result.computer += 1;
            alert(`Проиграли :( \n Игрок: ${result.player}\n Комп: ${result.computer}`);
          }
        }
      }

      start();

    }

  };

  window.RPS = game;
})();

const controll = (user, comp) => {
  switch(user){
    case 'камень':
      if(comp === 'бумага'){
        return false;
      }
      return true;
    case 'бумага':
      if(comp === 'ножницы'){
        return false;
      }
      return true;
    case 'ножницы':
      if(comp === 'камень'){
        return false;
      }
      return true;
  }
}