const menuArea = document.querySelector(".pkmarea");
const menu = document.querySelector(".menu");


menuArea.addEventListener( "contextmenu", event => {
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add("active");
}, false);

document.addEventListener("click", event => {
    if (event.button !== 2) {
        menu.classList.remove("active");
        }
}, false);

menu.addEventListener("click", event => {
    event.stopPropagation();
}, false);

const myDiv = document.getElementById('col');

document.getElementById('l1').addEventListener('click', function () {
    myDiv.style.background = 'lightgreen';
});
      
document.getElementById('l2').addEventListener('click', function () {
    myDiv.style.width = '300px';
    myDiv.style.height = '300px';
    myDiv.style.borderRadius = '0%';
});
      
document.getElementById('l3').addEventListener('click', function () {
    myDiv.style.width = '300px';
    myDiv.style.height = '300px';
    myDiv.style.borderRadius = '50%';
});
      
document.getElementById('l4').addEventListener('click', function () {
    myDiv.style.top = '-50px';
    myDiv.style.left = '-20px';
});
      
document.getElementById('l5').addEventListener('click', function () {
    myDiv.style.display = 'none';
});