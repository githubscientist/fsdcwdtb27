/*
    Callback Function:
    - A function that is passed as an argument to another function.
    - It is executed after the completion of that function.

    Example:
    FunctionA(funB){

    }

    FunctionB(){

    }

    FunctionA(FunctionB);

    In this example, FunctionB is a callback function and FunctionA is a higher-order function.
*/

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 6));

// // In the above line, add() is a callback function.

// let numbers = [1, 2, 3, 4];

// numbers.push(5);
// add(5, 6);

// class DOB {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }

//     get age() {
//         return new Date().getFullYear() - this.year;
//     }

//     changeYear(year) {
//         this.year = year;
//     }
// }

// let dob = new DOB(11, 6, 2005);
// dob.changeYear(2000);
// console.log(dob);
// console.log(dob.age);

// let numbers = new Array(1, 2, 3, 4);
// numbers.push(5);
// console.log(numbers);
// console.log(numbers.length);

// methods, variables -> camelCase
// classes -> First letter uppercase and the remaining letters lowercase
// constants -> All upper case
// PI

// function square(value) {
//     return value ** 2;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map((() => {
//     return square;
// })()));

/*
    asynchronous functions  
        - Non-blocking functions or Independent functions.
        - They do not wait for the completion of other functions.
        - They can run in parallel with other functions.

    synchronous functions
        - Blocking functions or Dependent functions.
        - They wait for the completion of other functions.
        - They run one after another.
*/

/*
    callback functions:
       - HOF: "Give me a function, I will call it later."

*/

// Higher Order Function: Give me a function, I will call it later.
function funA(fun) {
    console.log('Im from function A');
    console.log('I will execute some statements');
    console.log('and then when Im done or whenever I want');
    console.log('I will call the callback function');
    console.log('Im done now, so Im calling the callback next');
    fun(); // funB() is called
}

// callback function
// hoisted
function funB() {
    console.log('Im from function B');
}

funA(funB);
// funB();

/*
    funA -> Higher Order Function
    funB -> callback function

    funB is passed as an argument to funA

    funA executes all its codes and calls the callback whenever it wants.
*/

// function sayHello() {
//     console.log('hello');
// }

// sayHello();