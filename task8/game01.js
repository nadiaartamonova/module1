// 'use strict';

// {
//     const secret = Math.floor(Math.random() * 100) + 1;
//     const answer = prompt("Введи число!");


//     const myResult = (secret, answer) => {
//     let newAnswer = parseInt(answer, 10);

//     while (true) {
//         if (answer === null) {
//             break;
//         }

//         if (Number.isNaN(newAnswer) || newAnswer < 1 || newAnswer > 100) {
//             newAnswer = prompt("Введи число от 1 до 100!");
//             newAnswer = parseInt(newAnswer, 10);
//         } else if (newAnswer > secret) {
//             newAnswer = prompt("Меньше.");
//             newAnswer = parseInt(newAnswer, 10);
//         } else if (newAnswer < secret) {
//             newAnswer = prompt("Больше.");
//             newAnswer = parseInt(newAnswer, 10);
//         } else if (newAnswer === secret) {
//             return "Вы угадали!";
//         }
//     }
//     };

// console.log(myResult(secret, answer));


// }


