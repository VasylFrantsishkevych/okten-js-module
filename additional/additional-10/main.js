// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');

        document.body.appendChild(divContainer);
        users.forEach(user => {
            let divUsers = document.createElement('div');
            divUsers.classList.add('users');

            let divName = document.createElement('div');
            divName.classList.add('users__name');

            let h2Id = document.createElement('h2');
            h2Id.innerText = `Id: ${user.id}`;

            let h2Name = document.createElement('h2');
            h2Name.innerText = `Name: ${user.name}`;

            let h2UserName = document.createElement('h2');
            h2UserName.innerText = `Username: ${user.username}`;

            let divAddress = document.createElement('div');
            divAddress.classList.add('users__address')

            let h4Email = document.createElement('h4');
            h4Email.innerText = `Email: ${user.email}`;

            let ulAddress = document.createElement('ul');
            ulAddress.innerHTML = '<strong>Address</strong>';

            for (const addressKey in user.address) {
                if (addressKey !== 'geo') {
                    let liAddress = document.createElement('li')
                    liAddress.innerText = `${addressKey}: ${user.address[addressKey]}`;
                    ulAddress.appendChild(liAddress);
                } else {
                    let ulGeo = document.createElement('ul');
                    ulGeo.innerHTML = '<strong>Geo</strong>';
                    for (const geoKey in user.address.geo) {
                        let liGeo = document.createElement('li');
                        liGeo.innerText = `${geoKey}: ${user.address.geo[geoKey]}`;
                        ulGeo.appendChild(liGeo);
                    }
                    ulAddress.appendChild(ulGeo);
                }
            }

            let divButtonUsers = document.createElement('div');
            divButtonUsers.classList.add('users__button');

            let btnUsers = document.createElement('button');
            btnUsers.innerText = 'Posts';

            btnUsers.onclick = function () {
                divPosts.classList.toggle('posts__open');
            }

            divName.append(h2Name, h2UserName);
            divAddress.append(h4Email, ulAddress);
            divButtonUsers.appendChild(btnUsers);
            divUsers.append(h2Id, divName, divAddress, divButtonUsers);

            let divWrap = document.createElement('div');
            divWrap.classList.add('wrap');

            let divPosts = document.createElement('div');
            divPosts.classList.add('posts');

            let divComments = document.createElement('div');
            divComments.classList.add('comments');

            let divPost = document.createElement('div');
            divPost.classList.add('post');

            divPosts.appendChild(divPost);
            divWrap.append(divPosts, divComments);

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((posts) => {
                    posts.forEach(post => {
                        if (user.id === post.userId) {
                            let divPostCard = document.createElement('div');
                            divPostCard.classList.add('post__card');

                            let h2PostsUserId = document.createElement('h2');
                            h2PostsUserId.innerText = `userId: ${post.userId}`;

                            let h2PostsId = document.createElement('h2');
                            h2PostsId.innerText = `Id: ${post.id}`;

                            let h4Title = document.createElement('h4');
                            h4Title.innerText = `Title: ${post.title}`;

                            let pPostsBody = document.createElement('p');
                            let textPost = `body: ${post.body}`;
                            pPostsBody.innerText = textPost.replaceAll('\n', ' ');

                            let divButtonPosts = document.createElement('div');
                            divButtonPosts.classList.add('posts__button');

                            let btnPosts = document.createElement('button');
                            btnPosts.innerText = 'Comments';

                                btnPosts.onclick = function () {
                                    divCommentWrap.classList.toggle('comment__wrap_open');
                                }

                            divButtonPosts.appendChild(btnPosts);
                            divPostCard.append(h2PostsUserId, h2PostsId, h4Title, pPostsBody, divButtonPosts);

                            let divCommentWrap = document.createElement('div');
                            divCommentWrap.classList.add('comment__wrap');

                            let divComment = document.createElement('div');
                            divComment.classList.add('comment');

                            divCommentWrap.appendChild(divComment);
                            divPost.appendChild(divPostCard);
                            divComments.appendChild(divCommentWrap);

                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then((response) => response.json())
                                .then((comments) => {
                                    comments.forEach(comment => {
                                        if (post.id === comment.postId) {
                                            let divCommentCard = document.createElement('div');
                                            divCommentCard.classList.add('card');

                                            let h2CommentPostId = document.createElement('h2');
                                            h2CommentPostId.innerText = `postId: ${comment.postId}`;

                                            let h2CommentId = document.createElement('h2');
                                            h2CommentId.innerText = `Id: ${comment.id}`;

                                            let h3CommentName = document.createElement('h3');
                                            h3CommentName.innerText = `Name: ${comment.name}`;

                                            let pCommentEmail = document.createElement('p');
                                            pCommentEmail.innerText = `Email: ${comment.email}`;

                                            let pCommentBody = document.createElement('p');
                                            let textComment = `body: ${comment.body}`;
                                            pCommentBody.innerText = textComment.replaceAll('\n', ' ');

                                            divCommentCard.append(h2CommentPostId, h2CommentId, h3CommentName, pCommentEmail, pCommentBody);
                                            divComment.appendChild(divCommentCard);
                                        }
                                    });
                                });
                        }
                    });
                });
            divContainer.append(divUsers, divWrap);
        });
    });