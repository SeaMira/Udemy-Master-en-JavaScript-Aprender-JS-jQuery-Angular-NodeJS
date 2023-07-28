'use strict';

window.addEventListener('load', (e) => {
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

    // Mouse click
    boton.addEventListener('click', (e) => {
        cambiarColor();
        e.preventDefault();
    });

    // Mouse over
    boton.addEventListener('mouseover', (e) => {
        boton.style.background = "#000000";
    });

    // Mouseout
    boton.addEventListener('mouseout', (e) => {
        boton.style.background = "#ffffff";
    });

    // Focus
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', (e) => {
        console.log('dentro de input');
    });

    // Blur
    input.addEventListener('blur', (e) => {
        console.log('fuera de input');
    });

    // Keydown
    input.addEventListener('keydown', (e) => {
        console.log('Pulsando tecla :', String.fromCharCode(e.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', (e) => {
        console.log('Tecla presionada :', String.fromCharCode(e.keyCode));
    });
    // Keyup
    input.addEventListener('keyup', (e) => {
        console.log('Tecla soltada :', String.fromCharCode(e.keyCode));
    });
});

