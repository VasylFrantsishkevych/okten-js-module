let item = 'product';
let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
let btnDelete = document.createElement('button');
btnDelete.innerText = 'DELETE';
    btnDelete.onclick = () => {
        localStorage.removeItem('product');
        divWrap.remove();
    };
document.body.append(btnDelete, divWrap);
let productsId = JSON.parse(localStorage.getItem(item));
let map = productsId.map((value, index) => {
    value.id = index + 1;
    return value;
});
localStorage.setItem(item, JSON.stringify(map));
let products = JSON.parse(localStorage.getItem(item));
products.forEach(product => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    let h2NameProduct = document.createElement('h2');
    h2NameProduct.innerText = product.titleProduct;
    let divPrice = document.createElement('div');
    divPrice.classList.add('price');
    let h3Price = document.createElement('h3');
    h3Price.innerText = `Ціна: ${product.priceProduct} грн.`;
    let h3Amount = document.createElement('h3');
    h3Amount.innerText = `Кількість: ${product.amountProduct}`;
    let imgProduct = document.createElement('img');
    imgProduct.classList.add('image');
    imgProduct.src = product.imageProduct;
    let btnCard = document.createElement('button');
    btnCard.classList.add('btnCard');
    btnCard.innerText = 'Delete Product';
        btnCard.onclick = function (){
            delProduct(product.id);
            divCard.remove();
        }

    divPrice.append(h3Price, h3Amount);
    divCard.append(h2NameProduct, divPrice, imgProduct, btnCard);
    divWrap.appendChild(divCard);
});

let delProduct = (id) => {
    let del = JSON.parse(localStorage.getItem(item));
    let filter = del.filter(value => value.id !== id);
    localStorage.setItem(item, JSON.stringify(filter));
}



