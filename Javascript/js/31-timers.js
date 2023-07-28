'use strict';

window.addEventListener('load', () => {

    function intervalo() { 
        let t = setInterval(
            () => {
                console.log('Set interval executed');
                document.querySelector('p').style.fontSize = '20px';
            },
            3000
        );
        return t;
    }
    
    var tiempo = intervalo();

    var tiempo2 = setTimeout(
        () => {
            console.log('Set timeout executed');
            document.querySelector('p').style.fontSize = '20px';
        },
        3000
    );

    var stopButton = document.querySelector('#stop');

    stopButton.addEventListener('click', () => {
        console.log('Stop button clicked')
        clearInterval(tiempo);
    });

    var startButton = document.querySelector('#start');

    startButton.addEventListener('click', () => {
        console.log('Start button clicked')
        tiempo = intervalo();
    });
});