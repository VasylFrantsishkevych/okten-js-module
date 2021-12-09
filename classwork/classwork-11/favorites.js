let a = document.createElement('a');
a.innerText = 'BACK';
a.classList.add('styleA');
a.setAttribute('href', 'index.html');
let divWrap = document.createElement('div');
document.body.append(a, divWrap);
let favorite = JSON.parse(localStorage.getItem('favorites'));
favorite.forEach(user => {
    let p = document.createElement('p');
    let text = '';
    for (let key in user) {
        text += `  ${key}: ${user[key]}\n`;
    }
    p.innerText = text;
    divWrap.append(p);
});