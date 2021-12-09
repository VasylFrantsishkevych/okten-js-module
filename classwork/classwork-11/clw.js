// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

localStorage.setItem('favorites', JSON.stringify([]));
let a = document.createElement('a');
a.innerText = 'Go to favorites';
a.classList.add('styleA');
a.setAttribute('href', 'favorites.html');
let divWrap = document.createElement('div');
document.body.append(a, divWrap);
users.forEach(user => {
    let hr = document.createElement('hr');
    let text = '';
    for (let key in user) {
        text += `  ${key}: ${user[key]},`;
    }
    let divUser = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = text;
    let btn = document.createElement('button');
    btn.innerText = 'додати до улюблених';

    btn.onclick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        btn.disabled = true;
    }

    divWrap.append(divUser, hr);
    divUser.append(p, btn);
});



