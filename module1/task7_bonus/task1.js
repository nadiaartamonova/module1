'use strict';

{
    const allCashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
    ];

    const getAveragePriceGoods = ([...allCashbox]) => {
        let totalCount = 0;
        let totalPrice = 0;
        for(const elem of allCashbox) {
            const [count, price] = elem
            totalCount += count;
            totalPrice += price;
        }

        return Math.round(totalPrice / totalCount);
    }

    console.log(getAveragePriceGoods(allCashbox));
}


