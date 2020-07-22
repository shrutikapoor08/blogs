Outline - 
# What is?
encodeURI and encodeURIComponent are used to encode Uniform Resource Identifier(URI) by replacing certain characters by one, two, three or four escape sequences representing the UTF-8 encoding of the character.


# Why do we need to use encodeURIcomponent()

encodeURIComponent should be used to encode a **URI** **Component** - a string that is supposed to be part of a URL

encodeURI should be used to encode a **URI**.




# The syntax

# Are all characters escaped?
No, the characters `A-Z a-z 0-9 - _ . ! ~ * ' ( )` are not escaped. 

# Difference between encodeURIComponent and encodeURI()

```
let urlString = 'http://mysite.com'

console.log(encodeURI(urlString))
console.log(encodeURIComponent(urlString)) //http%3A%2F%2Fmysite.com

```

# Tools to url encode 
https://www.urlencoder.org/