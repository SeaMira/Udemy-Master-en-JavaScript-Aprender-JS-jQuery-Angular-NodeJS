'use strict';

// Local Storage


// Comprobar local storage
if (typeof localStorage != 'undefined') {
    console.log('localStorage is supported');
} else {
    console.log('localStorage is not supported');
}

// Guardar datos en local storage
localStorage.setItem('nombre', 'Juan');

// Recuperar datos de local storage
console.log(localStorage.getItem("nombre"));

// Guardar objetos en local storage
var usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@gmail.com'
};

localStorage.setItem('usuario', JSON.stringify(usuario));
console.log(localStorage.getItem("usuario"));

// Recuperar objetos de local storage

var usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario.nombre);