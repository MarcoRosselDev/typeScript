const assets = [
    {
        "name": "Lushito Random",
        "img": "/img/1",
        "para": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolorum molestias modi atque doloremque ab repellat minima suscipit, voluptatem animi architecto necessitatibus amet esse quibusdam eligendi molestiae obcaecati praesentium saepe?"
    },
    {
        "name": "Maarco Random",
        "img": "/img/2",
        "para": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat minima suscipit, voluptatem animi architecto necessitatibus amet esse quibusdam eligendi molestiae obcaecati praesentium saepe?"
    },
    {
        "name": "Eva Random",
        "img": "/img/3",
        "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro officiis omnis minima, libero nam autem doloribus deserunt! Enim, atque id! Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis"
    },
    {
        "name": "Eduardo Random",
        "img": "/img/4",
        "para": "Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis nisi laborum, corrupti voluptate quasi expedita nobis iusto qui, inventore aperiam quis explicabo tempora. Laboriosam delectus earum corporis cum necessitatibus aut. Sit provident laudantium"
    },
    {
        "name": "Juanito Random",
        "img": "/img/5",
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro officiis omnis minima, libero nam autem doloribus deserunt! Enim, atque id! Quo quidem iste laborum suscipit perspiciatis adipisci saepe nesciunt. Blanditiis nisi laborum, corrupti voluptate quasi expedita nobis iusto qui, inventore aperiam quis explicabo tempora. Laboriosam delectus earum corporis cum necessitatibus aut. Sit provident laudantium quibusdam pariatur harum enim ducimus!'
    }
]

console.log(assets[1].img);

let iterador = 0;

const btnSiguiente = document.querySelector('.nextBtn');
const para = document.querySelector('.para');

function map() {
    para.innerText = assets[iterador].para;
    iterador++
}

map()

btnSiguiente.addEventListener('click', function () {
    map()
})