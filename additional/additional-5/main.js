//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str){
//     return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(' ');
// }
// console.log(capitalize('hello add yes no'));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str, n){
//     let arr = [];
//     while (str.length){
//         arr.push(str.substring(0, n));
//         str = str.slice(n);
//     }
//     console.log(str);
//     return arr;
// }
// console.log(cutString('sddfgedtrdfsd', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// function validator(email){
//     let result = email.toLowerCase().split('@');
//         if (result[1].includes('.',2)){
//             console.log(true);
//         }
//         else{
//             console.log(false);
//         }
//
// }
// validator('some.email@gmail.com');

// - є масив
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let sort = coursesArray.sort((a, b) => a.modules.length - b.modules.length);
// console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// function count(str, stringsearch){
//     return str.split(stringsearch).length - 1;
// }
// console.log(count('Астрономия это наука о небесных объектах', 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру

// function cutString(str, n){
//     return str.split(' ').splice(0,n).join(' ');
// }
// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str,4));
