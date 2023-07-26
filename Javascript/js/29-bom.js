'use strict'


function getBOM() {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(screen.height)
    console.log(screen.width)
    console.log(window.location)
}

getBOM();

function redirect(url) {
    window.location.href = url;
}

function OpenWindow(url) {
    window.open(url, "", "width=800,height=600,scroll");
}
