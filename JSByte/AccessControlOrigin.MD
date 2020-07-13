# Access-Control-Allow-Origin header explained: What is it used for and how to use it?

Outline
1. What is it?
2. When should Access-Control-Allow-Origin be used?
3. How to use?


## What is it?
`Access-Control-Allow-Origin` is a [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) header. CORS is a mechanism for browsers to let a site running at origin A to request resources from origin B. Origin is a combination of port, hostname and scheme. Such as - `http://mysite.example.com:8080/`


Here's an example where this will be useful - let's say I have a website http://mysite.com. I want to get resources from your website http://yoursite.com. To prevent your security, browser will not let me access resources from yoursite.com. In order to get resources, the browser needs to know that I am not a malicious user and that you and I are allowed to talk to each other. 

In order to do this, the server of yoursite.com will have to set `Access-Control-Allow-Origin` header. This tells the browser what origins are allowed to receive requests from this server.  Here is an image from MDN that shows when CORS would be used  -


![https://mdn.mozillademos.org/files/14295/CORS_principle.png](https://mdn.mozillademos.org/files/14295/CORS_principle.png)


## When should Access-Control-Allow-Origin be used?

```
To understand which domain should serve the CORS headers, consider this. You visit malicious.com, which contains some JavaScript that tries to make a cross domain request to mybank.com. It should be up to mybank.com, not malicious.com, to decide whether or not it sets CORS headers that relax the same origin policy allowing the JavaScript from malicious.com to interact with it. If malicous.com could set its own CORS headers allowing its own JavaScript access to mybank.com, this would completely nullify the same origin policy.

```




## How to use? 
Here's an example of values you can set: 

1. `Access-Control-Allow-Origin : *` : Allows any origin
2. `Access-Control-Allow-Origin : http://mysite.com` : Allow requests only from mysite.com


Further reading - 
1. [Stackoverflow article](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work)
2. [MDN reference] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)