//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1. перебрати його циклом while

 let array = [2,17,13,6,22,31,45,66,100,-18];
// a = 0;
// while (a < array.length  ){
//     console.log(array[a]);
//     a++;
// }

// a = array.length - 1;
// while (a >= 0){
//     console.log(array[a]);
//     a--;
// }

//2. перебрати його циклом for

// for (let a = 0; a <array.length; a++){
//     console.log(array[a]);
// }

// for (let a = array.length - 1; a >=0; a--){
//     console.log(array[a]);
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

// a = 0;
// while (a < array.length) {
//     if (a % 2 === 1){
//         console.log(array[a]);
//     }
//     a++;
// }

// a = array.length - 1;
// while (a >= 0){
//     if (a % 2 === 1){
//         console.log(array[a]);
//     }
//     a--;
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let a = 0; a < array.length; a++) {
//     if (a % 2 === 1){
//        console.log(array[a]);
//     }
// }

// for (let a = array.length - 1; a >=0; a--){
//     if (a % 2 ===1){
//         console.log(array[a]);
//     }
// }

//5. перебрати циклом while та вивести  числа тільки парні  значення

// a = 0;
// while (a < array.length) {
//     if (a % 2 === 0){
//         console.log(array[a]);
//     }
//     a++;
// }

// a = array.length - 1;
// while (a >= 0){
//     if (a % 2 === 0){
//         console.log(array[a]);
//     }
//     a--;
// }

//6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let a = 0; a < array.length; a++) {
//     if (a % 2 === 0){
//        console.log(array[a]);
//     }
// }

// for (let a = array.length - 1; a >=0; a--){
//     if (a % 2 === 0){
//         console.log(array[a]);
//     }
// }

//7. замінити кожне число кратне 3 на слово "okten"

// for (let a = 0; a < array.length; a++){
//     if (a % 3 === 0){
//         console.log('okten');
//     }
// }

// for (let a = array.length - 1; a >= 0; a--) {
//     if (a % 3 === 0){
//      array[a] = 'okten';
//      console.log(array[a]);
//     }
// }

//вивести масив в зворотньому порядку.

// for (let a = array.length - 1; a >= 0; a--){
//     console.log(array[a]);
// }

