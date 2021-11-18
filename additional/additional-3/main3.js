// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function aaa(arg1, arg2){
//     if (arguments.length === 1) {
//         document.write(`${arg1}`);
//     }else if (arguments.length === 2){
//         document.write(`${arg1} ${arg2}`);
//     }
// }
// aaa('hello', 55);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

//  let arr1 = [1,2,3,4];
//  let arr2 = [2,3,4,5];
//
//  function sumArr(array1, array2){
//      let arr3 = [];
//      for (let i = 0; i < array1.length; i++){
//         arr3.push(array1[i] + array2[i]);
//      }
//      return arr3;
//  }
// console.log(sumArr(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// let array = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'},
//     {address: 'Lviv'}
// ];
// function keys(arr){
//     let keys = [];
//     for (let arrElement of arr) {
//         for (let key in arrElement) {
//             keys.push(key);
//         }
//     }
//     return keys;
// }
// console.log(keys(array));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let array = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'},
//     {address: 'Lviv'}
// ];
// function keys(arr){
//     let keys = [];
//     for (let arrElement of arr) {
//         for (let key in arrElement) {
//             keys.push(arrElement[key]);
//         }
//     }
//     return keys;
// }
// console.log(keys(array));