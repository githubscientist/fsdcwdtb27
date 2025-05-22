// comment lines -> to describe something
// reference
// age = 25;

// console.log(age);

/*
    This is also a comment.
    But the difference is that this is a multi-line comment.
*/

// var age = 25; // initialize a value

// age = 35; // value assignment

// console.log(age);

// let age = 25;

// age = 35;

// console.log(age);

// const age = 25; // constants -> the value once initialized cannot be changed.

// age = 35;

// console.log(age);

/*
    var -> oldest way to declare a variable
    let -> modern way to declare a variable (ES6 2015 -> ECMA Script 6)
    const -> modern way to declare a constant (ES6 2015 -> ECMA Script 6)
*/

// let age = 25;

// console.log(typeof age);

// let age = 25.321;

// console.log(typeof age);

// let age = "twenty five";

// console.log(typeof age);

// let isEligible = false;

// console.log(typeof isEligible);

/*
    Operators -> unary operator & binary operator

    1. Assignment Operator: To assign a value to a variable

    = equal to

    2. Arithmetic Operators: To perform arithmetic operations

    + addition
    - subtraction
    * multiplication
    / division (to give the quotient)
    % modulus (to give the remainder)
    ** exponentiation (to raise a number to the power of another number)
    ++ increment (to increase the value of a variable by 1) (pre-increment, post-increment)
    -- decrement (to decrease the value of a variable by 1)
*/

// console.log(5 + 6, 5 - 6, 5 * 6);

// console.log(5 / 6);

// console.log(5 % 6);

// console.log(10 ** 2);

// console.log(5 ** 0.5);

// let a = 5;
// let b = 6;

// console.log(a * b);

// let age = 25;

// age++;
// ++age;

// age = age + 1;

// age--;
// --age;

// age = age - 1;

// console.log(age++);

// console.log(age);

// let a = 5;
// console.log(a++ + ++a + a + a++ + a + ++a);

/*
    Relational Operators: To compare two values

    > greater than
    < less than
    >= greater than or equal to
    <= less than or equal to
    == equal to (comparison operator)
    != not equal to (comparison operator)
    === (type comparison)
    !== (type comparison)
*/

// console.log('5' !== 5);

/*
    Given the age of a person, check if the person is eligible to vote or not.

    Eligibility criteria:

    - The person should be 18 years or older.
*/

// let age = 17;

// console.log(age >= 18);

/*
    Logical Operators

    && logical AND
    || logical OR
    ! logical NOT
*/

/*
    Given the age of a person, whether the person has an aadhar card or voter ID, check if the person is eligible to vote or not.

    Eligibility criteria:

    - The person should be 18 years or older.
    - The person should have either an aadhar card or a voter ID.

*/

// let age = 16;
// let hasAadhar = false;
// let hasVoterID = true;

// console.log(age >= 18 && (hasAadhar === true || hasVoterID === true));

// let age = 15;

// console.log(!(age < 18));

/*
    Conditional Statements or Decision Making Statements


*/

// let age = 13;
// let hasAadhar = true;
// let hasVoterID = true;

// if (age >= 18 && (hasAadhar === true || hasVoterID === true)) {
//     // execute this block of code if the condition is true
//     console.log('Eligible to Vote!');
// } else {
//     // execute this block of code if the condition is false
//     console.log('Not Eligible to Vote!');
// }

/*

    Given a number, check whether if the number is a positive number or not.

*/

// let number = 5;

// if (number < 0) {
//     console.log('Number is negative');
// } else {
//     console.log('Number is positive');
// }

/*
    Looping Statements: To execute either a single statement or a block of code multiple times.

    1. while loop
    2. for loop
    3. do while loop
*/
// while loop

// while () {

// }

// To print hello 3 times.

// let count = 0;

// while (count < 5) {
//     console.log('hello');
//     count++;
// }

// for loop
// for (let count = 0; count < 5; count++) {
//     console.log('hello');
// }

// let count = 5;
// while (count < 5) {
//     console.log('hello');
//     count++;
// }

// let count = 5;
// do {
//     console.log('hello');
//     count++;
// } while (count < 5);

/*
    Functions: A block of statement which gets executed when we call it.

    Fundamental Purpose: Reusability
*/

