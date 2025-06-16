const updateTodoForm = document.querySelector('.updateTodoForm');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

updateTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the values of the input fields
    const content = event.target.content.value;
    const isCompleted = event.target.status[0].checked ? true : false;

    // make an API call to create a new todo item in the server
    fetch(`https://684c3f27ed2578be881e37e6.mockapi.io/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            content,
            isCompleted
        }),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {
            alert('Todo Updated!');

            // event.target.content.value = '';
            // event.target.status[1].checked = true;

            // redirect the user to the home page
            window.history.back();
        })
        .catch(error => {
            alert(error.message);
        })
});



// make an api call to fetch the todo item
fetch(`https://684c3f27ed2578be881e37e6.mockapi.io/todos/${id}`)
    .then(response => {
        return response.json();
    })
    .then(todo => {
        // get the references of the input elements
        const content = document.querySelector('#content');
        const completedRadio = document.querySelector('#completedRadio');
        const notCompletedRadio = document.querySelector('#notCompletedRadio');

        content.value = todo.content;
        if (todo.isCompleted) completedRadio.checked = true;
        else notCompletedRadio.checked = true;
    })
    .catch(error => {
        console.log(error);
    })

function cancelEdit(event) {
    event.preventDefault();
    window.history.back();
}