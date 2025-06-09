let x = 0;
function handleSubmit(event) {
    let colors = ['green', 'blue', 'yellow', 'pink', 'black', 'brown', 'red'];
    let rIdx = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[x++ % 7];
}

// get the reference of the button with ID btnSubmit
let btnSubmit = document.getElementById('btnSubmit');

// add an event listener to the button
btnSubmit.addEventListener('click', handleSubmit);