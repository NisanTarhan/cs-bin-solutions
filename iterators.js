// CHALLENGE 1 - A
function sumFunc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

// CHALLENGE 1 - B
function returnIterator(arr) {
    let i = 0;
    const iteratorFunction = () => {
        let element = arr[i];
        i++;
        return element;
    }
    return iteratorFunction;
}

const iterator = returnIterator(array);
console.log(iterator());
console.log(iterator());
console.log(iterator());
console.log(iterator());

// CHALLENGE 2
function nextIterator(arr) {
    let i = 0
    const inner = {
        next: function () {
            const element = array[i]
            i++
            return element
        }
    }
    return inner;
}

// Uncomment the lines below to test your work
const array2 = [1, 2, 3];
const iteratorWithNext = nextIterator(array2);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3
function sumArray(arr) {
    let sum = 0;
    const iterator = nextIterator(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += iterator.next();
    }
    return sum;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3, 4];
console.log(sumArray(array3)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
    let setIterator = set.values();
    const iterator = {
        next: () => {
            let nextElement = setIterator.next();
            return nextElement.value;
        }
    }
    return iterator;
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'