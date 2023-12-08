const menu = document.getElementById('menuBar');
const lists = document.getElementById('menuLists');
const crossBtn = document.getElementById('cross');

menu.addEventListener('click', () => {
    lists.classList.toggle('active');
});

crossBtn.addEventListener('click', () => {
    lists.classList.remove('active');
});