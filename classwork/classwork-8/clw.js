// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//
// let header = document.getElementsByTagName('h1');
// for (let headerElement of header) {
//     headerElement.classList.add('sep-2021');
// }
//
// // b) робить шириниу елементу ul 400px
//
// let widthUl = document.getElementsByTagName('ul');
// for (let widthUlElement of widthUl) {
//     widthUlElement.style.width = '400px';
// }
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let widthLinksList = document.getElementsByClassName('linkList');
// for (let widthLinksListElement of widthLinksList) {
//     widthLinksListElement.style.width = '50%';
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let textListElement2 = document.getElementsByClassName('listElement2');
// console.log(textListElement2);
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let backgroundLinkList = document.getElementsByTagName('li');
// for (let backgroundLinkListElement of backgroundLinkList) {
//     backgroundLinkListElement.style.background = 'grey';
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let aClass = document.getElementsByTagName('a');
// for (let aClass1 of aClass) {
//     aClass1.classList.add('anchor');
// }
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let aLink3 = document.getElementsByTagName('a');
// for (let aLink3Element of aLink3) {
//     if (aLink3Element.innerText.includes('link3')){
//         aLink3Element.style.fontSize = '40px';
//     }
// }
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let a = document.getElementsByTagName('a');
// for (let aElement of a) {
//     if (aElement.innerText.includes('link1')){
//         aElement.classList.add('element_link1');
//     }else if (aElement.innerText.includes('link2')){
//         aElement.classList.add('element_link2')
//     }else if (aElement.innerText.includes('link3')){
//         aElement.classList.add('element_link3')
//     }
//
// }
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let backgroundSubHeader = document.getElementsByClassName('sub-header');
// for (let backgroundSubHeaderElement of backgroundSubHeader) {
//     backgroundSubHeaderElement.style.background = prompt('Введіть колір');
// }
//
// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// // Колір отримати з prompt()
//
// let colorSubHeader = document.getElementsByClassName('sub-header');
// for (let colorSubHeaderElement of colorSubHeader) {
//     if (colorSubHeaderElement.innerText.includes('content 2 segment')){
//         colorSubHeaderElement.style.color = prompt('Введіть колір тексту');
//     }
//
// }
//
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let changeText = document.getElementsByClassName('content_1');
// let content_1 = changeText[0];
// let p = content_1.getElementsByTagName('p');
// for (let pElement of p) {
//     pElement.innerText = prompt('введіть текст');
// }
//
// // l) отримати елементи p та змінити їм padding на 20px
//
// let padding = document.getElementsByTagName('p');
// for (let paddingElement of padding) {
//     paddingElement.style.padding = '20px';
// }
//
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let changeText2 = document.getElementsByClassName('text2');
// for (let changeText2Element of changeText2) {
//     changeText2Element.innerText = 'sep-2021';
// }