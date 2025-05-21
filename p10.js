// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// inp.on("close", () => {
//     let rows = +userInput[0].split(' ')[0];
//     let cols = +userInput[0].split(' ')[1];

//     for (let row = 1; row <= rows; row++) {
//         let line = [];

//         for (let col = 1; col <= cols; col++) {
//             line.push('*');
//         }
//         console.log(line.join(' '));
//     }
// });

inp.on("close", () => {
    let rows = +userInput[0].split(' ')[0];
    let cols = +userInput[0].split(' ')[1];

    // prepare an array with cols number of stars
    // create an empty array
    let stars = [];

    // run a loop that runs for cols number of times
    for (let col = 1; col <= cols; col++) {
        stars.push('*');
    }

    // run a loop that runs for rows number of times
    // and print console.log(stars.join(' '));
    for (let row = 1; row <= rows; row++) {
        console.log(stars.join(' '));
    }
});