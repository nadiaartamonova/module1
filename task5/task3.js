'use strict';
console.log("#---------------Reverse");
const template = 'привет Мир';

const reversText = text => {
    return text.split("").reverse().join("");
}

console.log(`${template} => ${reversText(template)}`);