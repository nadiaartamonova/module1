'use strict';

{
    const randomArray = (arrayLength, m, n) => {
        const min = Math.min(n, m);
        const max = Math.max(n, m);
        let result = [];
        for(let i = 0; i < arrayLength; i++){
            result.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        return result;
    }

    console.log(randomArray(10, -80, 10));

}