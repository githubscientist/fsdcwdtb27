// // Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//     input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//     userInput.push(data);
// });

// // inp.on("close", () => {
// //     let n = Number(userInput[0]);

// //     // run a loop for n times
// //     for (let row = 1; row <= n; row++) {
// //         let line = [];
// //         // for each row
// //         for (let col = 1; col <= n - row + 1; col++) {
// //             line.push(col);
// //         }
// //         console.log(line.join(''));
// //     }
// // });

// // inp.on("close", () => {
// //     let n = Number(userInput[0]);

// //     let line = [];

// //     for (let value = 1; value <= n; value++) {
// //         line.push(value);
// //     }

// //     for (; line.length > 0;) {
// //         console.log(line.join(''));
// //         line.pop();
// //     }
// // });

// inp.on("close", () => {
//     let n = Number(userInput[0]);

//     let line = [];

//     for (let value = 1; value <= n; value++) {
//         line.push(value);
//     }

//     let flip = false;

//     for (; line.length > 0;) {

//         if (!flip) console.log(line.join(''));
//         else {
//             console.log(line.reverse().join(''));
//             line.reverse();
//         }
//         line.pop();
//         flip = !flip;
//     }
// });

/*
    flip = false
    line = [1, 2, 3, 4, 5]
    o/p: 12345

    line = [1, 2, 3, 4]
    flip = true
    o/p: 4321

    line = [4, 3, 2, 1]
    line = [1, 2, 3, 4]
    line = [1, 2, 3]
    o/p: 123

    flip = false

    line = [1, 2]
    flip = true
    o/p: 21
    line = [2, 1]
    line = [1, 2]

    line = [1]
    flip = false
    o/p: 1
*/

let n = 5;

let line = [];

for (let value = 1; value <= n; value++) {
    line.push(value);
}

let flip = false;

for (; line.length > 0;) {

    if (!flip) console.log(line.join(''));
    else {
        console.log(line.reverse().join(''));
        line.reverse();
    }
    line.pop();
    flip = !flip;
}