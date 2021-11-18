// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function number(a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b <a && b < c){
//         console.log(b);
//     }else if (c < a && c < b){
//         console.log(c);
//     }else if (a === b && a < c) {
//         console.log(a, b);
//     }else if (a === c && a < b) {
//         console.log(a, c);
//     }else if (c === b && a > c) {
//         console.log(c, b);
//     }else{
//         console.log(a, b, c);
//     }
// }
// number(4, 4, 4);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numMax(a, b, c){
//     if (a > b && a >c){
//         console.log(a);
//     }else if (b > a && b >c){
//         console.log(b);
//     }else if (c > a && c >b){
//         console.log(c);
//     }else if (a === b && a > c) {
//         console.log(a, b);
//     }else if (a === c && a > b) {
//         console.log(a, c);
//     }else if (c === b && a < c) {
//         console.log(c, b);
//     }else{
//         console.log(a, b, c);
//     }
// }
// numMax(2, 7, 9);

// - створити функцію яка повертає найбільше число з масиву

// let num = [2, 5, 3, 9, 4];
// function maxNum(array){
//     let max = array[0];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > max){
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum(num));

// - створити функцію яка повертає найменьше число з масиву

// let num = [55, 66, 2 ,3, 7, 6];
// function maxNum(array){
//     let min = array[0];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < min){
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(maxNum(num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let num = [55, 66, 2 ,3, 7, 6];
// function sumNum(array){
//     let sum = 0;
//     for (let i = 0; i <array.length; i++){
//         sum = sum + array[i];
//     }
//     return sum;
// }
// console.log(sumNum(num));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let num = [55, 66, 2 ,3, 7, 6];
// function sumNum(array){
//     let sum = 0;
//     let average;
//     for (let i = 0; i <array.length; i++){
//         sum = sum + array[i];
//         average = sum / array.length;
//     }
//     return average;
// }
// console.log(sumNum(num));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function number(arg){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argument of arguments) {
//         if (min < argument){
//             min = argument
//         }if (max > argument){
//             max = argument;
//         }
//     }
//      console.log(max)
//     return min;
// }
// document.write(number(5, 2, 8, 12, 100));


// - створити функцію яка заповнює масив рандомними числами

// function random(){
//     let arr = [];
//     for (let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// }
// console.log(random());

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(l, limit){
//     let arr = [];
//     for (let i = 0; i < l; i++){
//         arr.push(Math.round(Math.random()*limit));
//     }
//     return arr;
// }
// console.log(random(5, 1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let num = [1, 2, 3, 4, 5];
// function reverse(array){
//     let numReverse = [];
//     for (let i = array.length - 1; i >=0; i-- ) {
//         numReverse.push(array[i]);
//     }
//     return numReverse;
// }
// console.log(reverse(num));