// - Дано натуральное число n. Выведите все числа от 1 до n.

// function recurs(n) {
//     if (n === 1) {
//         return "1";
//     }
//     return recurs(n - 1) + " " + n;
// }
// document.write(recurs(5));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// function recurs(a, b) {
//     if (a < b) {
//         if (a === b) {
//             return a;
//         }
//         return a + " " + recurs(a + 1, b);
//     } else {
//         if (a === b) {
//             return a;
//         }
//         return a + " " + recurs(a - 1, b);
//     }
// }
// document.write(recurs(5, 10) + '<br>');
// document.write(recurs(10, 5));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let change = (arr, n) => {
//     for (let arrElement of arr) {
//         if (arrElement[i] === n){
//
//         }
//     }
// }
// console.log(change([9,8,0,4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let asd