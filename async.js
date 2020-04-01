/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// Partnah should log out first. Beacause sayHowdy function is in "Callback Queue" requires to "Call Stack" to be empty.
// When "Call Stack" to be empty, the function which in "Callback Queue" push to "Call Stack" and run it.
// testMe(); // what order should these log out? Howdy or Partnah first? 


/* CHALLENGE 2 */

function delayedGreet() {
    setTimeout(() => console.log("welcome"), 3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    setTimeout(() => console.log("good bye"), 2000)
    console.log("hello")
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
    setInterval(() => console.log("hi again"), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
    const interval = setInterval(() => console.log("hi for now"), 1000);
    setTimeout(() => clearInterval(interval), 5000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
    const intervalId = setInterval(func, interval);
    setTimeout(() => clearInterval(intervalId), duration)
}
// Uncomment the following lines to check your work!
function theEnd() {
    console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 1000, 5000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
    let counter = 0;
    return () => {
        const interval = setInterval(() => {
            counter++;
            console.log(`After ${counter}, log ${counter}`)
            if (counter === target)
                clearInterval(interval)
        }, wait)
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3

