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

        // create an anchor item
        const a = document.createElement('a');

        // set the todoItem content
        a.textContent = todo.content;

        // set the href value of each a tag
        a.setAttribute('href', `/pages/todo.html?id=${todo.id}`);

        // append each anchor item to the list item
        todoItem.appendChild(a);

        // append each of the created list item the unordered list
        todoList.appendChild(todoItem);
    })
}

// Entry point for the index.js
async function Main() {
    // function to fetch all the todo list items
    todos = await fetchTodos();

    // store the todos in localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // populate the page with the data
    renderTodoList(todos);
}

Main();

const createTodoButton = document.querySelector('.createTodoButton');

createTodoButton.addEventListener('click', () => {
    window.location.href = '/pages/create.html';
})