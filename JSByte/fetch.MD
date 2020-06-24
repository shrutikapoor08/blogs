# How does FETCH work?

Fetch is an interface for calling a network request in JavaScript. It is implemented widely by modern browsers and provides a fairly straightforward way of calling an API. 

The syntax - 

````
const promise = fetch(url, [options])

````

Calling fetch returns a promise, with Response object. The promise is rejected if there is a network error, and resolved if there is no problem connecting to the server and the server responded with a status code. 

A sample FETCH request - 
```javascript

fetch(url)
.then( response => response.json())
.catch( err => console.log(err))

```

The request above is sent as a GET. To send a POST / PATCH / DELETE / PUT you can use the `options` parameter. Some other possible values `options` can take - 

- `method` : GET, POST, PATCH etc.
- `headers` : Headers object
- `mode`
- `cache`
- `credentials`
- `body`

[Check out the full list of available options here]('https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch')


Example usage:
This example demonstrates the usage of fetch to call an API and render content on the page. 
<TODO Add example here> 
<TODO add explanation of options> 
