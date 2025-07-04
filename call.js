/*
    call, bind, and apply functions.

    call: Invokes a function with a specified `this` value and arguments.
    bind: Creates a new function that, when called, has its `this` keyword set.
    apply: Invokes a function with a specified `this` value and an array of arguments.
*/

function greet(greeting1, greeting2) {
    console.log(`${greeting1 + ' ' + greeting2}, ${this.name}`);
}

const person = { name: 'Alice' };

// const greetAlice = greet.bind(person, 'Hello');

// greetAlice(); // Output: Hello, Alice

greet.apply(person, ['Hello', 'Welcome']);