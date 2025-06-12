let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 11);
        if (randomNumber <= 5) {
            resolve(randomNumber);
        } else {
            reject(randomNumber);
        }
    }, 1000);
})

promise
    .then((randomNumber) => {
        console.log('promise resolved');
        console.log(randomNumber);
    })
    .catch((randomNumber) => {
        console.log('promise rejected');
        console.log(randomNumber);
    })
