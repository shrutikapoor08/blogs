# Access-Control-Allow-Origin header explained: What is it used for and how to use it?

Outline
1. What is it?
2. When should Access-Control-Allow-Origin be used?
3. How to use?


## What is `Access-Control-Allow-Origin` header?
`Access-Control-Allow-Origin` is a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) header. CORS is a mechanism for browsers to let a site running at origin A to request resources from origin B. Origin is not just the hostname, but a combination of port, hostname and scheme. Such as - `http://mysite.example.com:8080/`


Here's an example where this comes into action - 
1. I have an origin A: http://mysite.com and I want to get resources from origin B: http://yoursite.com. 
2. To prevent your security, browser will not let me access resources from yoursite.com. 


![https://mdn.mozillademos.org/files/14295/CORS_principle.png](https://mdn.mozillademos.org/files/14295/CORS_principle.png)


 With the help of Cross Origin Resource Sharing (CORS), browsers allow origins to share resources amongst each other. There are a [few headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers) that allow sharing of resources across origins, but the main one is  `Access-Control-Allow-Origin`. This tells the browser what origins are allowed to receive requests from this server. 


## Who needs to set `Access-Control-Allow-Origin`?

To understand who needs to set this header, consider this - You are browsing a website that is used to view songs. The website attempts to make a connection to your bank in the background maliciously. Who has the control to prevent this malicious website from stealing your data from the bank? The bank! So, the server that has resources it needs to protect must set `Access-Control-Allow-Origin` header as part of the response. 



## How to use and when to pass this header? 
Here's an example of values you can set: 

1. `Access-Control-Allow-Origin : *` : Allows any origin
2. `Access-Control-Allow-Origin : http://mysite.com` : Allow requests only from mysite.com

In an express app, the headers can be set like this - 

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

On the client side, here is a sample code to ping this api - 

```
fetch('http://localhost:8000/api')
.then(res => res.json())
.then(res => console.log(res));


```

Currently, the header is set to allow access only from `https://yoursite.com`. If you try fetching the api, it will throw an error - 

```
Access to fetch at 'http://localhost:8000/api' from origin 'http://localhost:3000' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://yoursite.com' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Now, to fix this, change the headers to - 

``` 
 res.setHeader("Access-Control-Allow-Origin", "*");
```

Now you will be able to see the string `Hello` in your browser's console. 


Further reading - 
1. [Stackoverflow article](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work)
2. [MDN reference] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)