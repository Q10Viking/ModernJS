const http = new EasyHttp();

http.get('https://jsonplaceholder.typicode.com/posts',function(error,posts){
    if(error){
        console.error(error);
    }else{
        console.log(posts);
    }
})