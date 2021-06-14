# What's new in React 18? 

[React 18 alpha version was just announced](<link>). The theme of React 18 is to make the UI more performant by removing janky user experiences. 

React 18 introduces no breaking changes.  You can use React 18 in your current app with minimal or no changes.

The features powered are opt-in and powered by "concurrent rendering".

1. ## Root API:
React 18 introduces Root API`ReactDOM.createRoot`.
   Before React 18, we used `ReactDOM.render` to create  <?> . Going forward with React 18, we will use ReactDOM.createRoot to <?> . React 18 concurrency will be provided out of the box with `createRoot.`
   Your current code with ReactDOM.render will still work, however, it is recommended to start transitioning to `createRoot` as `render` is being marked as `deprecated` starting React 18.
   
React 17:
```jsx

import ReactDOM from 'react-dom';
import App from 'App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);


```

React 18:
```jsx

import ReactDOM from 'react-dom';
import App from 'App';

const container = document.getElementById('app');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(<App />);

```
   
1. ## Automatic batching ( Out of the box, opt-out available ): 
   Batching is the process of grouping multiple state updates into one to prevent multiple re-renders. React batched state updates that happened in a single event callback, however state updates that happened outside of the event were not batched. 
   
   
However, with automatic batching, all updates, even within promises, setTimeouts, will be batched. See example - 

```jsx

  function handleClick() {
    console.log("=== click ===");
    setCount((c) => c + 1); // Does not re-render yet
    setFlag((f) => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)

    const callbackInHandler = () => {
      setCount((c) => c + 1);
      console.log("count inside handler", count); //output 0
    };

    callbackInHandler(); //output 0
    setTimeout(callbackInHandler, 1000); //output 0
    console.log("count outside handler ", count); //output 0
  }
  
  
```
The actual updates happen at the end, and the component renders `3`.

[See codesanbox link for full example](https://codesandbox.io/s/romantic-pare-efklq?file=/src/index.js:192-695)


**Opt-out:** You can opt-out of it using `flushSync`

## startTransition (opt-in)
 
`startTransition` can be used to mark UI updates that do not need urgent resources for updating. For eg: when typing in a typeahead field, there are two things happening - a cursor and visual feedback showing that your content is being typed, and a functionality in the background that searches for the data that is typed. 
Showing a visual feedback to the user is important and therefore urgent. Searching is not so urgent, and hence can be marked as non-urgent. This is where `startTransition` comes into play. 

By marking non-urgent UI updates as "transitions" , React will know which updates to prioritize making it easier to optimize rendering and get rid of stale rendering. Updates marked in non-urgent `startTransition` can be interrupted by urgent updates such as clicks or key presses. 

```jsx
import { startTransition } from 'react';


// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
```


### How is it different from debouncing or setTimeout?

1. startTransition executes immediately unlike setTimeout. setTimeout has a guaranteed delay, whereas startTransition's delay depends on the speed of the device, and other urgent renders.

1. startTransition updates can be interrupted unlike setTimeout and won't freeze the page. 

1. React can track the pending state for you when marked with startTransition.



## How to move to React 18?
```javascript
npm install react@alpha react-dom@alpha
```

Change React.render to React.createRoot

```jsx
const rootElement = document.getElementById("root");
ReactDOM.createRoot(<App />, rootElement).render(<App />);

```

---
[Checkout the full list of updates on React Working Group's GitHub](https://github.com/reactwg/react-18/discussions/categories/announcement)