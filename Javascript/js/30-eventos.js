'use strict';

// Eventos de ratón

var boton = document.querySelector('#boton');

function cambiarColor() {
    var bg = boton.style.backgroundColor;
    if (bg === "green") {
        boton.style.backgroundColor = "red";
        boton.style.padding = "10px 10px 10px 10px";
        boton.style.border = "1px solid red";
    } else {
        boton.style.backgroundColor = "green";
    }
}

boton.addEventListener('click', (e) => {
    cambiarColor();
    e.preventDefault();
});

boton.addEventListener('mouseover', (e) => {
    boton.style.background = "#000000";
});

boton.addEventListener('mouseout', (e) => {
    boton.style.background = "#ffffff";
});