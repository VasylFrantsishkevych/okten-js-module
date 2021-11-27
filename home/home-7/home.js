// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1,'Андрій', 'Білик', 'aawwrr@sad.com', 30502369852),
//     new User(12, 'Володя', 'Мопс', 'sseeaa@sad.com', 30504411698),
//     new User(43,'Коля', 'Хопс','ddeeqq@sad.com', 30665544789),
//     new User(23, 'Оля', 'Кока', 'ggvvdd@sad@com',30995588123),
//     new User(66,'Петя', 'Петькін','ggvvcc@sad.com', 30509944621),
//     new User(48,'Діма','Прок', 'hhggtt@sad.com', 30568811562),
//     new User(71, 'Галя', 'Дутка', 'ttddnn@sad.com', 30508463125),
//     new User(22,'Костя','Міп', 'eeffss@sad.com',30995577412)
//     ]
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filter = users.filter(value => value.id % 2 === 0);
// console.log(filter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = users.sort((a, b) => a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id,name,surname,email,phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname =surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let arrayClient =[
//     new Client(1,'Андрій', 'Білик', 'aawwrr@sad.com', 30502369852,['tea']),
//     new Client(12, 'Володя', 'Мопс', 'sseeaa@sad.com', 30504411698, ['apple', 'lemon', 'orange']),
//     new Client(43,'Коля', 'Хопс','ddeeqq@sad.com', 30665544789,['milk','coffee']),
//     new Client(23, 'Оля', 'Кока', 'ggvvdd@sad@com',30995588123, ['phone', 'headphone','laptop','tablet','watch']),
//     new Client(66,'Петя', 'Петькін','ggvvcc@sad.com', 30509944621, ['water']),
//     new Client(48,'Діма','Прок', 'hhggtt@sad.com', 30568811562, ['juice', 'beer']),
//     new Client(71, 'Галя', 'Дутка', 'ttddnn@sad.com', 30508463125, ['beef','pork','chicken']),
//     new Client(22,'Костя','Міп', 'eeffss@sad.com',30995577412, ['ball','racket','shoes','guitar','car','bike'])
// ];
// console.log(arrayClient);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = arrayClient.sort((a, b) => a.order.length -b.order.length);
// console.log(sort);