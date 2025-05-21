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

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//            [0][1][2][3][4]

// to insert 12 at 2
// to delete 7 from index 5

// numbers.splice(2, 0, 12);
// numbers.splice(5, 1);

// console.log(numbers);

console.log(numbers.slice(5,));