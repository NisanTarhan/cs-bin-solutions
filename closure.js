// CHALLENGE 1
function createFunction() {
    return () => console.log('Hello, world!');
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	function print(){
    console.log(input)
  }
  return print;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); //1
// willCounter(); //2
// willCounter(); //3

// jasCounter(); //1
// willCounter(); //4


function addByX(x) {
	function add(input) {
    return input + x;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
  let previousResult;
  return input => {
    previousResult = previousResult || func(input);
    return previousResult;
  }
}

// /*** Uncomment these to check your work! ***/
//const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let executionCount = 0;
	return () => {
     executionCount === count-1 ? func() : executionCount++
  }
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
	 function delayFunc(...args) {
    setTimeout(() => func(args), wait)
  }
  return delayFunc;
}

const delayFunc = delay((input) => console.log(input), 3000);
//delayFunc(1,2,3)


// CHALLENGE 7
function rollCall(names) {
    let index = 0;
    return () => {
        if (index >= names.length) {
            console.log("Everyone accounted for")
        } else {
            console.log(names[index]);
            index++;
        }
    }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
//rollCaller() // => should log 'Victoria'
//rollCaller() // => should log 'Juan'
//rollCaller() // => should log 'Ruth'
//rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  const previousResult = {};
	function passedFunction(input){
    if(input === magicWord) return previousResult;
    const result = func(input);
    previousResult[input] = result;
    return result;
  }
  return passedFunction;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }



// CHALLENGE 9
function cycleIterator(array) {
  let counter = 0;
  const lastElementIndex = array.length-1;
	function getDay() {
    const currentDay = array[counter];
    if(counter === lastElementIndex) {
      counter = 0;
    } else {
      counter++;
    }
    return currentDay;
  }
  return getDay;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
  function passedInFunc(input){
    return func(arg, input);
  }
	return passedInFunc;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15



// CHALLENGE 11
function dateStamp(func) {
  const outputObj = {};
	function passedInFunc(input){
    outputObj.date = (new Date()).toString()
    outputObj.output = func(input);
    return outputObj;
  }
  return passedInFunc;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  const words = [];
	function changeWord(targetWord, currentWord){
    if(!currentWord){
     const reducer = (sentence, word) => sentence.replace(word.target, word.current);
     const newSentence = words.reduce(reducer, targetWord);
     return newSentence;
    }
    const wordPairs = {target: targetWord, current: currentWord};
    words.push(wordPairs);
  }
  return changeWord;
}


// CHALLENGE 13
function createSecretHolder(secret) {
  const secretHolder = {};
  secretHolder.secret = secret;
  secretHolder.getSecret = function(){
    console.log(this.secret);
  }
  secretHolder.setSecret = function(secret){
    this.secret = secret;
  }
  return secretHolder;
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
	let counter = 0;
  function incrementCounter(){
    counter ++;
    console.log(counter);
  }
  return incrementCounter;
}


// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
  const endOfGame = num - 1;
  let counter = 0;
	function reload(){
    if(counter > endOfGame) return 'reload to play again'
    const result =  counter === endOfGame ? "bang" : "click";
    counter ++;
    return result;
  }
  return reload;
}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
	const numbers = [];
  let avgOfNumbers;
  function average(...args) {
    const isFirstInputEmpty = numbers.length === 0 && args.length === 0;
    if(isFirstInputEmpty) return 0;
    if(args.length === 0) return avgOfNumbers;
    numbers.push(args[0]);
		const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
    avgOfNumbers = sumOfNumbers / numbers.length;
    return avgOfNumbers;
  }
  return average;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8