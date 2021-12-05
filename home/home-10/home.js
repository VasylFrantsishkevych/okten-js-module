// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     let el = document.getElementById('text');
//     el.hidden = true;
// }
//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     btn.style.display = 'none';
// }
//
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let f = document.forms.f;
// f.onsubmit = function (e) {
//     e.preventDefault();
//     let age = this.age.value;
//     if (age < 18 ) {
//         alert('Age less than 18');
//     }else{
//         console.log({age: age});
//     }
// };
//
// // - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.querySelector('.menu');
// let span = menu.querySelector('.span');
//
// span.onclick = function () {
//     menu.classList.toggle('open');
// }
//
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let dayList = [
//     {title:'Понеділок', body: 'Піти в магазин'},
//     {title:'Вівторок', body: 'Приготувати обід'},
//     {title:'Середа', body: 'Нічого не робити'},
//     {title:'Четвер', body: 'Пограти ігри'},
//     {title:'Пятниця', body: 'Прочитати книгу'},
//     {title:'Субота', body: 'Поприбирати'},
//     {title:'Неділя', body: 'Дивитися телевізор'},
// ];
//
// let wrap = document.createElement('div');
// for (const dayListElement of dayList) {
//     let divDay = document.createElement('div');
//     let h3 = document.createElement('h3');
//         h3.innerText = dayListElement.title;
//     let divClose = document.createElement('div');
//     let btn = document.createElement('button');
//         btn.innerText = 'Close';
//     let p = document.createElement('p');
//         p.innerText = dayListElement.body;
//
//     btn.onclick = function () {
//         p.classList.toggle('close');
//     };
//
//     divDay.append(h3, divClose);
//     divClose.append(btn, p);
//     wrap.appendChild(divDay);
// }
// document.body.appendChild(wrap);
//
