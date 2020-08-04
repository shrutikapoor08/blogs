It seems that `encodeURI` and `encodeURIComponent` do the same thing, at least from the name. What always confuses me is when to use either of them? 

### When do we need to use them?
The main reason to encode a URI is to **escape** the characters that form the URL. Special characters such as `&`, `space`, `!` when entered in a url need to be escaped, otherwise they may cause unpredictable situations. 

Use cases:
1. A form that accepts a user input of `url`: You can't assume that the user will always give clean input. The user could have written malicious code
    
    
    
    
    I have found that I need to clean the input accepted from a user. This input could my use case is one of the following - 
1. User has submitted values in a form that may be in a string format.
2. Need to accept urls in order to make GET / POST requests.

This one always confuses me. Am I supposed to use `encodeURI`? What is the difference between `encodeURIComponent`? When would I use either of those? Why do I even need one over the other since they seem to be doing the same thing - from the name at least.

In this article, I will aim to demystify the difference between `encodeURI` and `encodeURIComponent`. 

### What is a URI and how is it different from URL? 
URI: Uniform Resource Identifier.
URL: Uniform Resource Locator.

Anything that uniquely identifies a resource is its URI, such as id, name, ISBN number. A URL specifies a resource and how it can be accessed(protocol).  All URLs are URIs, but not all URIs are URLs.


#

Outline - 
# What is?
encodeURI and encodeURIComponent are used to encode Uniform Resource Identifier(URI) by replacing certain characters by one, two, three or four escape sequences representing the UTF-8 encoding of the character.


# Why do we need to use encodeURIcomponent()

encodeURIComponent should be used to encode a **URI** **Component** - a string that is supposed to be part of a URL

encodeURI should be used to encode a **URI**.





### What is the difference between encodeURI and encodeURIComponent?

```
If you're encoding a string to put in a URL component (a query string parameter), you should use encodeURIComponent, and if you're encoding an existing URL, use encodeURI. It's simple! 😎

```

The `encodeURIComponent` is used to encode the "compoennts" of a URI. The URI represents `https://www.lookup.com`. If you are planning to encode parts of this component, you should use `encodeURIComponent`. If you are planning to encode a whole URI, use `encodeURI`. 

Here's some examples: 
```JS
const url = 'https://www.twitter.com'

console.log(encodeURI(url))             //https://www.twitter.com
console.log(encodeURIComponent(url))    //https%3A%2F%2Fwww.twitter.com


const paramComponent = '?q=search'
console.log(encodeURIComponent(paramComponent)) //"%3Fq%3Dsearch"

let newUrl = url + encodeURIComponent(paramComponent) //https://www.twitter.com%3Fq%3Dsearch

```

### Why do we need to use encodeURIcomponent()
EncodeUrIcomponent is used to replace each instance of a character by one, two, three or four characters. 
encodeURIComponent should be used on any data that is accepted from a user. For eg: the data received from POST 

### Are all characters escaped?
No, the characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 

### Difference between encodeURIComponent and encodeURI
EncodeURIComponent should be used when a URI component needs to be encoded. A component is a part of URI such as the hostname.

Which one should you use to encode URLs?
encodeURI is used for strings that are already a url and some parts of it need to be encoded. 
encodeURICOmponent is used for strings that are supposed to be part of a url, and need to be added to a url after getting encoded. It is used to "clean up" inputs accepted from a user. If it was a form, I would use encodeURIComponent. If I accepted a URL from a user, I would use encodeURI. ENCODEURICOMPOENT is used to encode query string parameters. 

```JS
encodeURI() will not encode: ~!@#$&*()=:/,;?+'

encodeURIComponent() will not encode: ~!*()'
```



```
let urlString = 'http://mysite.com'

console.log(encodeURI(urlString))
console.log(encodeURIComponent(urlString)) //http%3A%2F%2Fmysite.com

```

# Tools to url encode 
https://www.urlencoder.org/

## conclusion
