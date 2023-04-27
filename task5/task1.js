'use strict';

console.log("#---------------Euro => Rub");

const convertInRub = sum => {
    console.log(`Вы получите ${sum * 1.2 * 64} рублей`)
}
convertInRub(50);



const converToRub = sum => {
    return sum * 1.2 * 64
}
const result = converToRub(1)
console.log(`Вы получите ${result} рублей`)