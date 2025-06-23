// let numbers = [4, 6, 2, 3, 1, 5];

let numbers = new Array(4, 6, 2, 3, 1, 5);

// to push an element to the array

// to the end of the array: push method
numbers.push(10);

// to the beginning of the array: unshift method
numbers.unshift(12);

// to insert at any where in the array using the index
// splice args: index, should we delete any elements from index 3 (deleteCount), element to be inserted
numbers.splice(3, 0, 15);

// to delete an element from the end of the array (only one element at a time)
numbers.pop();

// to delete an element from the beginning of the array (only one element at a time)
numbers.shift();

// to delete an element from anywhere in the array
// first arg: index
// second arg: deleteCount
numbers.splice(2, 1);

// console.log(numbers.slice(2,));

// in-place methods: are the methods that modify the original array

// console.log(numbers.includes(50));
// console.log(numbers.indexOf(50));

// function square(number) {
//     return number ** 2;
// }


// console.log(numbers);
// console.log(numbers.map(square));

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
// }

// // isEven(4);

// console.log(numbers);
// console.log(numbers.filter(isEven));

// console.log(numbers);

// function sum(a, b) {
//     return a + b;
// }

// console.log(numbers.reduce(sum));

class Student {
    // constructor: a special method
    // that gets called whenever we create an object to the class
    constructor() {
        this.name = '';
        this.location = '';
        this.rollNumber = '';

        // console.log(this);
    }
}

// creating an object to the class
const student101 = new Student();

student101.name = 'ABC';
student101.location = 'Madurai';
student101.rollNumber = 101;

console.log(student101);

const student102 = new Student();

student102.name = 'XYZ';
student102.location = 'Chennai';
student102.rollNumber = 102;

console.log(student102);

/*
    const student101 = new Student();

    student101 = Student {
        name = '',
        location = '',
        rollNumber = ''
    }
*/