# JavaScript URL Encode Example – How to Use encodeURIcomponent() and encodeURI()

You might think that encodeURI and encodeURIComponent do the same thing, at least from their names. And you might be confused which one to use and when.
In this article, I will demystify the difference between `encodeURI` and `encodeURIComponent`. 


### What is a URI and how is it different from URL? 
These abbreviations stand for:
**URI**: Uniform Resource Identifier
**URL**: Uniform Resource Locator

Anything that uniquely identifies a resource is its URI, such as id, name, ISBN number. A URL specifies a resource and how it can be accessed(protocol).  All URLs are URIs, but not all URIs are URLs.


### Why do we need to encode?
URLs can only have certain characters from the standard 128 character ASCII set. Reserved characters that do not belong to this set must be encoded. Hence, we need to encode these characters when passing into a URL. Special characters such as `&`, `space`, `!` when entered in a url need to be escaped, otherwise they may cause unpredictable situations. 

Use cases:
1. User has submitted values in a form that may be in a string format and need to be passed in, such as url fields. 
2. Need to accept query string parameters in order to make GET requests.


### What is the difference between encodeURI and encodeURIComponent?

`encodeURI` and `encodeURIComponent` are used to encode Uniform Resource Identifier(URI) by replacing certain characters by one, two, three or four escape sequences representing the UTF-8 encoding of the character.

`encodeURIComponent` should be used to encode a **URI** **Component** - a string that is supposed to be part of a URL

`encodeURI` should be used to encode a **URI** or an existing URL. 

[Here's a handy table of the difference in encoding of characters](https://stackoverflow.com/a/23842171)



### Which characters are encoded?

`encodeURI()` will not encode: `~!@#$&*()=:/,;?+'`

`encodeURIComponent()` will not encode: `~!*()'`

The characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 


### Examples

```JS
const url = 'https://www.twitter.com'

console.log(encodeURI(url))             //https://www.twitter.com
console.log(encodeURIComponent(url))    //https%3A%2F%2Fwww.twitter.com


const paramComponent = '?q=search'
console.log(encodeURIComponent(paramComponent)) //"%3Fq%3Dsearch"
console.log(url + encodeURIComponent(paramComponent)) //https://www.twitter.com%3Fq%3Dsearch

```

### When to encode 
1. When accepting an input thay may have spaces.
    ```JS 
    encodeURI("http://www.mysite.com/a file with spaces.html") //http://www.mysite.com/a%20file%20with%20spaces.html
    ```
2. When building a url from query string parameters.
   ```JS
    let param = encodeURIComponent('mango')
    let url = "http://mysite.com/?search=" + param + "&length=99"; //http://mysite.com/?search=mango&length=99

   ```
   
3. When accepting query parameters that may have reserved characters.
 ```JS
    let params = encodeURIComponent('mango & pineapple')
    let url = "http://mysite.com/?search=" + params; //http://mysite.com/?search=mango%20%26%20pineapple


   ```

### Summary
If you have a complete URL, use encodeURI. But if you have a part of a URL, use encodeURIComponent.


Interested in more tutorials and JSBytes from me? [Sign up for my newsletter.](https://tinyletter.com/shrutikapoor) or [follow me on Twitter](https://twitter.com/shrutikapoor08)
