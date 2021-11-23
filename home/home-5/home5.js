// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let sRectangle = (h, w) => h * w;
// console.log(sRectangle(5, 5));

// - створити функцію яка обчислює та повертає площу кола

// let sCircle = (r) => Math.PI * Math.pow(r,2);
// console.log(sCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру

// let sTopper = (h, r) => 2 * Math.PI * h * r;
// console.log(sTopper(8, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// array([1,2,3,4]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let text = (arg) => {
//     document.write(`<p>${arg}</p>`);
// }
// text('hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul = (arg) => {
//     document.write(`<ul>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// ul('Good morning');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ol = (text, size) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ol>`);
// }
// ol('apple', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = (array) => {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr([3, 'hello', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
//
// let user = (arr) => {
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
//     }
// }
// user(users);