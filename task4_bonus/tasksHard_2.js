'use strict';

{
    console.log("#---------------Прогрессивный налог 2.")
    const income = parseInt(prompt("Доход:"));
    //console.log("Доход:", income);
    
    if (isNaN(income)) {
        console.log("Неверные данные");
    } else {
        let tax;

        if (income < 15000) {
            
            tax = income * 0.13;
        } else if (income < 50000) {
            
            tax = (income - 15000) * 0.2 + (15000 * 0.13);
        } else {

            const firstStep = 15000 * 0.13;
            const secondStep = 35000 * 0.2;
            tax = (income - 50000) * 0.3 + secondStep + firstStep;
        }

        console.log(`Вы заплатите ${tax.toFixed(2)} рублей`);
    }
}
