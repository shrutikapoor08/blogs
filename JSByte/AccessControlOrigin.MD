# What is Access-Control-Allow-Origin header used for?


`Access-Control-Allow-Origin` is a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) header. CORS is a mechanism for browsers to let a site running at origin A to request resources from origin B. Origin is a combination of port, hostname and scheme. Such as - `http://mysite.example.com:8080/`


Here's an example where this will be useful - let's say I have a website http://mysite.com. I want to get resources from your website http://yoursite.com. To prevent your security, browser will not let me access resources from yoursite.com. In order to get resources, the browser needs to know that I am not a malicious user and that you and I are allowed to talk to each other. 

In order to do this, the server of yoursite.com will have to set `Access-Control-Allow-Origin` header. This tells the browser what origins are allowed to receive requests from this server.  


Here's an example of values you can set: 

1. `Access-Control-Allow-Origin : *` : Allows any origin
2. `Access-Control-Allow-Origin : http://mysite.com` : Allow requests only from mysite.com


Further reading - 
1. [Stackoverflow article](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work)
2. [MDN reference] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)