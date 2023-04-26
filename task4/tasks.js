'use strict';

{
    console.log("#---------------ЗОНТ")
    const rain = Math.round(Math.random()) ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!';
    console.log(rain)
}

{
    console.log("#---------------УНИВЕРСИТЕТ")
    const math = parseInt(prompt("Математика:"));
    const russian = parseInt(prompt("Русский язык:"));
    const computerScience = parseInt(prompt("Информатика:"));

    const result = math + russian + computerScience;

    if(!Number.isNaN(result) && result > 264){
        console.log("Поздравляю, вы поступили на бюджет!")
    } else {
        console.log(`${result} ваш результат недостаточный`)
    }

}

{
    console.log("#---------------БАНКОМАТ")
    const summa = parseInt(prompt("Сумма:"));

    if(summa%100 === 0) {
        console.log(`Вы получите ${summa / 100} банктнот`);
    } else{
        console.log(`Извините, вы не можете снять данную сумму =(`)
    }

}