// function declaration or function definition
// function isPositive(number) {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// }

// // function call
// isPositive(-6);
// isPositive(4);
// isPositive(0);



// // named functions
// function isPositive(number) {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// }

// isPositive(6);

// nameless functions
// function expressions
// const isPositive = function (number) {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// }

// isPositive(6);

// ES6
// nameless functions
// anonymous functions
// function expressions
// arrow functions
// const isPositive = (number) => {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// }

// isPositive(6);

// Function Expression
// anonymous function
// nameless function
// IIFE: Immediately Invoked Function Expression
// ((number) => {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// })(6);

// IIFE
// (function (number) {
//     if (number >= 0) {
//         console.log('Number is positive');
//     } else {
//         console.log('Number is negative');
//     }
// })(6);

// let z = 1;
// do {
//     console.log("success");
//     z++;
// } while (z < 3);

// Scopes

// let: introduced in ES6
// var: oldest way to declare a variable

// variable declaration and assignment

// var x = 10;

// x = 20;

// console.log(x);

// let x = 10;

// x = 20;

// console.log(x);

// variable redeclaration
// with let -> not possible
// let x = 10;

// let x = 'ten';

// console.log(x);

// with var -> possible
// var x = 10;

// var x = 'ten';

// console.log(x);

// var x = 10; // global scope

// {
//     x = 20;
//     // this is a block
//     console.log(x);
// }

// console.log(x);

// {
//     var x = 20; // global scope

//     // this is a block
//     console.log(x);
// }

// console.log(x);

// for (let i = 1; i <= 10; i++);
// console.log(i);

// for (var i = 1; i <= 10; i++);
// console.log(i);

// let x = 10;

// function fun() {
//     console.log(x);
// }

// fun();
// console.log(x);

// function fun() {
//     let x = 10;
//     console.log(x);
// }

// fun();
// console.log(x); // ReferenceError: x is not defined

// function fun() {
//     var x = 10;
//     console.log(x);
// }

// fun();
// console.log(x); 

/*
    local scope, global scope, block scope, function scope

    let, const: block scope (ES6)
    var: function scope

    local scope: block scope, function scope

    local scope: the variable is declared inside a block or function
    global scope: the variable is declared outside a block or function

*/

// global scope
// var x = 10;

// {
//     x = 20;
//     console.log(x);
// }

// console.log(x);

// let x = 10;

// {
//     x = 20;
//     console.log(x);
// }

// console.log(x);

// let x = 10;

// if (true) {
//     x = 20;
//     console.log(x);
// }

// console.log(x);


// let x = 10;


// function fun() {
//     x = 20;
//     console.log(x);
// }

// fun(); // 20
// console.log(x); // 20

// let x = 10;

// {
//     let x = 20; // block scope

//     console.log(x);
// }

// console.log(x);

// for (var i = 1; i <= 5; i++)
//     // 6 <= 5 False

//     console.log(i);

// function fun() {
//     var x = 10;
//     console.log(x);
// }

// fun();
// console.log(x);

// let person1 = ["abc", 25, "software developer", 200000, true, ["fishing", "cooking", "gardening"]];

// console.log(typeof person1);

// console.log(person1[0]);
// console.log(person1[5][0]);

// let person1 = {
//     name: "abc",
//     age: 25,
//     profession: "software developer",
//     salary: 200000,
//     isEligible: true,
//     hobbies: ["fishing", "cooking", "gardening"]
// };

// console.log(person1["name"]);
// console.log(person1.name);
// console.log(person1.hobbies[1])

// console.log(typeof (person1));

// let numbers = [3, 4, 5, 6, 7];

// numbers[0] = 30;

// console.log(numbers[0]);

// to insert a value into the array - at the end of the array
// numbers.push(8, 9, 10);

// to delete an element from the end of the array
// numbers.pop();

// to insert an element to the beginning of the array
// numbers.unshift(2);

// to delete an element from the beginning of the array
// numbers.shift();

// to insert an element at any place in the array
// [ 3, 4, 5, 6, 7, 8, 9]
//  [0][1][2][3][4][5][6][7]

