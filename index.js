/*
    Fetch
        - It is a built-in JavaScript function that allows you to make http requests to servers.
        - It is used to make API calls to retrieve or send data.
        - Fetch internally uses Promises.
        - Fetch is an asynchronous function, meaning it does not block the execution of code while waiting for a response.
        - Fetch is more modern and flexible compared to the older XMLHttpRequest (XHR) method.

    XHR
        - It is an older way to make HTTP requests in JavaScript.

*/

async function fetchData() {
    try {
        // this is a try block to write code that might throw an error.
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/read`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // this is a catch block to handle errors that occur in the try block.
        console.log('An error occurred:', error);
    }
    console.log('This will work');
}

fetchData();