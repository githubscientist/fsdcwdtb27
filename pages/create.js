const createTodoForm = document.querySelector('.createTodoForm');

createTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the values of the input fields
    const content = event.target.content.value;
    const isCompleted = event.target.status[0].checked ? true : false;

    // make an API call to create a new todo item in the server
    fetch(`https://684c3f27ed2578be881e37e6.mockapi.io/todos`, {
        method: 'POST',
        body: JSON.stringify({
            content,
            isCompleted
        }),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {
            alert('New Todo Created!');

            event.target.content.value = '';
            event.target.status[1].checked = true;

            // redirect the user to the home page
            window.history.back();
        })
        .catch(error => {
            alert(error.message);
        })
})

const cancelButton = document.querySelector('.cancelButton');

cancelButton.addEventListener('click', () => {
    window.history.back();
})