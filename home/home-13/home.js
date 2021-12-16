// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// promise

// function eatBreakfast() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let breakfast = 'Поснідати';
//         console.log(breakfast);
//         resolve(breakfast)
//     }, 1000);
//     });
// }
//
// function drinkCoffee() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let coffee = 'Випити кави';
//         console.log(coffee);
//         resolve(coffee)
//     }, 3000);
//     });
// }
//
// function shower() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let shower = 'Прийняти душ';
//         console.log(shower);
//         resolve(shower)
//     }, 800);
//     });
// }
//
// function goToWork() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let work = 'Піти на роботу';
//         console.log(work);
//         resolve(work);
//     }, 500);
//     });
// }
//
// function eatLunch() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let lunch = 'Пообідати'
//         console.log(lunch);
//         resolve(lunch)
//     }, 1500);
//     });
// }
//
// function comeFromWork() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let comeWork = 'Прийти з роботи';
//         console.log(comeWork);
//         resolve(comeWork)
//     }, 150);
//     });
// }
//
// function buyProducts() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let buy = 'Купити продукти';
//         console.log(buy);
//         resolve(buy)
//     }, 900);
//     });
// }
//
// function cookDinner() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let cook = 'Приготувати вечерю';
//         console.log(cook);
//         resolve(cook)
//     }, 2500);
//     });
// }
//
// function eatDinner() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let dinner = 'Повечеряти';
//         console.log(dinner);
//         resolve(dinner)
//     }, 1800);
//     });
// }
//
// function sleep() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let sleep = 'Лягти спати';
//         console.log(sleep);
//         resolve(sleep)
//     }, 1300);
//     });
// }
//
// eatBreakfast()
//     .then(() => {
//         return drinkCoffee()
//     })
//     .then(() => {
//         return shower()
//     })
//     .then(() => {
//         return goToWork()
//     })
//     .then(() => {
//         return eatLunch()
//     })
//     .then(() => {
//         return comeFromWork()
//     })
//     .then(() =>{
//         return buyProducts()
//     })
//     .then(() => {
//         return cookDinner()
//     })
//     .then(() => {
//         return eatDinner()
//     })
//     .then(() => {
//         return sleep()
//     })

// async away

// function eatBreakfast() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let breakfast = 'Поснідати';
//         console.log(breakfast);
//         resolve(breakfast)
//     }, 1000);
//     });
// }
//
// function drinkCoffee() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let coffee = 'Випити кави';
//         console.log(coffee);
//         resolve(coffee)
//     }, 3000);
//     });
// }
//
// function shower() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let shower = 'Прийняти душ';
//         console.log(shower);
//         resolve(shower)
//     }, 800);
//     });
// }
//
// function goToWork() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let work = 'Піти на роботу';
//         console.log(work);
//         resolve(work);
//     }, 500);
//     });
// }
//
// function eatLunch() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let lunch = 'Пообідати'
//         console.log(lunch);
//         resolve(lunch)
//     }, 1500);
//     });
// }
//
// function comeFromWork() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let comeWork = 'Прийти з роботи';
//         console.log(comeWork);
//         resolve(comeWork)
//     }, 150);
//     });
// }
//
// function buyProducts() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let buy = 'Купити продукти';
//         console.log(buy);
//         resolve(buy)
//     }, 900);
//     });
// }
//
// function cookDinner() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let cook = 'Приготувати вечерю';
//         console.log(cook);
//         resolve(cook)
//     }, 2500);
//     });
// }
//
// function eatDinner() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let dinner = 'Повечеряти';
//         console.log(dinner);
//         resolve(dinner)
//     }, 1800);
//     });
// }
//
// function sleep() {
//     return new Promise(resolve => {
//     setTimeout(() => {
//         let sleep = 'Лягти спати';
//         console.log(sleep);
//         resolve(sleep)
//     }, 1300);
//     });
// }
//
// async  function timeTable() {
//     await eatBreakfast();
//     await drinkCoffee();
//     await shower();
//     await goToWork();
//     await eatLunch();
//     await comeFromWork();
//     await buyProducts();
//     await cookDinner();
//     await eatDinner();
//     await sleep();
// }
// timeTable()

//callback

// function eatBreakfast(callback) {
//     setTimeout(() => {
//         console.log('Поснідати');
//         callback();
//     }, 1000);
// }
//
// function drinkCoffee(callback) {
//     setTimeout(() => {
//         console.log('Випити кави');
//         callback();
//     }, 3000);
// }
//
// function shower(callback) {
//     setTimeout(() => {
//         console.log('Прийняти душ');
//         callback();
//     }, 800);
// }
//
// function goToWork(callback) {
//     setTimeout(() => {
//         console.log('Піти на роботу');
//         callback();
//     }, 500);
// }
//
// function eatLunch(callback) {
//     setTimeout(() => {
//         console.log('Пообідати');
//         callback();
//     }, 1500);
// }
//
// function comeFromWork(callback) {
//     setTimeout(() => {
//         console.log('Прийти з роботи');
//         callback();
//     }, 150);
// }
//
// function buyProducts(callback) {
//     setTimeout(() => {
//         console.log('Купити продукти');
//         callback();
//     }, 900);
// }
//
// function cookDinner(callback) {
//     setTimeout(() => {
//         console.log('Приготувати вечерю');
//         callback();
//     }, 2500);
// }
//
// function eatDinner(callback) {
//     setTimeout(() => {
//         console.log('Повечеряти');
//         callback();
//     }, 1800);
// }
//
// function sleep() {
//     setTimeout(() => {
//         console.log('Лягти спати');
//     }, 1300);
// }
//
//
// eatBreakfast(() =>{
//     drinkCoffee(() => {
//        shower(() => {
//            goToWork(() => {
//                eatLunch(() => {
//                    comeFromWork(() => {
//                        buyProducts(() => {
//                            cookDinner(() => {
//                                eatDinner(() => {
//                                   sleep()
//                                });
//                            });
//                        });
//                    });
//                });
//            });
//        });
//     });
// });





//
// eatBreakfast();
// drinkCoffee();
// shower();
// goToWork();
// eatLunch();
// comeFromWork();
// buyProducts();
// cookDinner();
// eatDinner();
// sleep();