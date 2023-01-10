import React from 'react';
import './About.css'
import { Parallax} from "react-parallax";






  const insideStyles = {
  
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };


const image4 = "https://images.pexels.com/photos/13831431/pexels-photo-13831431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const About = () => {



  return (



    <div className='ContenedorAbout'>

  

<Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(253, 255, 255, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 900,
              height: percentage * 900
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 600 }}>
        
        <div style={insideStyles}>
          <div className='titulo6'>Acerca de mi</div>
          <div className='contenido4'>
        <p>Hola me llamo Julio, soy ingeniero electronico y Programados Full-Stack.</p>
        <p>vivo en Caracars -Venezyela pais lleno de gente amable, de playas y mar caribe.</p>
        <p>Me considero amable Humanista,  y dispuesto a afrontar nuevos retos.</p>
        <p>Creo que el trabajo en equipo y la constancia es la clave de el exito.</p>
        <p>Esperando a esa persona me la oportunidad de pertenecer a su equipo y </p><p> poder demostrar de lo que soy capaz.</p>
        <p>Me encanta los deportes en especial los sub acuaticos como la apnea.</p>
         
          </div>
      
        </div>
        

      </div>
    </Parallax>
   
      
    </div>
  )
}

export default About;
