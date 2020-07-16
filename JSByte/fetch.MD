# How to use fetch API to make AJAX calls in JavaScript? 

Fetch is an interface for calling a network request in JavaScript. It is implemented widely by modern browsers and provides a fairly straightforward way of calling an API. 


````
const promise = fetch(url, [options])

````

Calling fetch returns a promise, with Response object. The promise is rejected if there is a network error, and resolved if there is no problem connecting to the server and the server responded with a status code. This status code could be 200s, 400s or 500s.

A sample FETCH request - 
```javascript

fetch(url)
.then(response => response.json())
.catch(err => console.log(err))

```

The request is sent as a GET by default. To send a POST / PATCH / DELETE / PUT you can use the method property as part of `options` parameter. Some other possible values `options` can take - 

- `method`:  such as GET, POST, PATCH
- `headers`: Headers object
- `mode`:  such as `cors`, `no-cors`, `same-origin`
- `cache`: cache mode for request
- `credentials`
- `body`

[Check out the full list of available options here]('https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch')


Example usage:
This example demonstrates the usage of fetch to call an API and to get a list of git repositories.
``` javascript
const url = 'https://api.github.com/users/shrutikapoor08/repos';

fetch(url)
  .then(response => response.json())
  .then(repos => {
    const reposList = repos.map(repo => repo.name);
    console.log(reposList);
  })
.catch(err => console.log(err))

```