const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data));

const data = {
    name: 'Leon S Kennedy',
    username: 'lkennedy',
    email: 'lsk@umbrella.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
// .then(data => console.log(data));

http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data));
