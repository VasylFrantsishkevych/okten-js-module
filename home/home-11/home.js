// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
//
// let name = document.forms.formU.userName;
// let age = document.forms.formU.userAge;
// let sub = document.forms.formU.add;
//
// function save(userName, userAge) {
//     let user = {name: userName, age: userAge};
//     localStorage.setItem('user', JSON.stringify(user));
// }
// sub.onclick = function (){
//     save(name.value, age.value);
// }
//
// // -створити форму з інпутами для model,type та volume автівки.
// //     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let model = document.forms.car.model;
// let type = document.forms.car.type;
// let volume = document.forms.car.volume;
// let sub = document.forms.car.submit;
//
// function save(model, type, volume){
//     let arr = [];
//     arr.push({model,type, volume});
//     localStorage.setItem('car', JSON.stringify(arr));
// }
//
// // sub.onclick = function (){
// //     save(model.value, type.value, volume.value);
// // }
//
