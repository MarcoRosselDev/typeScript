const assets = [
    {
        "name": "Lushito Random",
        "img": "img/1.jpg",
        "para": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolorum molestias modi atque doloremque ab repellat minima suscipit, voluptatem animi architecto necessitatibus amet esse quibusdam eligendi molestiae obcaecati praesentium saepe?"
    },
    {
        "name": "Maarco Random",
        "img": "img/2.jpg",
        "para": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat minima suscipit, voluptatem animi architecto necessitatibus amet esse quibusdam eligendi molestiae obcaecati praesentium saepe?"
    },
    {
        "name": "Eva Random",
        "img": "img/3.jpg",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro officiis omnis minima, libero nam autem doloribus deserunt! Enim, atque id! Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis"
    },
    {
        "name": "Eduardo Random",
        "img": "img/4.jpg",
        "para": "Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis nisi laborum, corrupti voluptate quasi expedita nobis iusto qui, inventore aperiam quis explicabo tempora. Laboriosam delectus earum corporis cum necessitatibus aut. Sit provident laudantium"
    },
    {
        "name": "Juanito Random",
        "img": "img/5.jpg",
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro officiis omnis minima, libero nam autem doloribus deserunt! Enim, atque id! Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis nisi laborum, corrupti voluptate quasi expedita nobis iusto qui, inventore aperiam quis explicabo tempora. Laboriosam delectus earum corporis cum necessitatibus aut. Sit provident laudantium quibusdam pariatur harum enim ducimus!'
    }
]

console.log(assets[1].img);

let iterador = 0;

// botones
const btnSiguiente = document.querySelector('.nextBtn');
const btnAnterior = document.querySelector('.leftBtn');

const para = document.querySelector('.para');
const img = document.querySelector('.img');
const name = document.querySelector('.name')

function mostrar() {
    para.innerText = assets[iterador].para;
    img.src = assets[iterador].img;
    name.innerText = assets[iterador].name;
}

mostrar()

btnSiguiente.addEventListener('click', function () {

    console.log(assets.length);

    if (iterador >= assets.length) {
        iterador = 0
        mostrar();
    } else if (iterador < 0) {
        iterador = assets.length
        mostrar();
    }else{

        iterador++;
        mostrar();
        console.log(iterador);
    }
})
btnAnterior.addEventListener('click', function () {
    iterador--;
    mostrar()
    console.log(iterador);
})
