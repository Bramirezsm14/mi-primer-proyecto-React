import React, { Component } from "react";
//import PropTypes from 'prop-types';// importamos prop types

class Gif extends Component {

  constructor(props) {
    super(props);
    this.state={
        gif:''
    }
  }
  apiCall(url,consecuencia){
      fetch(url)
        .then(response=> response.json())
        .then (data => consecuencia(data))
        .catch(error=>console.log(error));
        }
  
        traerGifNUevo(){
            this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G',this.mostrarGif)
        
          }

          
  componentDidMount() {
    console.log("Me monte");
    
    this.traerGifNUevo()
  }
 


  mostrarGif=(data)=>{
      console.log(data);
      this.setState({
          gif:data.data.image_url
      })
      
  }

  componentDidUpdate() {
    console.log("Me actualice");
    alert('Tengo un gif nuevo')
  }

  // linea 25 y 26 aca vamos a ejecuatr una funcion no solo asociarla  como Tira de pelicualas
  render() {
    console.log("Estoy renderizando ");
    
    let contenido;
    if(this.state.gif === ''){
        contenido=<p> Cargando...</p>
    }else{
        contenido=<img src={this.state.gif}></img>
    }



    return(
        <div>
        {contenido}
        <button onClick={()=>this.traerGifNUevo()}>Random Gif !</button>
        </div>
        
    );
  }
}
export default Gif;
