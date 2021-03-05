*I will be sharing bite sized learnings about JavaScript regularly in this series. Follow along with me as I re-learn JavaScript. This series will cover JS fundamentals, browsers, DOM, system design, domain architecture and frameworks.*

---
 
### Event propagation
**Specificity**: 
If a node has children and has an event handler attached to it, it is able to listen to not only its own events, but also events on its children. 
However, if two DOM elements have a handler, the more specific one - the closest to the target, fires off first. 

**Targeting multiple elements**
A node can have only one `onclick` attribute, so you can register only one handler this way. 

A node can have multiple `addEventListener`, so you can attach multiple click handlers using `addEventListener`. It also gives access to `removeEventListener` to unsubscribe from the event.

When you have an event handler that needs to be attached to multiple elements, attach the handler to the parent element instead of targeting each element individually.

```html
<div class="buttons">
  <button>Press 1</button>
  <button>Press 2</button>
  <button>Press 3</button>
</div>
```
```javascript

const buttonContainer = document.querySelector('.buttons');
console.log('buttonContainer', buttonContainer);

buttonContainer.addEventListener('click', event => {
  console.log(event.target.value)
})
```

### Common events

`onclick`
`dblclick`
`mousedown`
`mouseup`
`mousemove`
`keydown`
`keyup`
`touchmove`
`touchstart`
`touchend`
`onload`
`onfocus`
`onblur`
`onerror`
`onscroll`




___

### Interested in more JSBytes? [ Sign up for the newsletter] (https://tinyletter.com/shrutikapoor )
        
