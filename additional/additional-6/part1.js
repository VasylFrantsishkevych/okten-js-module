// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function Users(id, name, username, eamil, addresfn, phone, website, companyfn){
//     this.id = id;
//     this.name = name;
//     this.email = eamil;
//     this.addresfn = addresfn;
//     this.phone = phone;
//     this.website = website;
//     this.company = companyfn;
// }
// function Address(street, suite, city, zipcode, geoLat, geoLng){
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo = {lat: geoLat, lng: geoLng};
// }
// function Company(name, catchPhrase, bs){
//     this.name = name;
//     this.catchaphrase = catchPhrase;
//     this.bs = bs;
// }
// let constructor = new Users(1,'Kolia Fares', 'Kalian', 'fares@sad.com',
//     new Address('Vesela','Apt. 222', 'Brody','92998-3874', '-35.6215','45.2152'),
//     '+38 099 54 85 123','kolia.com.ua',new Company('Romaguera-Crona','Multi-layered client-server neural-net',
//         'harness real-time e-markets'));
// console.log(constructor);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// class Tag{
//     constructor(title, description, attrsTitle, attrAction, attrsTitle1, attrAction1, attrsTitle2, attrAction2) {
//         this.title = title;
//         this.description = description;
//         this.attrs = [
//             {title: attrsTitle, action: attrAction},
//             {title: attrsTitle1, action: attrAction1}
//         ];
//     }
// }
// let a = new Tag('<a>', 'HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) ' +
//     'або на певний елемент цієї сторінки(Внутрішне посилання).','href', 'Задає адрес документа на який потрібно перейти',
//     'title', 'Додає підказку до тексту посилання.');
// let div = new Tag('div', 'Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.',
//     'align','Визначає вирівнювання вмісту тега <div> .','title','Додає спливаючу підказку до вмісту.');
// let h1 = new Tag('<h1>','<h1> визначає найбільш важливі заголовки','align','Визначає вирівнювання заголовка.',
//     'class', 'Визначає ім\'я класу, що дозволяє пов\'язати тег із стильовим оформленням.');
// let span = new Tag('<span>', 'Тег <span> призначений визначення малих елементів документа.','class',
//     'Визначає ім\'я класу, що дозволяє пов\'язати тег із стильовим оформленням.','id','Вказує ім\'я стильового ідентифікатора.');
// let input = new Tag('<input>','Тег <input> є одним із різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу та забезпечити взаємодію з користувачем.',
//     'alt','Альтернативний текст для кнопки із зображенням.','autofocus','Встановлює фокус у полі форми.');
// let form = new Tag('<input>','Тег <form> встановлює форму на веб-сторінці.','action',
//     'Адреса програми чи документа, що обробляє дані форми.','name','Назва форми.');
// let option = new Tag('<option>','Тег <option> визначає окремі пункти списку, який створюється за допомогою контейнера <select> .',
//     'label','Вказує позначку пункту списку.','value',
//     'Значення пункту списку, яке буде надіслано на сервер або прочитано за допомогою скриптів.');
// let select = new Tag('<select>','Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку',
//     'form','Пов\'язує список із формою.','size\n','Кількість рядків списку, що відображаються.');
// console.log(a,div,h1,span,input,form,option,select);