const button = document.getElementById("boton_1");

button.addEventListener("click", onClick);
document.body.addEventListener("click", onClick);

/*
EVENT PROPAGATION - The process by which an event travels through the DOM to call event
listeners on nested elements. Event propagation consists of 3 phases:
1. Capturing - The event travels down from the root of the document to the event target.
2. Target - The event fires on the event target.
3. Bubbling - The event travels up from the event target to the root of the document.
*/
function onClick(event) {
  //event.stopPropagation(); - With this it will stop propagation it to the body
  //event.preventDefault(); - To prevent default behaviour from the browser
  console.log("Logging occurrence of the event...");
  console.log(event.target);
  console.log(this);
}

button.removeEventListener("click", onClick);

/*
'addEventListener' can be called with an options object as the third parameter
instead of the useCapture boolean. This object can contain the following possible values:
- capture: The same as the boolean argument option; TRUE for capturing, FALSE for bubbling
- once: if TRUE, automatically removes the event listener after the event fires once
- passive: if TRUE, indicates to the browser that 'event.preventDefault()' will not be called.
This is useful for the browser to optimize performance, particularly with mobile scrolling
events such as TOUCHSTART and TOUCHMOVE to indicate to the browser that scrolling will not be
cancelled.
- signal: An AbortSignal, usually coming from an AbortController. If the signal's abort() method
is called, the event listener will be removed.
*/

const button2 = document.getElementById("boton_2");

// I NEED TO CONTINUE TESTING THIS BECAUSE ALTHOUGH ONCE IS TRUE, IT CONTINUES TO FIRE
button2.addEventListener("click", onClick, {
  capture: false,
  once: true,
  passive: true,
});

/*
Test it with Dev Tools in Chrome to see the results.
And test as well with ('click', onClick, true) arguments
which has an impact on when it fires.
*/

window.addEventListener("keydown", (event) => {
  console.log(event.code);
});

const scrollable = document.getElementById("scrollable");

scrollable.addEventListener("scroll", (event) => {
  console.log(event.target.scrollTop);
});

scrollable.addEventListener("mouseenter", (event) => {
  console.log(event.pageX, event.pageY);
});

button.addEventListener("dragstart", (event) => {
  console.log(event);
});

scrollable.addEventListener("drop", (event) => {
  scrollable.prepend(button);
});

/*
This is needed to bypass the 'dragover' behavior and allow
for 'drop' in the event above
*/
scrollable.addEventListener("dragover", (event) => {
  event.preventDefault();
});

scrollable.addEventListener("click", (event) => {
  console.log(`El event target es ${event.target}`);
  if (event.target !== this) {
    event.target.textContent = "Clicked!";
  }
});

/*
EVENT DELEGATION - The process of using a single event listener on a parent element
to manually delegate events to children, rather than using event listener on each child.

Event delegation takes advantage of event propagation. For example, after clicking on a
button, that event will bubble up to the parent container.

In the event a container has many children that all have similar event listeners,
event delegation can make substantial performance improvements by lowering the total
number of active event listeners. The 'event.target' property can then be used to
determine which child was the source of the event.
*/
