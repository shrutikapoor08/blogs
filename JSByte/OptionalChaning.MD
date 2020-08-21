# Optional chaining Javascript 

## What is it? 

Optional chaining `?.` in javascript is a new feature introduced in ES2020. It fixes the problem of having to do multiple null checks when accessing of long chain of object properties in javascript.


## Use case

1. Finidng properties of an element
Let's consider this object. Imagine you are expecting an API to return an object of this sort. 
```JS
obj = {
    prop1 : {
        prop2: {
            someProp: true
        }
    }
}
```

But, you may not know if each of these fields are available ahead of time, to avoid null pointer exception, if have data yet. You may have seen code in React like this - 

```
obj && obj.prop1 && obj.prop1.prop2 && obj.prop1.prop2.someProp && 
<div>
// Some code that depends on someProp

</div>

``

In order to get past this issue, often times in the past we have used `underscore.js`, specifically the `_.get` method. 

``` _.get(obj, prop1.prop2.someProp)
```
which gives undefined if either of those properties are not found. 
Optional chaining is exactly that! Now instead of using an external library, this functionality is in-built. 

## How does it work

`?.` can be used to chain properties that may be expected to be `null` or `undefined`. 
```
const propNeeded = obj?.prop1?.prop2?.someProp;

```
If either of those chained properties is `null` or `undefined`, javascript will return `undefined`. 

What if we want to return something meaningful, such as with `_.get`?

```
const grandChild = _.get(familyTree, 'shruti.children.theirChildren', 'she aint got no kids' );

const grandChildWithNullOperator = familyTree?.shruti?.children?.theirChildren

```

- Works for objects that may be null
```
const user;
console.log(user?.id?) //undefined

```

## Advanced use cases.
- Can this be used for functions that may return null / undefined? 
- 



## How to get 

- in your console
 This is a recent addition and old browsers may need polyfills. 

 - in your node app