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
          <div className='titulo6'>Acerca de mí</div>
          <div className='contenido4'>
<p> Hola me llamo Julio, soy ingeniero electrónico y Programador Full-Stack.</p>

<p>Vivo en Caracas-Venezuela país lleno de gente amable, playas y montañas.</p> 

 <p> Me considero amable, humanista y dispuesto  afrontar nuevos retos.</p>

 <p>Me encantan los deportes en especial los sub acuáticos como la apnea.</p>        

   <p>Creo que el trabajo en equipo y la constancia es la clave del éxito.</p>     

   <p>Esperando a esa persona que me de la oportunidad, de pertenecer a su equipo y</p>   

   <p> poder demostrar de lo que soy capaz.</p>    

      

         
          </div>
      
        </div>
        

      </div>
    </Parallax>
   
      
    </div>
  )
}

export default About;
