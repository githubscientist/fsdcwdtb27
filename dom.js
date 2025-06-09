let products = [
    {
        id: 1,
        name: 'Sports Shoes',
        price: 59.99,
        description: 'High-quality sports shoes for all activities.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
        id: 2,
        name: 'Running Shoes',
        price: 49.99,
        description: 'Comfortable running shoes for daily exercise.',
        image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    },
    {
        id: 3,
        name: 'Basketball Shoes',
        price: 69.99,
        description: 'Durable basketball shoes for the court.',
        image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    },
    {
        id: 4,
        name: 'Casual Sneakers',
        price: 39.99,
        description: 'Stylish sneakers for everyday wear.',
        image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    },
    {
        id: 5,
        name: 'Hiking Boots',
        price: 89.99,
        description: 'Sturdy hiking boots for outdoor adventures.',
        image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    }
]

// get the reference of the container div block
const container = document.getElementById('container');

// create a h2 element
const heading = document.createElement('h2');

// set the content of the heading element
heading.textContent = 'Products';

// append the heading to the container
container.append(heading);

// create an unordered list to display all the products
const list = document.createElement('ul');

for (let i = 0; i < products.length; i++) {
    const li = document.createElement('li');
    li.textContent = products[i].name;

    list.append(li);
}

// append the list to the container
container.append(list);