Optional chaining Javascript 

# What is it? 
Optional chaining in javascript is  anew feature intorduced in 22020. It fixes the problem of having to do multiple && in javascript to find out if a variable and / or its property exist or not. 

Here is whereit comes in handy - 

1. Finidng properties of an element
let's consider this object. Imagine you are expecting an aPI to return an object of this sort. 
```JS
obj = |{
    prop1 : {
        prop2: {
            someProp: true
        }
    }
}
```

But, you may not know if each of these fields are available, to avoid null pointer exception, ir hav d ata yet. So you will ask for this data in React like this - 

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


- how does it work



- how to enable?

