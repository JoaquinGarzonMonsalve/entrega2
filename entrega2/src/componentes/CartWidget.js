import React from 'react';
import '../estilos/navbar.css'
import { Link } from'react-router-dom'






function CartWidget(){

    return(

      <Link to="/"> <img className='logo'
        

      src={require('../logo.png')

    }
    
    
    
    /> </Link>
        
        

     




    )
}

export default CartWidget;