// get the reference of the register form
const registerForm = document.getElementById('registerForm');

// attach an event listener to the form for submit event
registerForm.addEventListener('submit', (event) => {
    // to prevent the default form submission behavior, which would reload the page
    event.preventDefault();

    // get the values of the form elements
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    console.log(name, email, password);
});

function validatePassword(event) {
    let password = event.target.value;

    let uppercases = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            uppercases++;
        }
    }

    console.log('password: ', password);
    console.log('uppercases: ', uppercases);

    if (password.length < 8) {
        document.getElementById('error').textContent = 'X Password should be atleast 8 characters';
        document.getElementById('error').style.color = 'red';
        document.getElementById('registerButton').disabled = true;
        document.getElementById('error').style.display = "block";
    } else {
        document.getElementById('error').style.display = "none";
        document.getElementById('registerButton').disabled = false;
    }
}