// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

        let divContainerUser = document.createElement('div');
        divContainerUser.classList.add('user__name_container');
        document.body.appendChild(divContainerUser);

        for (const user of users) {

            let divUserName = document.createElement('div');
            divUserName.classList.add('user__name_card');
            divUserName.innerHTML = `
                                    <h2>Id: ${user.id}</h2>
                                    <h2>${user.name}</h2>
                                    `;
            let aUser = document.createElement('a');
            aUser.innerText = 'User Details';
            aUser.href =  'user-details.html?id='+user.id;

            divUserName.appendChild(aUser);
            divContainerUser.appendChild(divUserName);
        }
});


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
