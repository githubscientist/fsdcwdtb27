// Global variables or constants
let todos = [];
let API_URL = `https://684c3f27ed2578be881e37e6.mockapi.io/todos`;

async function fetchTodos() {
    try {
        // make an api call to the url: https://684c3f27ed2578be881e37e6.mockapi.io/todos
        const response = await fetch(API_URL);

        // convert the response object to JS object
        // store the data to the todos variable
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

function renderTodoList(todos) {
    // identify the ul list item from the main page
    const todoList = document.querySelector('.todoList');

    // loop through the data
    todos.forEach(todo => {
        // for each todo object, create a list item
        const todoItem = document.createElement('li');

        // set the todoItem content
        todoItem.textContent = todo.content;

        // append each of the created list item the unordered list
        todoList.appendChild(todoItem);
    })
}

// Entry point for the index.js
async function Main() {
    // function to fetch all the todo list items
    todos = await fetchTodos();

    // populate the page with the data
    renderTodoList(todos);
}

Main();