// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let idOfUsers = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + idOfUsers)
    .then(response => response.json())
    .then(users => {

        let divUserContainer = document.createElement('div');
        divUserContainer.classList.add('container');

        let divUserTop = document.createElement('div');
        divUserTop.classList.add('user__top');

        let divUserTopLeft = document.createElement('div');
        divUserTopLeft.classList.add('user__top_info');
        divUserTopLeft.innerHTML = `
                                    <h3>username: ${users.username}</h3>
                                    <h3>phone: ${users.phone}</h3>
                                    `;

        let divUserTopRight = document.createElement('div');
        divUserTopRight.classList.add('user__top_info');
        divUserTopRight.innerHTML = `
                                     <h3>email: ${users.email}</h3>
                                     <h3>website: ${users.website}</h3>
                                     `;

        let divUserBottom = document.createElement('div');
        divUserBottom.classList.add('user__bottom');

        let divBottomAddress = document.createElement('div');
        divBottomAddress.classList.add('user__bottom_ul')

        let divBottomGeo = document.createElement('div');
        divBottomGeo.classList.add('user__bottom_ul');

        let ulAddress = document.createElement('ul');
        ulAddress.innerHTML = '<strong>Address</strong>';

        for (const addressKey in users.address) {
            if (addressKey !== 'geo') {
                let liAddress = document.createElement('li');
                liAddress.innerText = `${addressKey}: ${users.address[addressKey]}`;
                ulAddress.appendChild(liAddress);
            } else {
                let ulGeo = document.createElement('ul');
                ulGeo.innerHTML = '<strong>Geo</strong>';
                divBottomGeo.appendChild(ulGeo);

                for (const geoKey in users.address.geo) {
                    let liGeo = document.createElement('li');
                    liGeo.innerText = `${geoKey}: ${users.address.geo[geoKey]}`;
                    ulGeo.appendChild(liGeo);
                }
            }
        }

        let divBottomCompany = document.createElement('div');
        divBottomCompany.classList.add('user__bottom_ul');

        let ulCompany = document.createElement('ul');
        ulCompany.innerHTML = '<strong>Company</strong>';
        divBottomCompany.appendChild(ulCompany);

        for (const companyKey in users.company) {
            let liCompany = document.createElement('li');
            liCompany.innerText = `${companyKey}: ${users.company[companyKey]}`;
            ulCompany.appendChild(liCompany);
        }

        let divPost = document.createElement('div');
        divPost.classList.add('posts')

        let divUserButton = document.createElement('div');
        divUserButton.classList.add('user__button');

        let btnUsers = document.createElement('button');
        btnUsers.innerText = 'post of current user';

        btnUsers.onclick = function () {
            divPostTitle.classList.toggle('post__title_open');
        }

        let divPostTitle = document.createElement('div');
        divPostTitle.classList.add('post__title');

        fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`)
            .then((response) => response.json())
            .then((posts) => {
                posts.forEach(post => {
                    let divPostCard = document.createElement('div');
                    divPostCard.classList.add('post__title_card');

                    let pPostTitle = document.createElement('p');
                    pPostTitle.innerText = `${post.title}`;

                    let aPosts = document.createElement('a');
                    aPosts.innerText = 'Post Details';
                    aPosts.href = 'post-details.html?data=' + JSON.stringify(post);

                    divPostCard.append(pPostTitle, aPosts);
                    divPostTitle.appendChild(divPostCard);

                });
            });


        divUserButton.append(btnUsers);
        divPost.append(divUserButton, divPostTitle);
        divBottomAddress.appendChild(ulAddress);
        divUserBottom.append(divBottomAddress, divBottomGeo, divBottomCompany);
        divUserTop.append(divUserTopLeft, divUserTopRight);
        divUserContainer.append(divUserTop, divUserBottom, divPost);
        document.body.appendChild(divUserContainer);

    });