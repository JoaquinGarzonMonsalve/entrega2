import React from 'react'
import CartWidget from './CartWidget';
import '../estilos/navbar.css'
import { Link } from'react-router-dom'


function Navbar(props) {
  return (
   
        
    <div className='contenedor'>
      <div className='contenedor-logo'>

        <CartWidget/>
        

      </div>

      <div className='contenedor-nav'>

         <Link to="/"> <p className='home'> Home</p> </Link>{" "}
         <Link to="/mujeres"><p>Mujeres</p> </Link>{" "}
         <Link to="/hombres"> <p>Hombres</p> </Link>{" "}


          <div className='contenedor-carrito'>

            <img className='carrito'
            src={require('../carrito.png')}
            />

            <p className='cantidad'>{props.cantidadTotales}</p>

          </div>
      
    </div>
    </div>
  )
}

export default Navbar;