// at 3rd index, insert 10
// numbers.splice(3, 2, 10, 11, 12);
// numbers.splice(5, 2);

// numbers.splice(3, 3, 11, 12, 13);

// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//            [0][1][2][3][4]

// to insert 12 at 2
// to delete 7 from index 5

// numbers.splice(2, 0, 12);
// numbers.splice(5, 1);

// console.log(numbers);

// console.log(numbers.slice(5,));

// let numbers = [5, 2, 4, 1, 3, 6];

// console.log(numbers.length); // returns the number of elements in the array

// let numbers = [5, 2, 4, 1, 3, 6];

// map, reduce, filter, sort

// required: [25, 4, 16, 1, 9, 36]
// without map method

// 1. create a result empty array to store the squares of the numbers
// let squares = [];

// 2. iterate the array numbers

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// while loop
// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

// do...while loop
// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// ES6: for...in loop, for...of loop
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// let numbers = [5, 2, 4, 1, 3, 6];

// for...in loop
// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// for...of loop
// for (let number of numbers) {
//     console.log(number);
// }

// let numbers = [5, 2, 4, 1, 3, 6];

// function iter(value, index, array) {
//     console.log(value, index, array, array[index]);
// }

// numbers.forEach(iter);
// numbers.forEach((value, index, array) => {
//     console.log(value, index, array, array[index]);
// });


// let numbers = [5, 2, 4, 1, 3, 6];
// EO: [25, 4, 16, 1, 9, 36]

// without map method

// // 1. create an empty array
// let squares = [];

// // 2. iterate the numbers array
// for (let number of numbers) {
//     squares.push(number ** 2);
// }

// // 3. print the squares array
// console.log(squares);

// let numbers = [5, 2, 4, 1, 3, 6];

// function squarer(value) {
//     return value ** 2;
// }

// // [25, 4, 16, 1, 9, 36]
// let squares = numbers.map(squarer);

// console.log(squares);

// let numbers = [5, 2, 4, 1, 3, 6];

// // [[5, 25], [2, 4], [4, 16], [1, 1], [3, 9], [6, 36]]


// // [5, 2, 4, 1, 3, 6]
// numbers
//     // [[5, 25], [2, 4], [4, 16], [1, 1], [3, 9], [6, 36]]
//     .map((value) => [value, value ** 2])
//     // value => [5, 25]
//     .forEach(value => {
//         console.log(value[0], value[1]);
//     })

// let numbers = [5, 2, 4, 1, 3, 6];

// // without filter method
// // EO: Find the values that are greater than or equal to 4
// let result = [];

// numbers.forEach(value => {
//     if (value >= 4) {
//         result.push(value);
//     }
// });

// console.log(result);

// let numbers = [5, 2, 4, 1, 3, 6];

// const filterer = (value) => {
//     if (value >= 4) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // [5, 4, 6]
// // with filter method
// // EO: Find the values that are greater than or equal to 4
// console.log(numbers.filter(filterer));


// let numbers = [5, 2, 4, 1, 3, 6];

// const filterer = (value) => {
//     if (value >= 4) {
//         return true;
//     }
// }

// // [5, 4, 6]
// // with filter method
// // EO: Find the values that are greater than or equal to 4
// console.log(numbers.filter(filterer));

// let numbers = [5, 2, 4, 1, 3, 6];

// const filterer = (value) => {
//     return value >= 4;
//     // if condition is true, return true
//     // if condition is false, return false
// }

// // [5, 4, 6]
// // with filter method
// // EO: Find the values that are greater than or equal to 4
// console.log(numbers.filter(filterer));

// let numbers = [5, 2, 4, 1, 3, 6];

// // [5, 4, 6]
// // with filter method
// // EO: Find the values that are greater than or equal to 4
// console.log(numbers.filter(value => value >= 4));


// sum of all the elements in the array
// sum: 21
// let numbers = [5, 2, 4, 1, 3, 6];

// let sum = 0;

// for (let number of numbers) {
//     sum = sum + number;
// }

// console.log(sum);

// let numbers = [5, 2, 4, 1, 3, 6];

// function reducer(p, c) {
//     return p + c;
// }

// console.log(numbers.reduce(reducer));

