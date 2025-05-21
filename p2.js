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
    let n = Number(userInput[0]);

    // for n rows
    for (let row = 1; row <= n; row++) {
        let line = [];
        for (let col = 1; col <= row; col++) {
            if (row == 1 || row == n || col == 1 || col == row) {
                line.push(col);
            } else {
                line.push(' ');
            }
        }
        console.log(line.join(''));
    }
});