/*
    Callback Hell:

    - Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain.
    - Callbacks can be used to achieve synchronous behavior.
    - Solution to the callback hell problem to achieve synchronous behavior is to use Promises or async/await.
*/

// setTimeout(() => {
//     console.log('Printed after 5s delay');
// }, 5 * 1000);

// let ticks = 1;

// let interval = setInterval(() => {
//     console.log(ticks++);
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 11 * 1000);

function First(callback) {
    console.log('First Function Begins!');
    setTimeout(() => {
        console.log('First Function Ends!');
        console.log('Calling Second Function!');
        callback();
    }, 4000);
}

function Second(callback) {
    console.log('Second Function Begins!');
    setTimeout(() => {
        console.log('Second Function Ends!');
        console.log('Calling Third Function!');
        callback();
    }, 3000);
}

function Third(callback) {
    console.log('Third Function Begins!');
    setTimeout(() => {
        console.log('Third Function Ends!');
        callback();
    }, 5000);
}

// CallBack Hell
First(function () {
    Second(function () {
        Third(function () {
            console.log('Finished all functions!!!');
        });
    });
});

// setTimeout(() => {
//     console.log('Im executed after 5 seconds');
// }, 3 * 1000);

// setTimeout(() => {
//     console.log('Im also executed after 10 seconds');
// }, 4 * 1000);