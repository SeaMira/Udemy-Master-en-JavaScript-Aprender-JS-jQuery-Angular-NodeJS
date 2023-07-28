'use strict';

window.addEventListener('load', function() {
    console.log('Page loaded');

    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var edad = document.querySelector('#edad');

    var form = document.querySelector('#form');
    form.addEventListener('submit', function(e) {
        console.log('Form submitted');
        showFormHandler()
        return false;
    });

    var showForm = document.querySelector('#showForm');

    function showFormHandler() {
        console.log('Show Form clicked');
        let showName = document.querySelector('#showNombre');
        let showLastName = document.querySelector('#showApellido');
        let showAge = document.querySelector('#showEdad');

        showName.innerHTML = nombre.value;
        showLastName.innerHTML = apellido.value;
        showAge.innerHTML = edad.value;
    };

    showForm.addEventListener('click', () => {
        showFormHandler();
    });

});