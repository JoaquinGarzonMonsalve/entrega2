import React from 'react';
import '../estilos/card.css';
import Boton from './Boton';
import Sumador from './Sumador';
import { useState } from 'react';

function Card(props) {


  const [cantidad, setCantidad] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  
      const agre = ()=>{ setCantidad(console.log('agregar'))  };
      const sum = ()=>{ setCantidad(cantidad+1)  };

      //  while (cantidad > 0) {
        const res = ()=>{ setCantidad(cantidad-1)   };

      //  }
      
  return (
    <div className='contenedor_card' >

        <div className='contenedor_card--arriba'>
            <h3>{props.nombre}</h3>
            <img className='imagenVentas'
        
        

          src={require(`../imagenes/${props.imagen}.png`)} />

            <p>{props.precio}</p>

        </div>
        
        
            <div className='footer'>
              <div className='contenedor_cantidad'>

                   <Sumador funcion={res} simbolo='-'/> <p className='cantidades'>  {cantidad} </p> <Sumador funcion={sum} simbolo='+'/> 


              </div>
              
              <Boton
                texto ='AGREGAR'
                agregar={agre}
                
              />
               


            </div>
            
          </div>
  
  )
}

export default Card

