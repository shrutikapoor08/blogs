# Code Splitting in ReactJS

**What is Code splitting and why it needed?**

Code splitting is splitting the code into smaller chunks in order to reduce the amount of JS loaded when a user loads your app. 


Code splitting helps to "lazy load" just the javascript that is currently needed by the user removing the need to import JavaScript that may never be used by the user. This can help to dramatically improve the performance of your app since you will never be loading the code that the user may never need.


**How to code split?**

1. **Dynamic import:**

using the dynamic `import()` method.

```javascript
import { add } from './math' //Before


import("./math").then( math ⇒ use math) //With code splitting
```

Dynamic import is recognized by webpack and webpack starts automatically code splitting upon coming across dynamic imports. [Check out webpack's docs for more info on how to setup webpack for code splitting](https://webpack.js.org/guides/code-splitting/)

**2. React.lazy**

React.lazy can be used to render a dynamic import as a component. It works in conjunction with dynamic import. React.lazy must be used with a function that dynamically imports a component.

```javascript
import myComponent from './myComponent' //Before


const MyComponent = React.lazy( () ⇒ import('./myComponent')); //With code splitting
```

The lazy component should then be rendered inside a suspense component which allows to show fallback content, such as loading spinners.

```
import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./myComponent'));

function SuspenseComponent() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <MyComponent />
      </Suspense>
    </div>);
}
```

To learn more, [check out React docs on code splitting](https://reactjs.org/docs/code-splitting.html)


--- 
**On a personal note**

I have been working on my design skills with Canva these past few weeks. I created the JSByte image (the header image above) and rebranded the header image of my [YouTube channel](https://www.youtube.com/channel/UCbB6Gh3UPI9lUUnPGYMz2ew). What are your thoughts on it?


--- 
Shruti Kapoor
[More tips on Twitter](https://twitter.com/shrutikapoor08)
[Hang out with me on Twitch](http://twitch.tv/shrutikapoor)