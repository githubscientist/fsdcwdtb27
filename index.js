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

// fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/read`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })

// HTTP request using XHR

// create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// prepare the request
xhr.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/read`);

// function to handle the response
xhr.onload = function () {
    // get the response
    console.log(JSON.parse(xhr.responseText));
}

// send the request
xhr.send();