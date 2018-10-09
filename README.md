This project is a library to make a get, post, put and delete request. Async and await were used in this library to make a request. The following is an example on how to use this library:

First of all, in your app.js you have to create an EasyHttp object:

const http = new EasyHttp();

To make a GET request:
http.get(the url to make a get request);

To make a POST request:
http.post(the url to make a post, and the data itself);

To make a PUT request:
http.put(the url to make a put request, and the data itself);

To make a DELETE request:
http.delete(the url to make a delete request);

More examples can be found in app.js.


