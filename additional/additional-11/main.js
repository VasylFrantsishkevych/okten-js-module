// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
//     - кількість товару
//     - ціна товару
//     - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let title = document.forms.addProduct.title;
let amount = document.forms.addProduct.amount;
let price = document.forms.addProduct.price;
let image = document.forms.addProduct.image;
let btn = document.getElementById('btn');
let item = 'product';

let saveProduct = (titleProduct, amountProduct, priceProduct, imageProduct) =>{
    let arrProduct = JSON.parse(localStorage.getItem(item)) || [];
    arrProduct.push({titleProduct, amountProduct, priceProduct, imageProduct});
    localStorage.setItem(item, JSON.stringify(arrProduct));
};

btn.onclick = function (e) {
    e.preventDefault();
    saveProduct(title.value, amount.value, price.value, image.value);
}

let a = document.createElement('a');
a.innerText = 'На сторінку товарів';
a.setAttribute('href', 'list.html');
document.body.appendChild(a);





// Samsung Galaxy S21 Ultra   Ціна: 35000 грн. Кількість: 10   https://185504.selcdn.ru/static/krutmobile.reshop.com.ua/catalog/1570/82570288460e449b7ddae5_medium.jpg
//     iPhone 13 Pro Max      Ціна: 46000 грн.  Кількість: 8   https://moscow.shop.megafon.ru/images/goods/1470/147069_p_20.png
