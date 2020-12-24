const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts',function(error,posts){
//     if(error){
//         console.error(error);
//     }else{
//         console.log(posts);
//     }
// })

let data = {
    title: 'test',
    body: 'Hello World'
}

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(error,response){
//     console.log(response);
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(error,response){
//     console.log(response);
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error,response){
    console.log(response);
})

