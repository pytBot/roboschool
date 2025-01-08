const menuBtn = document.querySelector('.btn-menu'),
    menuWindow = document.querySelector('.menu'),
    menuClose = menuWindow.querySelector('.menu__close');

console.log(menuBtn);
console.log(menuWindow);
console.log(menuClose);

menuBtn.addEventListener('click', () => {
    menuWindow.classList.add('show');
    menuWindow.classList.remove('hide');
});
menuClose.addEventListener('click', () => {
    menuWindow.classList.remove('show');
    menuWindow.classList.add('hide');
});