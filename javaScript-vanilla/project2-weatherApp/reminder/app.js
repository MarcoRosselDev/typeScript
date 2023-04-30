(function () {
    'use strict'

    const send = document.querySelector('.send');
    const inputValue = document.querySelector('input');
    const divPrint = document.querySelector('.printDiv');

    // variable let para almacenar la lista
    let saveList = []

    send.addEventListener('click', function (event) {
        event.preventDefault();

        saveList.push(inputValue.value)

        for (let i = 0; i < saveList.length; i++) {
            divPrint.innerHTML += `<li>${saveList[i]}</li>`;
            
        }
/* 
        divPrint.innerHTML = `
        <li>
        ${saveList}</li>
        `;
        inputValue.value = '' */
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
