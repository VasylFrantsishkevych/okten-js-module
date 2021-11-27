// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine, driver){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.driver = driver;
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function (){
        for (let carKey in this) {
            if (typeof this[carKey] !== 'function'){
                console.log(`${carKey} - ${this[carKey]} `);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue){
        return this.year = newValue;
    };
}
function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}
let car = new Car('BMW', 'Germany', '2015', 200, 3.0, new Driver('Tom', 30, 5));
console.log(car);
car.drive();
car.info();
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2018));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engine, driver) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = driver;
//     }
//    drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//    }
//    info(){
//        for (let key in this) {
//            if (typeof this[key] !== 'function'){
//                console.log(`${key} - ${this[key]}`);
//            }
//        }
//    }
//     increaseMaxSpeed (newSpeed){
//         return this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     changeYear (newValue){
//         return this.year = newValue;
//     }
//
// }
// let car = new Car('Volvo','Czech Republic', '2015',190,2.0,new Driver('Max',32,7));
// console.log(car);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(10));
// console.log(car.changeYear(2020));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// function Popelushka(name,age,footsize){
//     this.name = name;
//     this.age = age;
//     this.footsize = footsize;
// }
// let userPopelushka = [
//     new Popelushka('Vika',21,34),
//     new Popelushka('Ola', 33,37),
//     new Popelushka('Tania', 25,35),
//     new Popelushka('Nina',55,42),
//     new Popelushka('Zina',45,41),
//     new Popelushka('Masha', 26,36),
//     new Popelushka('Katia', 24,44),
//     new Popelushka('Greta',30,40),
//     new Popelushka('Nadia',19,38),
//     new Popelushka('Ania',28,39)
// ];
//
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// function Prince(name, age, findShoeSize){
//     this.name = name;
//     this.age = age;
//     this.findShoeSize = findShoeSize;
// }
// let princ = new Prince('Kolia',30,40);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// let pop = function (userPopelushka, princ){
//     for (let userPopelushkaElement of userPopelushka) {
//         if (userPopelushkaElement.footsize === princ.findShoeSize){
//             return `${userPopelushkaElement.name}`;
//         }
//     }
// }
// console.log(pop(userPopelushka, princ));
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let find = userPopelushka.find(value => value.footsize === princ.findShoeSize);
// console.log(find);