import React from 'react';
import '../contactame/imagenes/contactame.css'
import correo from './imagenes/correo.png'
import pdf from './imagenes/pdf.png'
import linkins from './imagenes/linki.png'




const Contactame = () => {

   
      return (
<div className='contenedorContactame' >

       

              <form action="https://formsubmit.co/julio.llinas@gmail.com" method="POST" alt="no found" className="contactame" >
              <div><img src={correo} className="correologo" />Nombre:<input type="text" name="name" className="nombre" required/><hr /></div>
              <div>correo:<input type="text" name="correo" className="correo" required/><hr /></div>   
              <div>mensaje:<input type="text" name="mensaje"  className="mensaje" required/><hr /></div> 
              <input type="hidden" name='_next' value="https://jhonshua.github.io/portafolio/" />
            <input type="hidden" name='_captcha' value="false" />

            <button type="submit" className="btn btn-secondary">enviar</button>
            
              </form>
              <div className='imagenes55'>  <a href="https://www.linkedin.com/feed/" target="_blank" alt="no found"><img src={linkins} className='linkin' alt="no found" /></a> <a href="https://drive.google.com/file/d/1VSRmz8hbn7NYHF1xGBTBiHnNyK1cnh9m/view?usp=share_link"  target="_blank"><img   className='pdf' src={pdf} alt="no found" /></a></div>
    
</div>

       



      )
    }

export default Contactame;
