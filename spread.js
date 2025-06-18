// ... spread, rest
// let nums1 = [5, 3, 8];
// let nums2 = [1, 2, 4];

// console.log([...nums1, ...nums2]);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 3, d: 4 };


// // console.log({ b: 2, a: 3, d: 4 });
// console.log({ ...obj1, ...obj2 });

// function sum(x, y, ...rest) {
//     // console.log(x + y);
//     console.log(rest);
// }

// sum(5, 6, 7, 8, 9, 10);

// let nums = [4, 6, 10];

// // destructuring assignment
// let [a, b, c] = nums;

// console.log(a, b, c);

let obj1 = {
    a: 1,
    b: 2
}

let { ...args } = obj1;

console.log(args); // args = { a: 1, b:2 }