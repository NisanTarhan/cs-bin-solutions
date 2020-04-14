// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
const addTwo = (num) => {
    return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
const addS = (word) => {
    return word + s;
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
const map = (array, callback) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    return output;
};

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

// See for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, char => alphabet += char);
// console.log(alphabet);   //prints 'abcd'


// Challenge 5
const arrayForMapWith = [1, 2, 3, 4];
const mapWith = (array, callback) => {
    const output = [];
    array.forEach(item => {
        output.push(callback(item));
    })
    return output;
};

// console.log(mapWith(arrayForMapWith, addTwo))

// Challenge 6
//reducer: howToCombine
//initialValue: buildingUp
const reduce = (array, reducer, initialValue) => {
    for (let i = 0; i < array.length; i++) {
        initialValue = reducer(initialValue, array[i]);
    }
    return initialValue;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
// console.log(reduce(nums, add, 0));   //-> 8

// Challenge 7
const intersection = (...arrays) => {
    const solutionOfComparison = arrays.reduce((acc, curr) => {
        return acc.length === 0 ? [...curr] : curr.filter(item => acc.includes(item));
    }, [])
    return solutionOfComparison;
}

// MY REDUCE FUNCTION
// const intersection = (...arrays) => {
//  const reducer = (acc, curr) => {
// 		return acc.length === 0 ? [...curr] : curr.filter(item => acc.includes(item));
//  }
//  const solutionOfComparison = reduce(arrays, reducer, []);
//  return solutionOfComparison; 
// }

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
const union = (...arrays) => {
    const solutionOfUnionWithoutDuplicate = arrays.reduce((acc, curr) => {
        return acc.length === 0 ? [...curr] : [...acc, ...curr.filter(item => !acc.includes(item))];
    }, [])
    return solutionOfUnionWithoutDuplicate;
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
    const matchedElement = array1.reduce((acc, curr, i) => {
        if (callback(curr) === array2[i]) {
            acc[curr] = array2[i];
        }
        return acc
    }, {})

    return matchedElement;
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
    const result = arrCallbacks.reduce((acc, curr, i) => {
        let objectKey = arrVals[i]
        if (objectKey) {
            acc[arrVals[i]] = arrCallbacks.map(callback => callback(arrVals[i]))
        }
        return acc;
    }, {});

    return result;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
const commutative = (func1, func2, value) => {
    const functionArray = [func1, func2];
    const resultOfFunctions = functionArray.reduce((acc, curr) => {
        return curr(acc)
    }, value)

    const resultOfReversedFunctions = functionArray.reverse().reduce((acc, curr) => {
        return curr(acc)
    }, value)

    return resultOfFunctions === resultOfReversedFunctions
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 12
const objFilter = (obj, callback) => {
    const keys = Object.keys(obj)
    const values = Object.values(obj);
    const filteredObj = keys.reduce((acc, curr, i) => {
        if (callback(curr) === values[i]) {
            acc[curr] = values[i];
        }
        return acc;
    }, {})

    return filteredObj;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 13
const rating = (arrOfFuncs, value) => {
    let countOfTrue = 0;
    arrOfFuncs.forEach(func => {
        if (func(value))
            countOfTrue++;
    })
    const percantage = (countOfTrue / arrOfFuncs.length) * 100
    return percantage;
};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 14
const pipe = (arrOfFuncs, value) => {
    return arrOfFuncs.reduce((acc, curr) => {
        return curr(acc);
    }, value)
};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
    const funcNamePairWithResult = Object.entries(objOfFuncs).map(funcKeyPairs => {
        let obj = {};
        obj["key"] = funcKeyPairs[0]
        obj["value"] = funcKeyPairs[1](subject)
        return obj;
    })

    const maxValueOfFunctions = Math.max(
        funcNamePairWithResult[0].value,
        funcNamePairWithResult[1].value,
        funcNamePairWithResult[2].value
    )

    const functionNameOfResult = funcNamePairWithResult.find(obj => obj.value === maxValueOfFunctions).key
    return functionNameOfResult;
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'








// ###########
// # Closure #
// ###########


// Challenge 1
const createFunction = () => {

};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();


// Challenge 2
const createFunctionPrinter = (input) => {

};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();


// Challenge 3
const outer = () => {
    let counter = 0; // this variable is outside incrementCounter's scope
    const incrementCounter = () => {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


// Challenge 4
const addByX = (x) => {

};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1


// now call addByTwo with an input of 2


// Challenge 5
const once = (func) => {

};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Challenge 6
const after = (count, func) => {

};

const called = () => console.log('hello');
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


// Challenge 7
const delay = (func, wait) => {

};


// Challenge 8
const russianRoulette = (num) => {

};

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'


// Challenge 9
const average = () => {

};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8


// Challenge 10
const makeFuncTester = (arrOfTests) => {

};

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true


// Challenge 11
const makeHistory = (limit) => {

};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'


// Challenge 12
const blackjack = (array) => {

};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!






// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {

}

// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]


// Challenge 2
const allClear = (funcArr, value) => {

}

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true 
// console.log(allClear(numFnArr, -25)) // should log false


// Challenge 3
const numSelectString = (numArr) => {

}

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {

}

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]



// Challenge 5
const curriedAddThreeNums = (num1) => {

}

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3


// Challenge 6
// const curriedAddTwoNumsToFive = ?

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
