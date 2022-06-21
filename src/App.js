import imageRickMorty from './assets/img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Chars from './components/Chars';

function App() {
  const [chars, setChars] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const charApi = await api.json();
    setChars(charApi.results);    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {chars ? (
          <Chars chars={chars} setChars={setChars}/>
        ):(
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </>
        )
      }
        
        
      </header>
    </div>
  );
}

export default App;
