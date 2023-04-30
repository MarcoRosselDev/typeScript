(function () {
    'use strict'

    const send = document.querySelector('.send');
    send.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('clicked');
    })
    console.log('loaded');
})()