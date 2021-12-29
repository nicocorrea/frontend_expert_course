const button = document.querySelector('button');

button.addEventListener('click', onClick);

document.body.addEventListener('click', onClick);

function onClick(event) {
    //event.stopPropagation(); - With this it will stop propagation it to the body
    //event.preventDefault(); - To prevent default behaviour from the browser
    console.log('Logging occurrence of the event...')
    console.log(event.target);
    console.log(this);
}

// Test it with Dev Tools in Chrome to see the results.
// and test as well with ('click', onClick, true) arguments
// which has an impact on when it fires.

button.removeEventListener('click', onClick);

window.addEventListener('keydown', event => {
    console.log(event.code);
})

const scrollable = document.getElementById('scrollable');

scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
})

scrollable.addEventListener('mouseenter', event => {
    console.log(event.pageX, event.pageY);
})

button.addEventListener('dragstart', event => {
    console.log(event);
})

scrollable.addEventListener('drop', event => {
    scrollable.prepend(button);
})


// This is needed to bypass the 'dragover' behavior and allow
// for 'drop' in the event above
scrollable.addEventListener('dragover', event => {
    event.preventDefault();
})


scrollable.addEventListener('click', event => {
    console.log(`El event target es ${event.target}`);
    if (event.target !== this){
        event.target.textContent = "Clicked!";
    }
});

