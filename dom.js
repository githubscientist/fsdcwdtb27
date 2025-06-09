function characterCount(event) {
    console.log(event.target.value.length);
}

let nameInput = document.getElementById('registerID');
nameInput.addEventListener('input', characterCount);