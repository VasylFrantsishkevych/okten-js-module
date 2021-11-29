// // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// //
// // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
//
// let content = document.getElementById('content');
// console.log(content);
//
// // -- отримує текст з блоку з id "rules"
//
// let rules = document.getElementById('rules');
// console.log(rules);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// content.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.';
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// rules.innerText = 'У столиці Вірменії Єревані завершився чемпіонат Східно-Європейської волейбольної асоціації (EEVZA) ' +
//     'серед юнацьких збірних вікової категорії до 18 років.';
//
// // -- змініть кожному елементу колір фону на червоний
//
// content.style.background = 'red';
// rules.style.background = 'red';
//
// // -- змініть кожному елементу колір тексту на синій
//
// content.style.color = 'blue';
// rules.style.color = 'blue';
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let rulesClass = document.getElementsByClassName('fc');
// for (let p of rulesClass) {
//     console.log(p.classList)
// }
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
