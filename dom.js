let nameInput = document.getElementById('registerID');
nameInput.addEventListener('keydown', function (event) {
    // switch (event.key) {
    //     case 'c':
    //         console.log('you pressed ctrl + c');
    //         break;
    // }

    if (event.ctrlKey && event.key === 'c') {
        console.log('you pressed c');
    }
});