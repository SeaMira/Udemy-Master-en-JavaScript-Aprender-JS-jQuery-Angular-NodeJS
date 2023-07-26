
// var caja = document.getElementById('caja')
var caja = document.querySelector('#caja')

caja.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(caja.innerHTML)
})


// Elementos por etiqueta
// var everyDiv = document.querySelectorAll('div')
var everyDiv2 = document.getElementsByTagName('div')
var seccion = document.querySelector('#seccion')

for (var i = 0; i < everyDiv2.length; i++) {
    var parrafo = document.createElement('p')
    var texto = document.createTextNode(everyDiv2[i].innerHTML)
    parrafo.appendChild(texto)
    seccion.appendChild(parrafo)
    console.log(everyDiv2[i])
}
seccion.append(document.createElement('hr'))