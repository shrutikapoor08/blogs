*I will be sharing bite sized learnings about JavaScript regularly in this series. Follow along with me as I re-learn JavaScript. This series will cover JS fundamentals, browsers, DOM, system design, domain architecture and frameworks.*




``` 
console.log( null === undefined )
```


## Rule ##
An important rule of checking type with `null` or `undefined` is that in the equality equation above, the result will be true **only** if both sides are either `null` or `undefined`. 

This is helpful in checking against falsy values such as following -

``` 
let c;
console.log(c == null);
// true

console.log(c == undefined);
// true

console.log(0 == null);
// false

console.log("" == null);
// false

```

One caveat: `==` should be rarely used. This is a good use case for when `==` can be used. If you are unsure whether to use `==` or `===`, use `===`. 
___

### Interested in more JSBytes? [ Sign up for the newsletter] (https://tinyletter.com/shrutikapoor )