# Access-Control-Allow-Origin header explained: What is it used for and how to use it?

Outline
1. What is it?
2. When should it be used?
3. How to use?


## What is `Access-Control-Allow-Origin` header?
`Access-Control-Allow-Origin` is a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) header. CORS is a mechanism for browsers to let a site running at origin A to request resources from origin B. Origin is not just the hostname, but a combination of port, hostname and scheme. Such as - `http://mysite.example.com:8080/`


Here's an example of where this comes into action - 
1. I have an origin A: http://mysite.com and I want to get resources from origin B: http://yoursite.com. 
2. To prevent your security, browser will not let me access resources from yoursite.com and will block my request. 
3. In order to allow origin A to access your resources, your origin B will need to let the browser know that it is okay for me to get resources from your origin.


Here is an example from [MDN](https://mdn.mozillademos.org/files/14295/CORS_principle.png) that explains this really well

![https://mdn.mozillademos.org/files/14295/CORS_principle.png](https://mdn.mozillademos.org/files/14295/CORS_principle.png)


 With the help of Cross Origin Resource Sharing (CORS), browsers allow origins to share resources amongst each other. There are a [few headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers) that allow sharing of resources across origins, but the main one is  `Access-Control-Allow-Origin`. This tells the browser what origins are allowed to receive requests from this server. 


## Who needs to set `Access-Control-Allow-Origin`?

To understand who needs to set this header, consider this - You are browsing a website that is used to view songs. The website attempts to make a connection to your bank in the background maliciously. Who has the ultimate control to prevent this malicious website from stealing your data from the bank? The bank! So, the bank will need to protect its resources by setting the `Access-Control-Allow-Origin` header as part of the response. Hence, the origin responsible for serving resources will need to set this header.



## How to use and when to pass this header? 
Here's an example of values you can set: 

1. `Access-Control-Allow-Origin : *` : Allows any origin
2. `Access-Control-Allow-Origin : http://mysite.com` : Allow requests only from mysite.com


## See in action! 

Let's look at an example! You can check out this code [on my GitHub repo](https://github.com/shrutikapoor08/blogs/tree/master/code-examples/CORS). 

We are going to build a server on origin A `http://localhost:8000` which will send a string of `Hello` on `api` endpoint. We are going to call with this endpoint by creating a client on origin B `http://localhost:3000` and using fetch to request resource. We expect to see the string `Hello` passed by origin A in the browser console of origin B. 


Let's say we have an origin up on `http://localhost:8000` that serves up this resource on `/api` endpoint. The server sends a response with the header `Access-Control-Allow-Origin`.

```
const express = require("express");

const app = express();
const port = process.env.SERVER_PORT || 8000;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

```

On the client side, you can call this endpoint by calling `fetch` - 

```
fetch('http://localhost:8000/api')
.then(res => res.json())
.then(res => console.log(res));

```
Now open your browser's console to see the result. 
Since the header is currently set to allow access only from `https://yoursite.com`, the browser will block access to the resource and you will see an error in your console.


![CORS error](./img/CORS-access-denied.png)

Now, to fix this, change the headers to - 

``` 
 res.setHeader("Access-Control-Allow-Origin", "*");
```

Check your browser's console and now you will be able to see the string `Hello`


Further reading - 
1. [Stackoverflow article](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work)
2. [MDN reference] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)