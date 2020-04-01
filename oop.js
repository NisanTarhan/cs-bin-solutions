/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
    const personStore = Object.create(null);
    personStore.name = name;
    personStore.age = age;
    return personStore;
}

const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24


/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
    greet: function () {
        console.log("hello")
    },
    introduce: function () {
        console.log(`Hi, my name is ${this.name}`);
    }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    this.greet = () => console.log("Hello");
    this.introduce = () => console.log(`Hi, my name is ${this.name}`)
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
    const person = new PersonConstructor;
    person.name = name;
    person.age = age;
    return person;
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello");
    }
}


// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
    constructor(name, age) {
        super(name, age)
    }
    introduce() {
        console.log(`Hello World, my name is ${this.name}`);
    }
}


// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'


/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

// const userFunctionStore = {
//   sayType: function() {
//     console.log("I am a " + this.type);
//   }
// }

// function userFactory(name, score) {
//   let user = Object.create(userFunctionStore);
//   user.type = "User";
//   user.name = name;
//   user.score = score;
//   return user;
// }

// const adminFunctionStore = Object.create(userFunctionStore);

// // function adminFactory(name, score) {
// //   let admin = Object.create(adminFunctionStore);
// //   admin.type = "Admin";
// //   admin.name = name;
// //   admin.score = score;
// //   return admin;
// // }

//____ Refactoring ---> adminFactory ____s//
// function adminFactory(name, score) {
//   let admin = new userFactory(name, score)
//   admin.type = "Admin";
//   return admin;
// }


/*********************___REFACTORING: EXTENSION: SUBCLASSING___*************************/

class UserFactory {
    constructor(name, score, type = "User") {
        this.name = name;
        this.score = score;
        this.type = type;
    }

    sayType() {
        console.log("I am a " + this.type);
    }
}

class AdminFactory extends UserFactory {
    constructor(name, score, type) {
        super(name, score, type);
        this.type = "Admin"
    }
    sharePublicMessage() { console.log("Welcome users!") };
}

const adminFromFactory = new AdminFactory("Eva", 5);

/***************************************************************/

/* Put code here for a method called sharePublicMessage*/

// const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
    constructor() {
        this.legs = 4;
    }
    speak() {
        console.log('Woof!');
    }
}

const robotMixin = {
    skin: 'metal',
    speak: function () { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();
robotFido = Object.assign(robotFido, robotMixin)

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"
