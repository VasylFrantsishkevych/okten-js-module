// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let len1 = 'hello world';
// console.log(len1.length);
// let len2 = 'lorem ipsum';
// console.log(len2.length);
// let len3 = 'javascript is cool';
// console.log(len3.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let toUpperCase1 = len1.toUpperCase();
// console.log(toUpperCase1);
// let toUpperCase2 = len2.toUpperCase();
// console.log(toUpperCase2);
// let toUpperCase3 = len3.toUpperCase();
// console.log(toUpperCase3);
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let toLowerCase1 = toUpperCase1.toLowerCase();
// console.log(toLowerCase1);
// let toLowerCase2 = toUpperCase2.toLowerCase();
// console.log(toLowerCase2);
// let toLowerCase3 = toUpperCase3.toLowerCase();
// console.log(toLowerCase3);
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let  stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// function delete_characters(str, start, length){
//     return str.substring(start, length);
// }
// document.write(delete_characters(str, 0, 6));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>
//     str.replaceAll(' ', '-')
//         .toUpperCase();
// document.write(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = "html";
// let insert_dash = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// }
// document.write(insert_dash(str));

