// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        let divWrap = document.createElement('div');
        divWrap.classList.add('wrap');
        document.body.appendChild(divWrap);
        for (let user of json) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('container');
            let divComments = document.createElement('div');
            divComments.classList.add('comments');

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then((response) => response.json())
                    .then((json) => {
                        for (let comment of json) {
                            if (comment.postId === user.id){
                                let divCommentContainer = document.createElement('div');
                                divCommentContainer.classList.add('commentContainer');
                                let h3PostId = document.createElement('h3');
                                h3PostId.innerText = `postId: ${comment.postId}`;
                                let h3Id = document.createElement('h3');
                                h3Id.innerText = `Id: ${comment.id}`;
                                let h4Name = document.createElement('h4');
                                h4Name.innerText = `Name: ${comment.name}`;
                                let h4Email = document.createElement('h4');
                                h4Email.innerText = `email: ${comment.email}`;
                                let pBody = document.createElement('p');
                                let text = `body: ${comment.body}`;
                                pBody.innerText = text.replaceAll('\n', ' ');

                                divCommentContainer.append(h3PostId, h3Id, h4Name, h4Email, pBody);
                                divComments.appendChild(divCommentContainer);
                            }
                        }
                    }); 
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            let h2UserId = document.createElement('h2');
            h2UserId.innerText = `userId: ${user.userId}`;
            let h2Id = document.createElement('h2');
            h2Id.innerText = `Id: ${user.id}`;
            let h4 = document.createElement('h4');
            h4.innerText = `title: ${user.title}`;
            let p = document.createElement('p');
            p.innerText = `body: ${user.body}`;
            let divBtn = document.createElement('div');
            divBtn.classList.add('btn');
            let btn = document.createElement('button');
            btn.innerText = 'Comments';
                btn.onclick = function (){
                    divComments.classList.toggle('openComments');
                }

            divBtn.appendChild(btn);
            divPost.append(h2UserId, h2Id, h4, p, divBtn);
            divContainer.append(divPost, divComments);
            divWrap.appendChild(divContainer);
        }
    });