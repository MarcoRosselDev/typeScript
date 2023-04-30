(function () {
    'use strict'

    const send = document.querySelector('.send');
    const inputValue = document.querySelector('input');

    send.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(inputValue.value);
    })
    console.log();
})()