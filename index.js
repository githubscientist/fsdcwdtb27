/*
    Promise: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

// Create a new promise object using Promise constructor
// constructor -> a special method -> automatically gets called whenever we create an object.
let promise = new Promise(
    // Executor -> Callback -> Function that is passed as an arg to another function.
    (resolve, reject) => {
        // Executor -> Callback -> Waits for 3 seconds
        setTimeout(() => {
            // After 3s, Generate a random number
            const randomNumber = Math.floor(Math.random() * 11);

            // Success condition: randomNumber being <= 5
            // Failure condition: randomNumber being > 5 
            if (randomNumber <= 5) {
                // call the success callback
                resolve(randomNumber);
            } else {
                // call the failure callback
                reject(randomNumber);
            }
        }, 5000);
    }
)

console.log(promise);

promise
    .then(
        // a success callback is passed
        (randomNumber) => {
            console.log('promise resolved');
            // data?
            console.log(randomNumber);
        },
    )
    .catch(
        // a failure callback is passed
        (randomNumber) => {
            console.log('promise rejected');
            console.log(randomNumber);
        }
    )

/*
    Promise can be in one of the following states:
    1. Pending: Initial state, neither fulfilled nor rejected.
    2. Fulfilled: The operation completed successfully.
    3. Rejected: The operation failed.
*/