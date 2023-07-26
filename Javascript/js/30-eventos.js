'use strict';

// Eventos de ratón

var boton = document.querySelector('#boton');

function cambiarColor() {
    var bg = boton.style.backgroundColor;
    if (bg === "green") {
        boton.style.backgroundColor = "red";
    } else {
        boton.style.backgroundColor = "green";
    }
}