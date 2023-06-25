(function () {
    'use strict';

    const div = document.querySelector('.div');
    const input = document.querySelector('.input1');
    const btn = document.querySelector('.inputBtn');

    btn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(input.value);

        div.innerHTML += `<p>${input.value}</p>`;
    })

})()