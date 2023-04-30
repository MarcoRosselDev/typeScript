(function () {
    'use strict'

    const send = document.querySelector('.send');
    const inputValue = document.querySelector('input');
    const divPrint = document.querySelector('.printDiv');

    send.addEventListener('click', function (event) {
        event.preventDefault();
        divPrint.innerHTML = `
        <li>
        ${inputValue.value}</li>
        `;
        inputValue.value = ''
    })
})() 

/* <main>
        <h1>To do List</h1>
        <form action="">
            <input type="text" placeholder="write a task to do...">
            <button class="send">Send</button>
        </form>
        <div class="printDiv">
            
        </div>
    </main> */
