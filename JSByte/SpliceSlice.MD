# JavaScript: What is the difference between splice and slice?

I could rename this to "how to not get confused between splice and slice" because honestly, I can never remember the difference between the two. 

So here is an attempt to make myself remember the difference between these two and which to use when - 

SHRUTI: This can go to Image: 

S (p) lice => Slice + (p) = Slice + in (p) lace


--- 

Let's dive deeper into these
## .slice()
It is used to slice an array from the `start` point to `end` point, with `end` not included. 

```JS 
arr.slice(start, [end])

```

Rules
1. A new array is returned and the original array is unmodified. 
2. If `end` is omitted, end becomes the end (last element) of array. 
3. If `start` is -ve, the element are counted from the back of array.


```JS
const myArray = [1, 2, 3, 4, 5]

let wholeSlice = myArray.slice(0) // [1, 2, 3, 4, 5]
let aSlice = myArray.slice(0,1) // [0]
console.log(myArray) //[1, 2, 3, 4, 5]

```

## .splice()
Splice does operations **in place**, which means it modifies exisiting array. In addition to removing elements, splice is also used to add elements. 

```JS
arr.splice(start, [deleteCount, itemToInsert1, itemToInsert2, ...])
```

Rules
1. Operation is in place. 
2. An array with the operaton performed is returned back. 
3. If `start` is -ve, the elements are counted from the back of the array.
4. If `deleteCount`is omitted,the elements until the end of array are removed.
5. If items to insert such as `itemToInsert1` are omitted, elements are only removed.

## When to use which?
- 

## Code examples

## TL;DR

****
## Promo

Interested in more tutorials and JSBytes from me? [Sign up for my newsletter.](https://tinyletter.com/shrutikapoor) or [follow me on Twitter](https://twitter.com/shrutikapoor08)