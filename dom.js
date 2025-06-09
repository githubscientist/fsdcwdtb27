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
// const container = document.getElementById('container');
const container = document.createElement('div');

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

/*
    <header>
        <nav>

        </nav>
    </header>

    Create a header block with nav items from the following array:

    const navItems = [
        { name: 'Home', link: '/home'},
        { name: 'Products', link: '/products'},
        { name: 'About Us', link: '/about'},
        { name: 'Contact', link: '/contact'},
        { name: 'Blog', link: '/blog'}
    ]
*/

const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'Products', link: '/products' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' }
]

// create a header div block
const header = document.createElement('header');

// create a nav block
const nav = document.createElement('nav');

// nav.setAttribute('class', 'navBlock');
nav.classList.add('navBlock');

// create an unordered list
const navList = document.createElement('ul');
navList.style.display = "flex";
navList.style.gap = "20px";

navItems.forEach(navItem => {
    const li = document.createElement('li');

    // create an anchor tag
    const a = document.createElement('a');
    a.textContent = navItem.name;

    // set the attribute of anchor tags to navItem.link
    a.setAttribute('href', navItem.link);

    a.style.textDecoration = "none";
    a.style.color = "black";

    li.style.listStyleType = "none";

    // append the a tag to the li item
    li.append(a);

    navList.append(li);
})


// append the navList to the nav block
nav.append(navList);

// append nav block to the header
header.append(nav);

// prepend the header to the container
container.prepend(header);

document.body.prepend(container);

// const styles = `.navBlock li{
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
// }

// .navBlock li a {
//     text-decoration: none;
//     color: #000;
// }

// .navBlock ul{
//     display: flex;
//     flex-direction: row;
//     gap: 20px;
// }`;

// const styleBlock = document.createElement('style');
// styleBlock.textContent = styles;

// document.head.append(styleBlock);