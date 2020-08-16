const bureger = () => {
    const menu = document.querySelector('.main-navigation'),
        menuItem = document.querySelectorAll('.main-navigation-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('main-navigation-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('main-navigation-active');
        })
    })
};

export default bureger;