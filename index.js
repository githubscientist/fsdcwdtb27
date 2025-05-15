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
(function (number) {
    if (number >= 0) {
        console.log('Number is positive');
    } else {
        console.log('Number is negative');
    }
})(6);