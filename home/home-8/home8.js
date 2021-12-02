// // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// //
// // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
//
// let content = document.getElementById('content');
// console.log(content.innerText);
//
// // -- отримує текст з блоку з id "rules"
//
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// let content1 = document.getElementById('content');
// content1.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.';
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let rules1 = document.getElementById('rules');
// rules1.innerText = 'У столиці Вірменії Єревані завершився чемпіонат Східно-Європейської волейбольної асоціації (EEVZA) ' +
//     'серед юнацьких збірних вікової категорії до 18 років.';
//
// // -- змініть кожному елементу колір фону на червоний
//
// content.style.background = 'red';
// rules.style.background = 'red';
//
// let background = document.body.children;
// for (let backgroundElement of background) {
//     backgroundElement.style.background = 'red';
// }

// // -- змініть кожному елементу колір тексту на синій
//
// content.style.color = 'blue';
// rules.style.color = 'blue';

// let background = document.body.children;
// for (let backgroundElement of background) {
//     backgroundElement.style.color = 'blue';
// }

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
let rulesClass = document.getElementById('rules');
    console.log(rulesClass.classList);
//

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let li = document.getElementsByClassName('fc_rules');
// console.log(li);
// for (let liElement of li) {
//     console.log(liElement);
//     liElement.style.background = 'yellow';
//     liElement.style.color = 'red';
//     liElement.style.marginBottom = '10px';
// }
