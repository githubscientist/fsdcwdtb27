// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = parseInt(userInput[0]);

    let bees = 0;
    for (let row = 1; row <= n / 2; row++, bees += 2) {
        let line = [];

        // push the stars
        for (let col = 1; col <= n / 2 - row + 1; col++) {
            line.push('*');
        }

        // push the even number of b's
        for (let b = 0; b < bees; b++) {
            line.push('b');
        }

        // push the stars
        for (let col = 1; col <= n / 2 - row + 1; col++) {
            line.push('*');
        }

        console.log(line.join(''));
    }

    bees -= 4;
    for (let row = 1; row <= n / 2 - 1; row++, bees -= 2) {
        let line = [];

        // push the stars (n/2 , n/2-1, n/2-2,...1)
        for (let col = 1; col <= row + 1; col++) {
            line.push('*');
        }

        // push the even number of b's
        for (let b = 0; b < bees; b++) {
            line.push('b');
        }

        // push the stars
        for (let col = 1; col <= row + 1; col++) {
            line.push('*');
        }

        console.log(line.join(''));
    }
});
/*

**********
****bb****
***bbbb***
**bbbbbb**
*bbbbbbbb*
**bbbbbb**
***bbbb***
****bb****
**********

*/