/*
    previousValue = 5, currentValue = 2

    return 7

    previousValue = 7, currentValue = 4

    return 11

    previousValue = 11, currentValue = 1

    return 12

    previousValue = 12, currentValue = 3

    return 15

    previousValue = 15, currentValue = 6

    return 21
*/

// let numbers = [5, 2, 4, 1, 3, 6];

// console.log(numbers.reduce((p, c) => p + c));

// let person = ['abc', 25, 100000];

// JavaScript Object
// let person = {
//     name: 'abc',
//     age: 25,
//     salary: 100000,
//     job: 'developer'
// }

// // add a pair to the object
// person['job'] = 'developer';

// // delete person["name"];

// // console.log(person);

// for (let key in person) {
//     console.log(key, person[key]);
// }

// console.log(Object.keys(person));

// for (let key of Object.keys(person)) {
//     console.log(key, person[key]);
// }

// console.log(Object.keys(person));

// console.log(Object.values(person));

// console.log(Object.entries(person));


// as JavaScript Object
// let person = {
//     name: 'abc',
//     age: 25,
//     salary: 100000,
//     job: 'developer'
// }

// let JSONPerson = JSON.stringify(person);

// console.log(typeof JSONPerson);

// console.log(JSON.parse(JSONPerson));

// console.log(person.name);

// console.log(JSONPerson.split(':'));

// let fruits = ['apple', 'banana', 'orange', 'pomegranate', 'watermelon'];

// // to find the fruit name with most number of characters
// console.log(fruits
//     .map((fruit) => {
//         return [fruit, fruit.length];
//     })
//     .reduce((p, c) => {
//         if (p[1] > c[1]) return p;
//         else return c;
//     })[0]);



// x = 10;
// console.log(x);

// // declaration of x
// // the variable x is hoisted to the top of the scope
// var x;

// Hoisting: It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
/*
    Hoisting will work with function declarations that uses traditional function syntax and not with function expressions or arrow functions.

    Hoisting will work with var keyword and let keyword. But with let keyword, the variable will be in a temporal dead zone until the variable is declared. So, if you try to access the variable before it is declared, it will throw a ReferenceError.
*/

// sayHello();

// const sayHello = function () {
//     console.log('Hello');
// }

// x = 10;
// console.log(x);

// let x;

// {
//     var x = 10;
// }

// console.log(x);

// let numbers = [4, 3, 2, 1, 5, 7, 6];

// sorting: arrangement of elements in either ascending order or descending order
// ascending order: from smallest value to largest value (increasing order)
// [1, 2, 3, 4, 5, 6, 7]

// descending order: from largest value to smallest value (decreasing order)
// [7, 6, 5, 4, 3, 2, 1] 

// numbers
//     .sort((a, b) => {
//         if (a < b) return -1;
//         else if (a === b) return 0;
//         else if (a > b) return 1;
//     })

// console.log(numbers);


// in descending order
// numbers
//     .sort((a, b) => {
//         if (a < b) return 1;
//         else if (a === b) return 0;
//         else if (a > b) return -1;
//     })

// console.log(numbers);


// let numbers = [4, 3, 2, 1, 5, 7, 6];

// numbers
//     .sort((a, b) => {
//         return a - b;
//     })

// console.log(numbers);

// let numbers = [4, 3, 2, 1, 5, 7, 6];

// numbers
//     .sort((a, b) => a - b);

// console.log(numbers);

// let numbers = [4, 3, 2, 1, 5, 7, 6];

// numbers
//     .sort((a, b) => b - a);

// console.log(numbers);

// let numbers = [4, 3, 2, 1, 5, 7, 6];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }

// console.log(numbers);

// ASCII: American Standard Code for Information Interchange
// a - 97
// A - 65
// z - 122
// Z - 90
// '0' - 48
// '9' - 57

// let numbers = [4, 3, 2, 1, 5, 7, 6, 11, 21, 12, 34, 35, 36, 100];

// numbers.sort();

// console.log(numbers);

// let fruits = ['orange', 'apple', 'grapes', 'banana'];

// fruits.sort((a, b) => {
//     if (a < b) return -1;
//     else if (a == b) return 0;
//     else return 1;
// });

// console.log(fruits);