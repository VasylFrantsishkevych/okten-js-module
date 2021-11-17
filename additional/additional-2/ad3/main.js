// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let array = [];
// let x = 0;
// for (let i = 0; i <= 50; i++){
//     array[i] = x;
//     x += 2;
//     console.log(array[i]);
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
// let x = 1;
// for (let i = 0; i <= 50; i++){
//     array[i] = x;
//     x += 2;
//     console.log(array[i]);
// }

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++){
//     arr[i] = Math.floor(Math.random() * 20);
//     console.log(arr[i]);
// }

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++){
//     arr[i] = Math.floor(Math.random() * 732) + 8;
//     console.log(arr[i]);
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// let arr = [];
// for (let i = 0; i < 20; i +=3 ){
//     arr[i] = Math.floor(Math.random() * 732) + 8;
//         console.log(arr[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr = [];
// for (let i = 0; i < 20; i +=3 ){
//         arr[i] = Math.floor(Math.random() * 732) + 8;
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr = [];
// let arrTwo = [];
// for (let i = 0; i < 20; i +=3 ){
//     arr[i] = Math.floor(Math.random() * 732) + 8;
//     if (arr[i] % 2 === 0) {
//         arrTwo.push(arr[i]);
//     }
// }
// console.log(arrTwo);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let arr = [3, 2, 1, 8, 9, 11, 22, 33, 1, 2];
// for (let i = 1; i < 10; i++){
//     if (arr[i] % 2 === 0){
//         console.log(arr[i - 1]);
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// let average;
// for (let i = 0; i <arr.length; i++){
//     sum = sum + arr[i];
// }
// average = sum  / arr.length;
// console.log(average);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [3, 2, 1, 8, 9, 11, 22, 33, 1, 2];
// let arrTwo = [];
// for (let i = 0; i < arr.length; i++){
//     arrTwo.push(arr[i] * 5);
// }
// console.log(arr);
// console.log(arrTwo);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [2, 'one', true, 8, 6, 'two', 'three', false, 8];
// let arrTwo = [];
// for (let i = 0; i < arr.length; i++){
//     if (typeof  arr[i] === 'number') {
//         arrTwo.push(arr[i]);
//     }
// }
// console.log(arrTwo);

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let  usersWithCities = [];
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = citiesWithId;
//         }
//     }
// }
// console.log(usersWithId);
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [2, 8, 5, 6, 3, 7, 4, 2];
// for (let number of arr) {
//     if (number % 2 === 0){
//         console.log(number);
//     }
// }

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [2, 8, 5, 6, 3, 7, 4, 2];
// let arrTwo = [];
// for (let i = 0; i < arr.length; i++){
//     arrTwo = arr[i];
//     console.log(arrTwo);
// }

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++){
//     word = word + arr[i];
// }
// console.log(word);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < arr.length){
//     word = word + arr[i];
//     i++;
// }
// console.log(word);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (const string of arr) {
//     word = word + string;
// }
// console.log(word);

