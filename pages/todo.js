// Global variables or constants
let todo = null;
let API_URL = `https://684c3f27ed2578be881e37e6.mockapi.io/todos`;
let id;

async function fetchTodo(id) {
    try {
        // make an api call to the url: https://684c3f27ed2578be881e37e6.mockapi.io/todos
        const response = await fetch(API_URL + `/${id}`);

        // convert the response object to JS object
        // store the data to the todos variable
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

function renderTodo(todo) {
    const content = document.querySelector('.content');
    const id = document.querySelector('.id');
    const createdAt = document.querySelector('.createdAt');
    const status = document.querySelector('.status');

    content.textContent = todo.content;
    id.innerHTML = `<strong>ID: </strong>${todo.id}`
    createdAt.innerHTML = `<strong>Created At: </strong>${todo.createdAt}`
    status.innerHTML = `<strong>Completed?: </strong>${todo.isCompleted ? 'YES' : 'NO'}`
}

async function Main() {
    // Get the ID from the URL Params
    const params = new URLSearchParams(window.location.search);
    id = params.get('id');

    todo = await fetchTodo(id);

    renderTodo(todo);
}

Main();

function deleteTodo() {
    let confirmResult = confirm('Are you sure to delete?');
    if (confirmResult) {
        fetch(`https://684c3f27ed2578be881e37e6.mockapi.io/todos/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                alert('Todo Deleted');

                window.location.href = '/index.html';
            })
    }
}

function gotoEditPage() {
    window.location.href = '/pages/edit.html?' + 'id=' + id;
}