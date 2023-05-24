'use strict';

{
    
    const rangeA = prompt("Введите диапазон. Первое число:");
    const rangeB = prompt("Введите диапазон. Второе число:");
    const answer = prompt("Введи число!");

    const secret = (n, m) => {
        const min = Math.min(n, m);
        const max = Math.max(n, m);
        return (Math.floor(Math.random() * (max - min + 1) + min));
    }



    const myResult = (secret, answer, rangeA, rangeB) => {
        let newAnswer = parseInt(answer, 10);
        const maxAnswers = (Math.abs(rangeA - rangeB) <= 50) ? 15 : Math.ceil(Math.abs(rangeA - rangeB) * 0.6);
        let answers = [];

        while (true) {
            if (answer === null) {
                break;
            }
            if ((answers.length ) === maxAnswers){
                return "Вы проиграли";
            }

            const a = answers.find( e => e === newAnswer);
            if(!a){
                answers.push(newAnswer);
            } else{
                alert("Это число вы уже вводили.");
            }

            if (newAnswer > secret) {
                newAnswer = prompt("Меньше.");
                newAnswer = parseInt(newAnswer, 10);
            } else if (newAnswer < secret) {
                newAnswer = prompt("Больше.");
                newAnswer = parseInt(newAnswer, 10);
            } else if (newAnswer === secret) {
                return "Вы угадали!";
            }
        }
    };

console.log(myResult(secret(rangeA,rangeB), answer, rangeA,rangeB));


}