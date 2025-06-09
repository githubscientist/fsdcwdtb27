// get the reference of the container element
const container = document.getElementById('container');

// create a h1 element
const h1 = document.createElement('h1');

// set the content of the h1 element
h1.textContent = 'Hello, World!';

// create a p element
const p = document.createElement('p');

// set the content of the p element
p.textContent = 'This is a simple DOM manipulation example.';

// append the h1 element and the p element to the container element
container.append(p, h1);