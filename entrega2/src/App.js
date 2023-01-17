import { Routes, Route} from 'react-router-dom'
import './App.css';
import Mujeres from './pages/Mujeres';
import Hombres from './pages/Hombres';
import Todos from './pages/Todos';
import Navbar from './componentes/Navbar';


function App() {
     

      
      const bor = ()=>{ console.log('borrar')  };
      

     
  return (
    
     <div className="App">
       <div className='main'>

        <Navbar 
        cantidadTotales='15'/>

        <Routes className='productos'>

        

        <Route path="/" element={<Todos/>}/>
        <Route path="/mujeres" element={<Mujeres/>}/>
        <Route path="/hombres" element={<Hombres/>}/>


        </Routes>
      
      </div>
      </div>

     

  );
}

export default App;
