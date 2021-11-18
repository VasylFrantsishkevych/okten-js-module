// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b){
//     let res = a * b;
//     return   res;
// }
// console.log(square(2, 3));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area(r){
//     const P = 3.14;
//     return P * (r ** 2);
// }
// let result = area(4);
// console.log(result);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCylinder(h, r) {
//     const P = 3.14;
//     return 2 * P * h * r;
// }
// let res = sCylinder(6, 8);
// console.log(res);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [5, 3, 'one', 8, true];
// function array(){
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// array(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(p){
//     document.write(`<p>${p}</p>`);
// }
// text('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(l){
//     document.write(`<ul>`);
//         document.write(`<li>${l}</li>`)
//         document.write(`<li>${l}</li>`)
//         document.write(`<li>${l}</li>`)
//     document.write(`</ul>`);
// }
// list('hello');
// list('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(l, k){
//     document.write(`<ul>`);
//     for (let i = 0; i < k; i++){
//         document.write(`<li>${l}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let number = [1, 9, 66, 45, 12];
// let mas = [5, 3, 'one', 8, true];
// function array(arr){
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// array(mas);
// array(number);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
// function array(arr){
//         for (let i = 0; i < arr.length; i++){
//             document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`);
//         }
// }
// array(users);