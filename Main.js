/*
    ES5 Vs ES6

    ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, which was released in 2009. It introduced several new features and improvements over its predecessor, ES3.

    ES6 (ECMAScript 2015) is the sixth edition of the ECMAScript standard, which was released in 2015. It introduced many new features and improvements over ES5, making it a significant update to the language.

    Features of ES6:

    1. let and const
    2. Arrow Functions
    3. Template Literals
    4. Destructuring Assignment
    5. Default Parameters
    6. Classes
    7. Promises
    8. Spread Operator and Rest Operator

    var keyword:
    - used in the older versions of JavaScript (ES5 and earlier) to declare variables.
    - has function scope.
    - can be re-declared and updated within the same scope.

    let keyword:
    - introduced in ES6 to declare block-scoped variables.
    - has block scope, meaning it is only accessible within the block it is defined in (e.g., inside a loop or an if statement).
    - cannot be re-declared within the same block scope, but can be updated.

    const keyword:
    - also introduced in ES6 to declare block-scoped variables.
    - has block scope like let.
    - cannot be re-declared or updated within the same block scope.
    - constants must be initialized at the time of declaration and cannot be reassigned.

    JavaScript is a dynamically typed language, meaning that variables can hold values of any type and can change types at runtime.

    scope: visibility of variables
    how much the variable is visible to the code

    global scope: visible to all code (including functions and blocks)
    function scope: visible only within the function where it is declared
    block scope: visible only within the block (e.g., inside a loop or an if statement) where it is declared
*/

// this is a block: the entire code
// let x = 10; // global scope

// const x = 10; // global scope

// {
//     const x = 20;
//     console.log('inside block:', x);
// }

// console.log('outside block:', x);

// let x = 10; // global scope

// function fun() {
//     var x = 20; // function scope
//     console.log('inside function:', x); // function scope
// }

// fun(); // calling the function

// console.log('outside function:', x);

// let i = 0;
// for (console.log('printed first time alone'); i < 3; console.log('printed from second time')) {
//     console.log('inside loop:', i);
//     i++;
// }

/*
    Arrow Functions:

    - Arrow functions are a more concise syntax for writing function expressions in JavaScript.
    - They are introduced in ES6 and provide a shorter syntax for writing functions.
    - Arrow functions can be used to write one-liner functions.
*/

// const add = (a, b) => console.log(a + b);

// add(5, 6);

/*
    Template Literals:

    - Template literals are a new way to create strings in JavaScript.
    - They allow for multi-line strings and string interpolation.
    - They are enclosed in backticks (``) instead of single or double quotes.
    - String interpolation allows you to embed expressions inside a string using the ${expression} syntax.
*/

// let a = 50;
// let b = 63;
// // let sentence = 'The sum of ' + a + ' and ' + b + ' is: ' + (a + b);
// let sentence = `The sum of ${a} and ${b} is: ${a + b}`;

// console.log(sentence);

// (() => {

//     let x = 10;

//     (() => {

//         setTimeout(() => {
//             console.log(x)
//         }, 2000);

//     })();

// })();

/*
    In the above function, the variable `x` is declared in the outer function scope and is accessible inside the inner function. This is due to JavaScript's closure feature, which allows inner functions to access variables from their outer function scope even after the outer function has finished executing.
*/

// spread and rest operator
// symbol: ...
// let arr1 = [1, 2, 3];

// console.log(...arr1); // spread operator: spreads the elements of the array
// console.log(1, 2, 3);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr2, ...arr1];

// console.log(arr3);

// Both arrays are pointed by the same reference in memory. This is called as "shallow copy".

/*
    arr1 = arr2 = [11, 22, 3]
*/
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2[0] = 11;
// arr1[1] = 22;

// console.log(arr1);
// console.log(arr2);

/*
    arr1 = [1, 22, 3]
    arr2 = [11, 2, 3]
*/
// let arr1 = [1, 2, 3];
// let arr2 = arr1.slice(0,);

// arr2[0] = 11;
// arr1[1] = 22;

// console.log(arr1);
// console.log(arr2);

// function add(a = 0, b = 0, ...extras) {
//     console.log(a + b + extras.reduce((p, c) => p + c));
// }

// add();
// add(5);
// add(5, 6);
// add(5, 6, 7, 8, 9, 10);

// let obj1 = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// // console.log({ ...obj1 });
// // console.log({ name: 'John', age: 30, city: 'New York' });

// let obj2 = {
//     country: 'USA',
//     profession: 'Engineer'
// }

// let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// let obj1 = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// let obj2 = { ...obj1 };

// obj2.city = 'Los Angeles';

// console.log(obj1);
// console.log(obj2);

/*
    destructuring assignment: destructuring is a syntax that allows you to extract values from arrays or properties from objects into distinct variables.
*/

// let arr1 = ['John', 30, 'New York'];

// let [name, age, city] = arr1;

// console.log(name, age, city);

// let arr1 = { age: 30, city: 'New York', name: 'John' };

// let { city, name, age } = arr1;

// console.log(name, age, city);

// let arr1 = { age: 30, city: 'New York', name: 'John' };

// let { city: location, name, age } = arr1;

// console.log(name, age, location);

// let arr1 = { age: 30, city: 'New York', name: 'John' };

// let { city, name, age } = arr1;

// console.log(name, age, city);

// let arr1 = ['John', 30, 'New York'];

// let [name, ...rest] = arr1;

// console.log(rest);

// let arr1 = { age: 30, city: 'New York', name: 'John' };

// let { name, ...rest } = arr1;

// console.log(name);
// console.log(rest);

// x = 10;
// console.log(x);

// let x;