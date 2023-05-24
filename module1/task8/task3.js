'use strict';

{
    const randomArray = (arrayLength, m, n, sort) => {
        const min = Math.min(n, m);
        const max = Math.max(n, m);
        let result = [];
        for(let i = 0; i < arrayLength; i++){
            result.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        switch(sort){
            case ('even'):
                return result.filter(num => num % 2 === 0);
            case ('odd'):
                return result.filter(num => num % 2 !== 0);
        }
        
    }

    console.log(randomArray(10, 80, 10, 'odd'));

}