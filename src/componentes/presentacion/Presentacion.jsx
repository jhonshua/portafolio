import React from 'react';
import Particles from "./Particles/Particles"
import "./presentacion.css"
import Foto from './portadacolores 1.png'
import foto1 from './Developer Full Stack.png'
import foto2 from './Hola , me llamo Julio.png'
import foto3 from './Line 1.png'

const Presentacion = () => {
  return (


    <div>
                
           <div className='contenedorfotos'>

                  <div className='portada0'>
                      <img className='portada1' src={foto1} alt="no found" />
                      <img className='portada2' src={foto2} alt="no found" />
                      <img className='portada3' src={foto3} alt="no found" />
                  </div>

             <img className='portada' src={Foto} alt="no found" />

           </div>
            
      
            <Particles id="tsparticles" />
    </div>

  
  )
}

export default Presentacion;