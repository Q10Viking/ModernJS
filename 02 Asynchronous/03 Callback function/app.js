const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function createPost(post,callback){
    //  延迟事件，模拟网络的延迟
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}


function displayPosts(){
    setTimeout(function(){
        let output = '';
        
        posts.forEach(post => {
            output += `
            <ul>
                <li>${post.title}</li>
                <li>${post.body}</li>
            </ul>
            `
        })
        document.body.innerHTML = output;
    },1000);
}


createPost({title: 'Post Three', body: 'This is post three'},displayPosts)