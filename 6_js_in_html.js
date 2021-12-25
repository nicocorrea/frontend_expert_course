// window.addEventListener('DOMContentLoaded', main);
// With 'load' instead of DOMContentLoaded, it will wait for the images to load only.

const button = document.querySelector('button');
button.addEventListener('mouseover', setBrackgroundColor);
   
function setBrackgroundColor() {
    document.body.style.backgroundColor = '#00334C';
};        


