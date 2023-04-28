'use strict';

{
    const randomArray = (arrayLength) => {
        let result = [];
        for(let i = 0; i < arrayLength; i++){
            result.push(Math.floor(Math.random() * 100) + 1);
        }
        return result;
    }

    console.log(randomArray(10));

}


