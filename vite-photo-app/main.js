import './style.css';

const publicKey = import.meta.env.VITE_KEY_UNSPLASH;
console.log(publicKey);

document.querySelector('#app').innerHTML = `
  <div>
    <p>test photo api</p>
  </div>
`;