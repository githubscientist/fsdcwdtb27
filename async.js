/*
    async & await

    - These are used to handle asynchronous operations in JavaScript.
    - They allow you to write asynchronous code in a more synchronous manner, making it easier to read and maintain.
*/

/*
    Error: Errors will stop the execution of the code, meaning that if an error occurs, the code will not continue to run.

    This must be handled properly to ensure that the application does not crash or behave unexpectedly.

    This is called error handling.

    This is achieved using try-catch blocks.
*/

// try {
//     console.log(numbers);
// } catch (error) {
//     console.log('numbers is not defined', error);
// }
// console.log('im executed after printing numbers');


/*
    Call Stack
    Web APIs
    Callback Queue
    Event Loop

    Stack:

    - A data structure.
    - It follows the Last In First Out (LIFO) principle.
    - It can also be said as First In Last Out (FILO).

    Queue:

    - A data structure.
    - It follows the First In First Out (FIFO) principle.

    Call Stack:

    - It is a stack that keeps track of the execution of functions in JavaScript.
    - It will store the order of the function calls in the order they were called. i.e., the last function called will be the first one to be executed.

    Event Loop:

    - It is a mechanism that checks the call stack and the callback queue. 
    - It will pick the top function from the call stack and execute it.

    Callback Queue:

    - It is a queue that stores the functions that are waiting to be executed.
    - Event Loop will check the callback queue and if the call stack is empty, it will pick the first function from the callback queue and execute it.

    Web APIs:

    - These are APIs provided by the browser that allow you to perform asynchronous operations like setTimeout, fetch, setInterval, executor in Promise, etc.


    Example:

    function firstFunction() {
        console.log('First Function');
        secondFunction();
    }

    cosnole.log(FirstFunction(SecondFunction())));


*/

// Example of Call Stack

let x = 10;

function fun() {
    if (x === 13) return;

    console.log(x);
    x++;
    fun();
}

fun();