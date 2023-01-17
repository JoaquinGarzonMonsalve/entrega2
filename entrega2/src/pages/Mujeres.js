import React from 'react'
import  '../estilos/mujeres.css'
import Card from '../componentes/Card'

function Mujeres() {
  return (
    <div>
    <div className='hombres'>
      <div className='card_hombres'>

      <Card
      nombre='zapato office'
      imagen='mujer1'
      precio='$45'
      />

      </div>
      

        <div>
        <Card
      nombre='zapato2'
      imagen='mujer2'
      precio='$40'
      />
        
        </div>

      

      <div>
      <Card
      nombre='zapato3'
      imagen='mujer3'
      precio='$55'
      />
        
        </div>

        <div>
      <Card
      nombre='zapato3'
      imagen='mujer4'
      precio='$55'
      />
        
        </div>


        

        <div>
      <Card
      nombre='zapato3'
      imagen='mujer5'
      precio='$55'
      />
        
        </div>

        <div>
      <Card
      nombre='zapato3'
      imagen='mujer6'
      precio='$55'
      />
        
        </div>

      


    </div>
    </div>
  )
}

export default Mujeres
