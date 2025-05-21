// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// Method: 1
// inp.on("close", () => {
//     let n = +userInput[0];

//     for (let row = 1; row <= n; row++) {
//         let line = [];

//         // run a loop again to print upto 5 columns
//         for (let col = 1; col <= row; col++) {
//             line.push(col);
//         }
//         console.log(line.join(''));
//     }
// });

// Method 2
inp.on("close", () => {
    // read the input from the user and convert it into a number
    let n = +userInput[0];

    // create an empty array
    let line = [];

    // run a loop for n times
    let times = 1;

    while (times <= n) {
        line.push(times);
        console.log(line.join(''));
        times++;
    }
});