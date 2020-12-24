const easyHttp = new EasyHttp();

// easyHttp.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data));

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
  }
easyHttp.post('https://jsonplaceholder.typicode.com/users',data).then(data => console.log(data));

// put user
// easyHttp.put('https://jsonplaceholder.typicode.com/users/2',data).then(data => console.log(data));


// easyHttp.delete('https://jsonplaceholder.typicode.com/users/1').then(data => console.log(data));
