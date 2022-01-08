const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

let timerID;

function startTime() {
    /*
    The setInterval function executes the callback function every 'x' amount of time specified
    NOTE: The function will look into the 'window' object by default so I don't need to add it
    before the setInterval function
    */
    timerID = setInterval(() => {
        count.textContent++;
        /*
        NOTE: This works because JS has type coersion, so converst the string to integer
        then adds 1, and then converts it back to string
        */
    }, 1000);
}

function stopTime() {
    clearInterval(timerID);
}
/*
* Remember that if I click twice on the 'start' button two intervals will be launched, and if
* press 'stop', only one will be stopped. I could try logging more, by using a list. I could try :)
*/

let timeoutID = setTimeout(() => {
    console.log('timeout');
}, 1000); // * It will not run because the clearTimeout runs first.

clearTimeout(timeoutID);


const count_2 = document.getElementById('count_2');
const start_animation = document.getElementById('start_animation');
const stop_animation = document.getElementById('stop_animation');

start_animation.addEventListener('click', startTimeAnimation);
stop_animation.addEventListener('click', stopTimeAnimation);

let animationFrameID;

function startTimeAnimation(timestamp) {
    console.log(timestamp);
    count_2.textContent++;
    animationFrameID = requestAnimationFrame(startTimeAnimation);
}

function stopTimeAnimation() {
    cancelAnimationFrame(animationFrameID);
}

console.log(performance.now());
console.log(Date.now()); // Returns the # of ms since 1 Jan 1970


// DATES
const date_1 = new Date(2025, 0, 10, 9, 25, 10, 30);
console.log(date_1);
date_1.setMonth(9);
console.log(date_1.getMonth());


// Recomendation is not to use it because each browser may interpret it differently
const date_2 = new Date('January 25, 2025');

