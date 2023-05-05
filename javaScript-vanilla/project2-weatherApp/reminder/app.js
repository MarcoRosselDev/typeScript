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
        function printDOM (){
            let finalPrint = '';
            for (let i = 0; i < saveList.length; i++) {
                finalPrint += `
                <div class="list">
                    <p>${saveList[i]}</p>
                    <div class="btns">
                        <button class="btnDone">Finished</button>
                        <button class="btnDelete">Delete</button>
                    </div>                
                </div>
                `
            }
            divPrint.innerHTML = finalPrint;
        }
        printDOM()
        inputValue.value = "";
        const btnDelete = document.querySelectorAll('.btnDelete');
        btnDelete.forEach(e => e.addEventListener('click', function (e) {
            e.preventDefault()

            console.log(this.parentElement.parentElement.innerText[0] );

            console.log(saveList);
            //this.parentNode.parentNode.remove()
        }))
    })

})() 


