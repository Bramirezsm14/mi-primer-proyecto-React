import React, { Component } from "react";
//import PropTypes from 'prop-types';// importamos prop types
import "./Pelicula.css";


class Contador extends Component {
  constructor(props) {

    
    
    super(props);
    this.state = {
      numero: props.inicial,
    };
    
    
    
    
  }
  incrementar() {
    this.setState({ numero: this.state.numero + 1 });
  }

  decrementar() {
    this.setState({ numero: this.state.numero - 1 });
  }
  
  componentDidMount(){
      console.log('Me monte');
      
  } 

  componentDidUpdate(){
      console.log('Me actualice');
      
  }
  // linea 25 y 26 aca vamos a ejecuatr una funcion no solo asociarla  como Tira de pelicualas
  render() {
    console.log("Estoy renderizando ");

    return (
      <div>
        <p>Soy el numero {this.state.numero}</p>
        <button onClick={() => this.incrementar()}>Incrementar</button>
        <button onClick={() => this.decrementar()}>Decrementar</button>
      </div>
    );
  }
}
export default Contador;
