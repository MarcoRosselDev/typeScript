(function () {
    "use strict";

    const inputVal = document.querySelector('input');
    const buttonSend = document.querySelector('.btnSend');
    const list = document.querySelector('.list');

    let array = []

    buttonSend.addEventListener('click', function (event) {
        event.preventDefault();
        array.push(inputVal.value);
        inputVal.value = '';

        let dom = '';
        for (let i = 0; i < array.length; i++) {
            dom += `<li>${array[i]}</li>`;
        }
        list.innerHTML = dom;
    })
})()