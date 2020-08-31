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
function createFlow(array) {
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
const returnNextElement = createFlow([4, 5, 6])
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

console.log(element1);
console.log(element2);
