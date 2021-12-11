// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log(`
//     Назва тегу: ${e.target.localName}
//     Id: ${e.target.id}
//     Список класів: ${e.target.className}
//     Розміри: ${e.target.clientHeight}*${e.target.clientWidth}`);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let div = document.createElement('div');
// div.classList.add('style');
// document.body.appendChild(div);
//
// document. = function (e){
//     let p = document.createElement('p');
//     p.innerText = `Назва тегу: ${e.target.localName}
//         Id: ${e.target.id}
//         Список класів: ${e.target.className}
//         Розміри: ${e.target.clientHeight}*${e.target.clientWidth}`;
//     div.appendChild(p);
//     div.classList.add('open');
// };


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let form = document.createElement('form');
// let inputOne = document.createElement('input');
// inputOne.setAttribute('type', 'checkbox');
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('type', 'checkbox');
// let inputThree = document.createElement('input');
// inputThree.setAttribute('type', 'checkbox');
//
// form.append(inputOne, inputTwo, inputThree);
// document.body.appendChild(form);
//
// inputOne.onclick = function () {
//     if (this.checked) {
//         let filterStatus = usersWithAddress.filter(value =>  !value.status);
//         let hr1 = document.createElement('hr');
//         filterStatus.forEach(value => {
//             let pStatus = document.createElement('p');
//             pStatus.innerText = `${value.name} - ${value.age} - ${value.status} - ${value.address.city} - ${value.address.street} - ${value.address.number}`;
//             document.body.append(pStatus, hr1);
//         });
//     }
// };
// inputTwo.onclick = function (){
//     if (this.checked) {
//         let filterAge = usersWithAddress.filter(value => value.age > 29);
//         let hr2 = document.createElement('hr');
//         filterAge.forEach(value => {
//             let pAge = document.createElement('p');
//             pAge.innerText = `${value.name} - ${value.age} - ${value.status} - ${value.address.city} - ${value.address.street} - ${value.address.number}`;
//             document.body.append(pAge, hr2);
//         });
//     }
// };
// inputThree.onclick = function (){
//     if (this.checked) {
//         let filterCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//         let hr3 = document.createElement('hr');
//         filterCity.forEach(value => {
//             let pCity = document.createElement('p');
//             pCity.innerText = `${value.name} - ${value.age} - ${value.status} - ${value.address.city} - ${value.address.street} - ${value.address.number}`;
//             document.body.append(pCity, hr3);
//         });
//     }
// }

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
