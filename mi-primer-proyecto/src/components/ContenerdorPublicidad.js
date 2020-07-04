import React from "react";



function ContenerdorPublicidad(props) {
    return (
        <div>
           
        <p>------inicio de espacio publicitario------</p>
        {props.children}
        {/*puede haber un sin fin de cosa */ }
        <p>------fin de espacio publicitario------</p>

        </div>
    );
  }



  export default ContenerdorPublicidad