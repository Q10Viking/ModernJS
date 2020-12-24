const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');


btn1.addEventListener('click',function(){
    // fetch return promise
    fetch('data.text')
        .then(function(response){
           return response.text();
        }).then(function(data){
            console.log(data);
        })
})


btn2.addEventListener('click',function(){
    fetch('posts.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
})




btn3.addEventListener('click',function(){
    fetch('https://api.github.com/users')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
})
