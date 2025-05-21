// import the necessary library for input/output handling
const readline = require('readline');

// create an interface to start reading the input
const rl = readline.createInterface({
    input: process.stdin,
});

// create an empty array to store all the input lines
const userInput = [];

// attach a listener to invoke a function for every line of input 
// the user enters
rl.on('line', (data) => {
    userInput.push(data);
});

// attach a listener to invoke a function when the user closes
// the input stream
rl.on('close', () => {
    console.log(userInput[0]);
});