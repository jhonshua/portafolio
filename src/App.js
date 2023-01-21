import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Presentacion from './componentes/presentacion/Presentacion';
import Pagina from './componentes/paginas/Pagina'





function App() {



  
  return (




 
      
  

      <Routes>

      <Route path="/portafolio" element={<Presentacion   />}/>
      <Route path="/home" element={<Pagina />} /> 
      
      </Routes>
 


   
  );
}

export default App;
