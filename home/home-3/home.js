// -- створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [2, 14, 21, 25, 4];
// console.log(number);
// let string = ['add', 'hello', 'apple', 'fork', 'title'];
// console.log(string);
// let arr = [55, 'hello', true, false, 'name'];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let array = [];
// array[0] = 'hello';
// array[1] = 22;
// array[2] = 'lemon';
// array[3] = 'apple';
// array[4] = 'milk';
// array[5] = 33;
// array[6] = 44;
// console.log(array);

// for (let i = 0; i <= 9; i++){
//     document.write(`<div>hello</div>`);
// }

// for (let i = 1; i <= 10; i++){
//     document.write(`<div>add ${i} apple</div>`);
// }

// let i = 0;
// while (i < 20) {
//     i++;
//     document.write(`<h1>hello</h1>`);
// }

// let i = 0;
// while (i < 30) {
//     i++;
//     document.write(`<h1>day ${i}</h1>`);
// }

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let number = [1, 5, 2, 9, 55, 10, 42, 3, 7, 55];
// for (let i = 0; i < number.length; i++){
//     console.log(number[i]);
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let string of str) {
//     console.log(string);
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [2, 'one', 3, 5, 'two', 'three', 'six', 12, true, false];
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [1, 'one', true, false, 2, 'two', 3, 5, true, 6];
// for (const arrayElement of array) {
//     if (typeof arrayElement === 'boolean'){
//        console.log(arrayElement);
//     }
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [2, 'two', true, 5, 9, false, 'five', 7, [], 10];
// for (let a = 0; a < array.length; a++){
//     if (typeof array[a] === 'number'){
//         console.log(array[a]);
//     }
// }

//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = ['one', true, 'two', 5, 'three', false, 'four', [], 'five', 8, 3];
// for (let a = 0; a < array.length; a++){
//     if (typeof array[a] === 'string'){
//         console.log(array[a]);
//     }
// }

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// array = [];
// array[0] = 5;
// array[1] = true;
// array[2] = 6;
// array[3] = 'ten';
// array[4] = 'four';
// array[5] = 9;
// array[6] = false;
// array[7] = 3;
// array[8] = 'five';
// array[9] = 9;
// for (let a = 0; a < array.length; a++){
//     console.log(array[a]);
//}

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 10; i++){
//     console.log('step '+ i +'');
//     document.write(`<div>step ${i}</div>`);
// }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i++){
//     console.log('step '+ i +'');
//     document.write(`<div>step ${i}</div>`);
// }

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i += 2){
//     console.log('step '+ i +'');
//     document.write(`<div>step ${i}</div>`);
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0){
//         console.log('step ' + i + '');
//         document.write(`<div>step ${i}</div>`);
//     }
// }

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 1){
//         console.log('step ' + i + '');
//         document.write(`<div>step ${i}</div>`);
//     }
// }

