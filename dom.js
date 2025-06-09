function handleSubmit() {
    console.log('button clicked');
}

// get the reference of the button with ID btnSubmit
let btnSubmit = document.getElementById('btnSubmit');

// add an event listener to the button
btnSubmit.addEventListener('click', handleSubmit);