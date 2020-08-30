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
An event can be triggered by any behavior of a user interacting with the page. Here are the common events - 

onclick dblclick mousedown mouseup mousemove keydown keyup touchmove touchstart touchend onload onfocus onblur onerror onscroll 

## Different phases of events

## Propagating events

## How to register for an event?
 
## Code examples and live action

## TL;DR

## Closing

---

Important concepts - 
1. bubbling phase
2. catch phases
3. event propagation
4. event handlers
