/*
    fs module

    - This module provides an interface for interacting with the file system.
    - It allows reading, writing, and manipulating files and directories.
*/

const fs = require('fs');

// To write to a file
// const time = new Date();

// fs.appendFile('./logs/log.txt', `\n${time}: Checks Done! All Good!`, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }

//     console.log('File written successfully!');
// });

// to read from a file synchronously
try {
    const data = fs.readFileSync('./logs/log.txt', 'utf-8')

    console.log(data);
} catch (error) {
    console.error('Error reading file:', error);
}


// To read from a file
// fs.readFile('./logs/log.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     console.log(data.split('\n'));
// })

// to delete a file
// fs.unlink('./logs/log.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }

//     console.log('File deleted successfully!');
// });

