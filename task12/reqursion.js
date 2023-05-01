'use strict';

{
  const game = (secret, answers = [], maxAnswers) => {
    const answer = prompt('Введи число!');

    if (answer === null) {
      return;
    }
    if ((answers.length) === maxAnswers) {
      return 'Вы проиграли';
    }

    const a = answers.find(e => e === answer);

    if (!a) {
      answers.push(answer);
    } else {
      alert('Это число вы уже вводили.');
    }

    if (answer > secret) {
      alert('Меньше.');
    } else if (answer < secret) {
      alert('Больше.');
    } else {
      return 'Вы угадали!';
    }

    return game(secret, answers, maxAnswers);
  };

  const myResult = () => {
    const n = prompt('Введите диапазон. Первое число:');
    const m = prompt('Введите диапазон. Второе число:');
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const secret = (Math.floor(Math.random() * (max - min + 1) + min));

    // eslint-disable-next-line max-len
    const maxAnswers = (Math.abs(m - n) <= 50) ? 15 : Math.ceil(Math.abs(m - n) * 0.6);
    return game(secret, [], maxAnswers);
  };

  console.log(myResult());
}

{
  const generator = (arr = []) => {
    const guess = Math.floor(Math.random() * 10) + 1;
    const myArray = [...arr, guess];
    const max = myArray.reduce((acc, i) => acc + i, 0);

    if (max > 50) {
      return myArray;
    } else {
      return generator(myArray);
    }
  };

  console.log(generator());
}
