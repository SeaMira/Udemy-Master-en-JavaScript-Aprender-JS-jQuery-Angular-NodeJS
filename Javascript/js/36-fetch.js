'use strict';

var div_usrs = document.getElementById('usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        showUsuarios(data);
    })

function showUsuarios(usuarios) {
    usuarios.forEach((usuario, id) => {
        div_usrs.innerHTML += `<p> ${id + 1}. ${usuario.name} - ${usuario.username}</p>`;
    });
};
 

function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
};

let user;
user = getUser(1)
    .then(data => data.json())
    .then(data => {
        console.log(data);
        console.log(getInfo());
        return data
    });

function getInfo() {
    var objeto = {
        nombre: 'Mairu',
        apelld: 'Piplop',
        edad: 15
    }

    return new Promise((resolve, reject) => { 
        var obj_string = ''

        setTimeout(() => {
            obj_string = JSON.stringify(objeto);
            console.log(obj_string);
        }, 1000);

        if (typeof obj_string != 'string') { 
            return reject('error');
        };
        return resolve(obj_string);
    });
}

