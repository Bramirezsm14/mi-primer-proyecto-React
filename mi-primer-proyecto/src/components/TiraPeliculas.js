import React, {Component} from "react";
import Pelicula from "./Pelicula";


class  TiraPelicula extends Component { // cambiando  function TiraPelicula por class  TiraPelicula extends Component
    lanzarAlerta(){
alert('Me clickeaste!')
    }
    cambiarAmarillo(){
        document.querySelector('body').style.backgroundColor='Yellow'
    }
    cambiarRosa(){
        document.querySelector('body').style.backgroundColor='Pink'
    }

    /* liena 18 :agregando render () y envolviendolo en corcher a toda la fx se "llama Statefull component"*/
    /*linea 21:lugar donde quiero q suceda el ebvneto, sin o uso los parentesis en los metos digo q quero q se inicie ahora si no digo q quiero asociar lafx al momento q se clickee */
    render () {
        return (
        

        <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}> 

        <Pelicula  generos={['Fantasia','Aventura']} rating={8.0} titulo='Harry Potter'/> 
        <Pelicula generos={['Animacion','Familias']} rating={7.5} titulo='Toy Story'/> 
        <Pelicula generos={['Drama']}                rating={6.0} titulo='Her'/> 
        <Pelicula genero={['Drama']}                 rating={9.0} titulo='Parasite'/> 
        <Pelicula generos={['Accion','Aventura']}    rating={4.0} titulo='Transformer'/> 
        </div>
    );}
  }



  export default TiraPelicula