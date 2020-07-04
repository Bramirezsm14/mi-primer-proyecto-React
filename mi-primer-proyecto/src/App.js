import React from "react";
//import logo from './logo.svg';
import TiraPeliculas from "./components/TiraPeliculas";
import ContenedorPublicidad from "./components/ContenerdorPublicidad";
import Contador from './components/Contador';
import Gif from './components/Gif'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Gif/>
        <ContenedorPublicidad> 
          <h2>Wooo!!!  Publicidad!! </h2>
      {/*Aca desidimos q va en los children*/}
        </ContenedorPublicidad>
        <TiraPeliculas />
       
        <Contador inicial={0}/>

        <ContenedorPublicidad> 
          <ul>
            <li>Pubicidad 1</li>
            <li>Pubicidad 2</li>
            <li>Pubicidad 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
