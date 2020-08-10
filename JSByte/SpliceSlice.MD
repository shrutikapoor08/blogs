# JavaScript: What is the difference between splice and slice?

I could rename this to "how to not get confused between splice and slice" because honestly, I can never remember the difference between the two. 

So here is an attempt to make myself remember the difference between these two and which to use when - 

SHRUTI: This can go to Image: 

S (p) lice => Slice + (p) = Slice + in (p) lace


--- 


Let's dive deeper into these
## .slice()
It is used to slice an array from the `start` point to `end` point, with `end` not included. 

```arr.slice([start[, end]])```

Rules
1. A new array is returned and the original array is unmodified. 
2. If `end` is omitted, end becomes the end (last element) of array. 
3. If `start` is -ve, the element are counted from the back of array.


```JS
const myArray = [1, 2, 3, 4, 5]

let wholeSlice = myArray.slice(0) // [1, 2, 3, 4, 5]
let aSlice = myArray.slice(0,1) //[0]
console.log(myArray)


```

## .splice()


## What are some use cases of using them?
- 

## Code examples

## TL;DR

****
## Promo

Interested in more tutorials and JSBytes from me? [Sign up for my newsletter.](https://tinyletter.com/shrutikapoor) or [follow me on Twitter](https://twitter.com/shrutikapoor08)