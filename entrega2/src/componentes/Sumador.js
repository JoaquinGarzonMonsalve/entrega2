import React from 'react'
import '../estilos/sumador.css'

function Sumador({ simbolo, funcion}) {
  return (
    <div>

        <div className='sumador'
        onClick={funcion}

    
        >

        {simbolo}
        
      
    </div>

    </div>
    
  )
}

export default Sumador
