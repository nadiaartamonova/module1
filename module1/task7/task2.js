'use strict';

{
    const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = (allCashbox) => {
        let sum = 0;
        
        for(const elem of allCashbox) {
            sum += elem
        }

        return Math.floor(sum / allCashbox.length);
    }

    console.log(getAverageValue(allCashbox));
}