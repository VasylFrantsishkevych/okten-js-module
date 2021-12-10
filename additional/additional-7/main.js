// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function rec(start) {
    let arr = [];
    if (start.children.length){
        for (let startElement of start.children) {
            if (startElement.classList.length > 0 ){
                arr.push(startElement.classList[0], startElement.classList[1]);
            }
            rec(startElement);
        }
    }if (arr.length > 0) {
        console.log(arr);
    }
}
rec(document.body);


