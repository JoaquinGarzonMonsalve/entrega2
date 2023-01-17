import '../estilos/boton.css'

import React from 'react'

function Boton({texto, agregar} ) {
  return (
    
        <button
        onClick={agregar}>
    {texto}
    </button>
      
    
  )
}

export default Boton
