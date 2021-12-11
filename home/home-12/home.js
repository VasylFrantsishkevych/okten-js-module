// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => {
//         let divWrap = document.createElement('div');
//         divWrap.classList.add('wrap');
//         document.body.appendChild(divWrap);
//         for (let user of json) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             let h2UserId = document.createElement('h2');
//             h2UserId.innerText = `userId: ${user.userId}`;
//             let h2Id = document.createElement('h2');
//             h2Id.innerText = `Id: ${user.id}`;
//             let h4 = document.createElement('h4');
//             h4.innerText = `title: ${user.title}`;
//             let p = document.createElement('p');
//             p.innerText = `body: ${user.body}`;
//             divPost.append(h2UserId, h2Id, h4, p);
//
//             divWrap.appendChild(divPost);
//         }
//     });
//
// // 2.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //     Для кожного елементу свій блок div.comment
// // Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => response.json())
//     .then((json) => {
//         let divWrap = document.createElement('div');
//         divWrap.classList.add('wrapTwo');
//         document.body.appendChild(divWrap);
//         for (let comment of json) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comments');
//             let divId = document.createElement('div');
//             divId.classList.add('postId');
//             let h2PostId = document.createElement('h2');
//             h2PostId.innerText = `postId: ${comment.postId}`;
//             let h2ID = document.createElement('h2');
//             h2ID.innerText = `id: ${comment.id}`
//             let h3Name = document.createElement('h3');
//             h3Name.classList.add('name');
//             h3Name.innerText = `Name:\n ${comment.name}`;
//             let h4Email = document.createElement('h4');
//             h4Email.innerText = `email: ${comment.email}`;
//             let pBody = document.createElement('p');
//             let text = `body: ${comment.body}`;
//             pBody.innerText = text.replaceAll('\n', ' ');
//             divId.append(h2PostId, h2ID);
//             divComment.append(divId, h3Name, h4Email, pBody);
//             divWrap.appendChild(divComment);
//         }
// });