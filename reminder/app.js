(function () {
    "use strict";

    const inputVal = document.querySelector('input');
    const buttonSend = document.querySelector('.btnSend');
    const list = document.querySelector('.list');

    buttonSend.addEventListener('click', function (event) {
        event.preventDefault();

        list.innerHTML = `<li>${inputVal.value}</li>`
        console.log(inputVal.value);
    })


})()