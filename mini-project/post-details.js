// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let jsonPost = url.searchParams.get('data');
let parsePost = JSON.parse(jsonPost);
let divPostComment = document.createElement('div');
divPostComment.classList.add('post__comment');

let divPost = document.createElement('div');
divPost.classList.add('post');

let divPostId = document.createElement('div');
divPostId.classList.add('post__id');
divPostId.innerHTML = `
                       <h3>userId: ${parsePost.userId}</h3>
                       <h3>id: ${parsePost.id}</h3>`;

let h4Post = document.createElement('h4');
h4Post.innerText = `title: ${parsePost.title}`;

let pPost = document.createElement('p');
let pPostText = `${parsePost.body}`
pPost.innerText = pPostText.replaceAll('\n', ' ');

divPost.append(divPostId, h4Post, pPost);


let divComments = document.createElement('div');
divComments.classList.add('comments');

fetch(`https://jsonplaceholder.typicode.com/posts/${parsePost.id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        comments.forEach(comment => {
            let divCommentCard = document.createElement('div');
            divCommentCard.classList.add('comment__card');

            divCommentCard.innerHTML = `
                                        <h3>name: ${comment.name}</h3>
                                        <h4>emanil: ${comment.email}</h4>`;
            let pComment = document.createElement('p');
            pComment.innerText = `${comment.body}`.replaceAll('\n', ' ');

            divCommentCard.append(pComment);
            divComments.appendChild(divCommentCard);
        });
    });

divPostComment.append(divPost, divComments);
document.body.appendChild(divPostComment);
