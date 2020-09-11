# JavaScript Events Handlers – How to handle events in JavaScript

## What are events? 
Events are actions that happen when a user interacts with the page - for eg, clicking an element, typing in a field, loading a page, etc. The browser notifies the system that something has happened, and it needs to be handled. It gets handled by registering a function, called `event handler`, that listens for a particular type of event. 

## What does it mean to "handle an event"? 
To put it in simple terms, consider this - let's assume you are interested in attending Web Development meetups events in your local community. To do this, you sign-up for a local meetup "Women Who Code" and subscribe to notifications, so that anytime a new meetup is scheduled, you get alerted. That is event handling! The "event" here is a new JS meetup. When a new meetup is posted, the website meetup.com catches this change, thereby "handling" this event. It then notifies you, thereby taking an "action" on the event. 

In a browser, events are handled similarly. The browser detects a change, alerts a function (event handler) that is listening to a particular event. These functions then perform actions as desired. 

An example of `click` event handler - 
 
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

 
 To register for an event in bubbling phase - 
```
 target.addEventListener(type, listener [, useCapture]);
```

 ```javascript
 target.addEventListener('click', onClickHandler, false);
 ```


## How to listen for an event?
There are two ways to listen for an event - 
1.  `addEventListener` 
2.  inline events, such as `onclick`

Here's how these can be used - 
```

document.getElementByTag('a').addEventListener('click', onClickHandler);

<a href="#" onclick="onClickHandler">Click me</a>

```

```The significant drawback with inline events is that unlike event listeners described above, you may only have one inline event assigned. Inline events are stored as an attribute/property of the element[doc], meaning that it can be overwritten.var element = document.getElementById('testing');
element.onclick = function () { alert('did stuff #1'); };
element.onclick = function () { alert('did stuff #2'); };

TODO: show multiple event handlers attached

var h = document.getElementById('a');
h.onclick = doThing_1;
h.onclick = doThing_2;

h.addEventListener('click', doThing_3);
h.addEventListener('click', doThing_4);

element.addEventListener()
Allows you to register unlimited events handlers and remove them with element.removeEventListener().
Has useCapture parameter, which indicates whether you'd like to handle event in its capturing or bubbling phase. See: Unable to understand useCapture attribute in addEventListener.


```
 
## Code examples and live action

You can try out these events in JSFiddle to play around with these events. 

```html
<div id="wrapper-div">
  <div id="child-one">
    <h1>
      Child One
    </h1>
  </div>
  <div id="child-two" onclick="childTwoHandler">
    <h1>
      Child Two
    </h1>
  </div>

</div>

```

```javascript
const wrapperDiv = document.getElementById("wrapper-div");
const childOne = document.getElementById("child-one");
const childTwo = document.getElementById("child-two");

const childOneHandler = () => {
console.log('Captured on child one')
}

const childTwoHandler = () => {
console.log('Captured on child two')
}

const wrapperDivHandler = () => {
console.log('Captured on wrapper div')
}

const childOneHandlerCatch = () => {
console.log('Captured on child one in capture phase')
}

const childTwoHandlerCatch = () => {
console.log('Captured on child two in capture phase')
}

const wrapperDivHandlerCatch = () => {
console.log('Captured on wrapper div in capture phase')
}


childOne.addEventListener("click", childOneHandler); 
childTwo.addEventListener("click", childTwoHandler); 
wrapperDiv.addEventListener("click", wrapperDivHandler); 

childOne.addEventListener("click", childOneHandlerCatch, true); 
childTwo.addEventListener("click", childTwoHandlerCatch, true); 
wrapperDiv.addEventListener("click", wrapperDivHandlerCatch, true); 
```


## Futher reading 
https://www.quirksmode.org/js/events_order.html
https://jsfiddle.net/r2bc6axg/
https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
https://www.w3.org/wiki/HTML/Attributes/_Global#Event-handler_Attributes

## TL;DR
Event phases are - capture (DOM -> target), bubble (target-> DOM) and target. 
Events can be listened by using `addEventListener` or inline methods such as `onclick`. 

```
    addEventListener can add multiple events, whereas with onclick this cannot be done.
    onclick can be added as an HTML attribute, whereas an addEventListener can only be added within <script> elements.
    addEventListener can take a third argument which can stop the event propagation.

```


To keep up with more short tutorials like this, [Sign up for my newsletter.](https://tinyletter.com/shrutikapoor) or [follow me on Twitter](https://twitter.com/shrutikapoor08)