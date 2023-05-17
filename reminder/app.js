(function () {
    "use strict";

    const inputVal = document.querySelector('input');
    const buttonSend = document.querySelector('.btnSend');

    buttonSend.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(inputVal.value);
    })
})()