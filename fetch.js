/*
    Fetch
        - It is a built-in JavaScript function that allows you to make http requests to servers.
        - It is used to make API calls to retrieve or send data.
        - Fetch internally uses Promises.
        - Fetch is an asynchronous function, meaning it does not block the execution of code while waiting for a response.
*/

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/read`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })

/*
    '[{"name": "sathish"}, {}, {}]' -> JSON.parse(jsonstring) -> JavaScript Object
    {
        name: 'sathish' -> JSON.stringify(jsobject) -> JSON String
    }
*/