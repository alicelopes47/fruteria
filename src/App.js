import logo from './logo.svg';
import alface from './imgs/alface.png'
import laranja from './imgs/laranja.png'
import cereja from './imgs/cereja.png'
import cenoura from './imgs/cenoura.png'
import manga from './imgs/manga.png'
import limao from './imgs/limao.png'
import beterraba from './imgs/beterraba.png'
import tomate from './imgs/tomate.png'

import './App.css';

function App() {
  const frutas1 = [{src:`${alface}`, nome:'alface'}, {src:`${laranja}`, nome:'laranja'},{src:`${cereja}`, nome:'cereja'}, {src:`${cenoura}`, nome:'cenoura'}]
  const frutas2 = [{src:`${manga}`}, {src:`${limao}`}, {src:`${beterraba}`}, {src:`${tomate}`}]
  return (
    <div className="App">
      <h1 className='horti'>HORTIFRUTI VnW </h1>
      <h1 className='nossos-produtos'>Nossos Produtos</h1>
      <div className='tudo'>
        <div className='fruteiro'>
          <div className='fruta1'>
            {frutas1.map((fruta) => (
              <img src={fruta.src} alt='imgs' />
            ))}
          </div>
          <div>
              <div className='fruta2'>
                {frutas2.map((fruta) => (
                  <img src={fruta.src} alt='imgs' />
                ))}
              </div>
          </div>
        </div>
        <div className='caixa'> 
          <div className='carrinho'>
                  <p>Arraste seu produto aqui</p>
          </div>
          <div className='butons'>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
