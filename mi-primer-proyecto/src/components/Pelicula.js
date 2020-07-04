import React from "react";
import PropTypes from 'prop-types';// importamos prop types 
import './Pelicula.css';

function Pelicula(props) {
    //let rating=5.8
    //let generos = ["Accion", "Drama"];
    let listadoDeGeneros;
if(props.generos!=null){
    listadoDeGeneros=
    <ul>
        {props.generos.map((genero,i)=> <li key={genero+i}>{genero}</li>)}
    </ul>
}else{
    listadoDeGeneros='';
}

    return (
        <div>
            <h2 className="sarasa"> {props.titulo} </h2>
            <p> Rating: {props.rating} </p>
                {listadoDeGeneros}
            
        </div>
    );
}

Pelicula.defaultProps={
    rating:'Esta pepli aun no fue putuada',
    generos:null
}

Pelicula.propTypes={
    rating:PropTypes.number,/* pasando  un dato a las variables */
    titulo:PropTypes.string
}// Esto es para darle prolijidad y seguridad al proyecto 

export default Pelicula;
