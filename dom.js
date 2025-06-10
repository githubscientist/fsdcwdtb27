let menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
]
const navBlock = document.querySelector('.navBlock');
const navList = document.createElement('ul');

menuItems
    .forEach(menuItem => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = menuItem.name;
        a.href = menuItem.path;
        li.appendChild(a);
        navList.appendChild(li);
    })

navBlock.append(navList);