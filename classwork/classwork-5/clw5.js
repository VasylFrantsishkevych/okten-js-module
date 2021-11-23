// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num = (a, b, c) => {
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b < a && b < c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// num(6,4,5);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let num = (a, b, c) => {
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// num(6,7,8);

// - створити функцію яка повертає найбільше число з масиву

// let maxNumArray = (arr) => {
//     let max = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement > max){
//             max = arrElement;
//         }
//     }
//     return max;
// }
// console.log(maxNumArray([1, 5, 9, 2, 33, 1]));
// - створити функцію яка повертає найменьше число з масиву

// let minNumArray = (arr) => {
//     let min = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement < min){
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(minNumArray([1, 5, 9, 2, 33]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumArray = (arr) =>{
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum = sum + arrElement;
//     }
//     return sum;
// }
// console.log(sumArray([1,5,5]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let aArray = (arr) => sumArray(arr)/arr.length;
// console.log(aArray([2,5,5]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let number = (num) => {
//     let max = num[0];
//     let min = num[0];
//     for (let numElement of num) {
//         if (numElement > max){
//             max = numElement;
//         }if (numElement < min){
//             min = numElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(number([1,2,3,4]));


// - створити функцію яка заповнює масив рандомними числами

// let random = (arr) =>{
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 20);
//     }
//     return arr;
// }
// console.log(random([]));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = (arr) =>{
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(random([]));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = (arr, size, limit) =>{
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// console.log(random([], 15,1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ni = 0; i >= 0; i--, ni++) {
//         newArr[ni] = arr[i];
//     }
//     return newArr;
// }
// console.log(array([1,2,3,4]));