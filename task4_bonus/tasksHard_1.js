'use strict';

{
    console.log("#---------------Прогрессивный налог 1.")
    const income = parseInt(prompt("Доход:"));
    //console.log("Доход:", income);
    
    if (isNaN(income)) {
        console.log("Неверные данные");
    } else {
        let tax;
    
        if (income < 15000) {
            tax = 13;
        } else if (income < 50000) {
            tax = 20;
        } else {
            tax = 30;
        }

        console.log(`Налог ${tax}%, Вы заплатите ${(income * (tax/100)).toFixed(2)} рублей`);

    }
}

