'use strict';


window.addEventListener('load', function() {
    console.log('Page loaded');

    var movieForm = document.getElementById('movieForm');
    var newMovie = document.querySelector('#addPelicula');
    var peliculas = document.querySelector('#peliculas');

    movieForm.addEventListener('submit', function(event) {
        localStorage.setItem('pelicula', newMovie.value);
        console.log('Pelicula guardada');
    });

    var p = localStorage.getItem('pelicula');
    var i;
    for (i in p) {
        let parrafo = document.createElement('p');
        parrafo.append(p[i]);
        peliculas.append(parrafo);
    };
}); 