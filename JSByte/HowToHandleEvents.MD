# JavaScript Events Handlers – How to handle events in JavaScript

## What are events? 
Events are actions that happen when a user interacts with the page - for eg, clicking an element, typing in a field, loading a page, etc. The browser notifies the system that something has happened, and it needs to be handled. It gets handled by registering a function, called `event handler`, that listens for a particular type of event. 

## What does it mean to "handle an event"? 
To put it in simple terms, consider this - let's assume you are interested in attending Web Development meetups events in your local community. To do this, you sign-up for a local meetup "Women Who Code" and subscribe to notifications, so that anytime a new meetup is scheduled, you get alerted. That is event handling! The "event" here is a new JS meetup. When a new meetup is posted, the website meetup.com catches this change, thereby "handling" this event. It then notifies you, thereby taking an "action" on the event. 

In a browser, events are handled similarly. The browser detects a change, alerts a function (event handler) that is listening to a particular event. These functions then perform actions as desired. 

An example of `click` event handler - 
 
 TODO: give example
```
<div class="buttons">
  <button>Press 1</button>
  <button>Press 2</button>
  <button>Press 3</button>
</div>
const buttonContainer = document.querySelector('.buttons');
console.log('buttonContainer', buttonContainer);

buttonContainer.addEventListener('click', event => {
  console.log(event.target.value)
})

```

## What are the different types of events?
An event can be triggered by any behavior of a user interacting with the page. These events could be a user scrolling the page, clicking an item, loading a page. Here are the common events - 

onclick dblclick mousedown mouseup mousemove keydown keyup touchmove touchstart touchend onload onfocus onblur onerror onscroll 

## Different phases of events - capture, target, bubble
When an event moves through the DOM - whether bubbling up or trickling down, it is called event propagation. the event is said to propagate through the DOM tree. Events happen in two phases - the bubbling phase and the capturing phase. 

In capturing phase, also called trickling phase, the event "trickles down" to the element that caused the event. It starts from the root level element and handler, and then propagates down to the element. 
```trickle down, bubble up```
The capture phase is completed when the event reaches the `target`. 

In bubbling phase, the event is "bubbled" up the DOM tree - it is first captured and handled by the innermost handler - the handler  that 
is closest to the eelement on which the event occured. It then bubbles up - or propogates up to the higher levels of DOM tree, further up to its parents and then finally to its root. 



You can register event handlers for either phase - `addEventListener(type, listener, useCapture)`. If `useCapture` is set to `false`, the event handler is in bubbling phase, or else capture phase. 


Here's an infographic from quirksmode https://www.quirksmode.org/js/events_order.html that explains this very well - 
```
               / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------

               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------

```

One thing to note is that, whether you register an event handler in either of these phases, both phases ALWAYS happen. By default all events bubble.
The order of the events phases depends on the browser.                                                                                                            

## How to register for an event?
You can register an event by using `addEventListener`. For example, to register for a click event - 

```javascript
target.addEventListener('click', onClickHandler);
```
 
 To register for an event in bubbling phase - 
 ```javascript
 target.addEventListener('click', onClickHandler, false);
 ```

## When to use bubbling vs capturing phases. 

 
## Code examples and live action

https://jsfiddle.net/mpvytzwj/17/

## Why is bubbling / capturing important?

## Futher reading 
https://www.quirksmode.org/js/events_order.html

## TL;DR


## Closing

---

Important concepts - 
1. bubbling phase
2. catch phases
3. event propagation
4. event handlers
