function createFunction() {
    return () => console.log('Hello, world!');
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
    let backpackForPrinter = input;
    function print() {
        console.log(backpackForPrinter);
    }
    return print;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
// printSample();
const printHello = createFunctionPrinter('hello');
// printHello();



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



function addByX(backpack) {
    function add(num) {
        return num + backpack;
    }
    return add;
}

const addByTwo = addByX(2);
const addByThree = addByX(3);
// now call addByTwo with an input of 1
// console.log(addByTwo(1)); 

// now call addByTwo with an input of 2
// console.log(addByTwo(2)); 

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(cb) {
    let cashedResult;
    let hasBeenCalled = false;

    function oncifiedCb(...args) {
        if (!hasBeenCalled) {
            cashedResult = cb(...args);;
            hasBeenCalled = true;
        }
        return cashedResult
    }
    return oncifiedCb;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {
    let called = 0;
    return () => {
        called >= count - 1 ? console.log("hello") : called++;
    }
}

const called = function () { console.log('hello') };
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait, ...args) {
    setTimeout(() => func(...args), wait)
}


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

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // -> Should log 'Victoria'
// rollCaller() // -> Should log 'Juan'
// rollCaller() // -> Should log 'Ruth'
// rollCaller() // -> Should log 'Everyone accounted for'

