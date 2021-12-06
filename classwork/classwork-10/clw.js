// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// let inputOneFormOne = document.createElement('input');
// inputOneFormOne.style.marginRight = '10px';
// inputOneFormOne.setAttribute('name', 'name');
// inputOneFormOne.setAttribute('placeholder', 'Name');
// let inputTwoFormOne = document.createElement('input');
// inputTwoFormOne.setAttribute('name', 'surname');
// inputTwoFormOne.setAttribute('placeholder', 'Surname');
//
// formOne.append(inputOneFormOne, inputTwoFormOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// formTwo.style.marginTop = '10px';
// let inputOneFormTwo = document.createElement('input');
// inputOneFormTwo.style.marginRight = '10px';
// inputOneFormTwo.setAttribute('name', 'age');
// inputOneFormTwo.setAttribute('placeholder', 'Age');
// inputOneFormTwo.setAttribute('type', 'number');
// let inputTwoFormTwo = document.createElement('input');
// inputTwoFormTwo.setAttribute('name', 'gender');
// inputTwoFormTwo.setAttribute('placeholder', 'Gender');
//
// formTwo.append(inputOneFormTwo, inputTwoFormTwo);
//
// let btn = document.createElement('button');
// btn.innerText = 'ADD';
// btn.style.marginTop = '10px';
//
// document.body.append(formOne, formTwo, btn);
//
// btn.addEventListener('click', function (){
//     console.log(document.forms.formOne.name.value);
//     console.log(document.forms.formOne.surname.value);
//     console.log(document.forms.formTwo.age.value);
//     console.log(document.forms.formTwo.gender.value);
// });
//
//
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// let inputTr = document.createElement('input');
// inputTr.setAttribute('placeholder', 'tr')
// inputTr.style.marginRight = '10px';
// inputTr.setAttribute('type', 'number');
// let inputTd = document.createElement('input');
// inputTd.setAttribute('placeholder', 'td');
// inputTd.style.marginRight = '10px';
// inputTd.setAttribute('type', 'number');
// let inputText = document.createElement('input');
// inputText.setAttribute('placeholder', 'text');
// inputText.style.marginRight = '10px';
// let btn = document.createElement('button');
// btn.innerText = 'Create Table';
//
// document.body.append(inputTr, inputTd, inputText, btn);
//
// btn.addEventListener('click', function (){
//    let tr = inputTr.value;
//    let td = inputTd.value;
//    let text = inputText.value;
//
//    let table = document.createElement('table');
//    table.style.border = '1px solid black';
//    document.body.appendChild(table);
//
//    function createTable(tr, td, text){
//        for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//                 tr.style.border = '1px solid black';
//            for (let j = 0; j < td; j++) {
//                let td = document.createElement('td');
//                     td.innerText = `${text}`;
//                     td.style.border = '1px solid black';
//                     table.appendChild(tr);
//                     tr.appendChild(td);
//            }
//        }
//    }
//    createTable(tr,td, text);
// });
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let arrWord = ['козел', 'баран', 'тупік', 'блін', 'кука'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'write word');
// let btn = document.createElement('button');
// btn.innerText = 'Перевірка';
// document.body.append(input, btn);
//
// btn.addEventListener('click', function (){
//     for (let word of arrWord) {
//         if (input.value === word) {
//             alert('НЕ РУГАЙСЯ');
//             input.value = '';
//             return;
//         }
//     }
//            if (input.value) {
//             alert('GOOD');
//             input.value = '';
//            }
// });
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'write word');
// let btn = document.createElement('button');
// btn.innerText = 'Перевірка';
// document.body.append(input, btn);
//
// btn.addEventListener('click', function (){
//     let sentence = input.value
//     for (let word of arrWord) {
//         if (sentence.includes(word)) {
//             alert('НЕ РУГАЙСЯ');
//             input.value = '';
//             return;
//         }
//     }
//     if (input.value) {
//         alert('GOOD');
//         input.value = '';
//     }
// });