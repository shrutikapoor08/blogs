This one always confuses me. Am I supposed to use `encodeURI`? What is the difference between `encodeURIComponent`? When would I use either of those? Why do I even need one over the other since they seem to be doing the same thing - from the name atleast.

In this article, I will aim to demystify the difference between `encodeURI` and `encodeURICompoennt`. 

# what is the difference between encodeURI and encodeURIComponent?

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

## Why do we need to use encodeURIcomponent()
EncodeUrIcomponent is used to replace each instance of a character by one, two, three or four characters. 
encodeURIComponent should be used on any data that is accepted from a user. For eg: the data received from POST 
# Are all characters escaped?
No, the characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 

# Difference between encodeURIComponent and encodeURI
EncodeURIComponent should be used when a URI component needs to be encoded. A component is a part of URI such as the hostname.