// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let n4 = 'Albus..---__Damboldor'
// function normString(arg){
//     return arg
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
//         .replaceAll('   ', ' ');
// }
// console.log(normString(n4));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// function random(size){
//     let array = [];
//     for (let i = 0; i < size; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
//     return array;
// }

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arrayNew = random(15);
// console.log(arrayNew.sort((a, b) => a - b));
// console.log(arrayNew.sort((a, b) => b - a));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arrayNew = random(16);
// console.log(arrayNew.filter(value => value % 2 === 0));
// console.log(arrayNew.filter(value => !(value % 2)));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arrayNew = random(10);
// console.log(arrayNew.map(value => value + ''));
// console.log(arrayNew.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(arr, direction){
//     if (direction === 'abc'){
//         return arr.sort((a, b) => a - b);
//     }else if (direction === 'cba'){
//         return arr.sort((a, b) => b -a);
//     }
//     return [];
// }
// console.log(sortNums(nums, 'abc'));
// console.log(sortNums(nums, 'cba'));

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) =>  b.monthDuration - a.monthDuration ));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));