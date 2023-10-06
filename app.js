const allBoxes = document.querySelectorAll('.box');
const nav = document.querySelector("header nav ul")
allBoxes.forEach(box => {
box.addEventListener('click', e => {
    box.classList.toggle('active');
    nav.classList.toggle("navToogle");
})
    }) 

