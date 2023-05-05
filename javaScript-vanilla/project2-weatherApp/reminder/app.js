(function () {
    'use strict'

    const send = document.querySelector('.send');
    const inputValue = document.querySelector('input');
    const divPrint = document.querySelector('.printDiv');
    const localStrg = JSON.parse(localStorage.getItem('randomName'))

    console.log();

    // variable let para almacenar la lista
    let saveList = []

    

    send.addEventListener('click', function (event) {
        event.preventDefault();
        saveList.push(inputValue.value)
        localStorage.setItem('randomName', JSON.stringify(saveList))
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

            const thiss = this.parentNode.parentNode;

            const f = thiss.querySelector('p');
            const text = f.innerText

            saveList = saveList.filter(e => e !== text);
            console.log(saveList);
            this.parentNode.parentNode.remove()
        }))
    })

})() 


