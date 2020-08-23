# Optional chaining Javascript

## What is it?

Optional chaining `?.` in javascript is a proposed new feature introduced in ES2020. Optional chaining changes the way properties are accessed from deeply nested objects. It fixes the problem of having to do multiple null checks when accessing of long chain of object properties in javascript.

Current Status: `ECMAScript proposal at stage 4 of the process.` : https://github.com/tc39/proposal-optional-chaining
                

## Use cases

1. Accessing potentially `null` or `undefined` properties of an object. 
2. Getting results from a variable that may not be available yet
3. Getting default values
4. Accessing long chain of properties

Let's consider this object. Imagine you are expecting an API to return an object of this sort.

```javascript
obj = {
  prop1: {
    prop2: {
      someProp: "value"
    }
  }
};
```

But, you may not know if each of these fields are available ahead of time, since some of these fields may not have been sent back by the API, or come back with null. Here is an example -

```javascript
//expected
obj = {
  id: 9216,
  children: [
    { id: 123, children: null },
    { id: 124, children: [{ id: 1233, children: null }] }
  ]
};

//actual
obj = {
  id: 9216,
  children: null
};
```

You may have seen code in React like this -

```jsx
render = () => {
  const obj = {
    prop1: {
      prop2: {
        someProp: "value",
      },
    },
  };

  return (
    <div>
      {obj && obj.prop1 && obj.prop1.prop2 && obj.prop1.prop2.someProp && (
        <div>{obj.prop1.prop2.someProp}</div>
      )}
    </div>
  );
};

```

In order to get past this issue, often times in the past we have used `underscore.js`, specifically the `_.get` method.
```javascript
_.get(obj, prop1.prop2.someProp);

```
which gives `undefined` if either of those properties are not found. Optional chaining is exactly that! Now instead of using an external library, this functionality is in-built!



## How does optional chaining work?

`?.` can be used to chain properties that may be expected to be `null` or `undefined`.

```
const propNeeded = obj?.prop1?.prop2?.someProp;

```

If either of those chained properties is `null` or `undefined`, javascript will return `undefined`. What if we want to return something meaningful, such as with `_.get`? Try this - 

```javascript
// with _.get
const grandChildren = _.get(familyTree, 'us.children.theirChildren', 'we aint got no kids' );

//with optional chaining
const grandChildWithNullOperator = familyTree?.us?.children?.theirChildren

```

- Works for objects that may be null or undefined

```
let user;
console.log(user?.id) // undefined

```

- Can this be used for functions that may return null / undefined?

## How to try out

1. In your browser's console
  This is a recent addition and old browsers may need polyfills. You can try it in chrome by turning on javascript experimental features by visiting `chrome://flags/` and enabling "Experimental JavaScript".
  
2. In your node app
By using babel - 
```
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}s
```

## Resources

1.  https://dmitripavlutin.com/javascript-optional-chaining/
2. Babel's doc: https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining


## Promo