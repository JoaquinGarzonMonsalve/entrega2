import React from 'react'
import  Card from '../componentes/Card';
import '../estilos/hombres.css'

function Hombres() {
  return (
    <div>
    <div className='hombres'>
      <div className='card_hombres'>

      <Card
      nombre='zapato office'
      imagen='hombre1'
      precio='$45'
      />

      </div>
      

        <div>
        <Card
      nombre='zapato elegante'
      imagen='hombre3'
      precio='$40'
      />
        
        </div>

      

      <div>
      <Card
      nombre='zapato lujo'
      imagen='hombre2'
      precio='$55'
      />
        
        </div>

        <Card
      nombre='zapato lujo'
      imagen='hombre4'
      precio='$55'
      />


<Card
      nombre='zapato lujo'
      imagen='hombre5'
      precio='$55'
      />

      


    </div>
    </div>
  )
}

export default Hombres
