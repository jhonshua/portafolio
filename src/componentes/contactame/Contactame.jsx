import React from 'react';
import '../contactame/imagenes/contactame.css'
import correo from './imagenes/correo.png'
import pdf from './imagenes/pdf.png'
import linkins from './imagenes/linki.png'




const Contactame = () => {

   
      return (
<div className='contenedorContactame' >

       

        <form action="" className="contactame" >

      <div><img src={correo} className="correologo" alt="" />nombre<input type="text" className="nombre" /><hr /></div> 
      <div>correo<input type="text" className="correo" /><hr /></div>      
      <div>mensaje <input type="text" name="" id="" className="mensaje"/><hr /></div> 
        </form>

        <div className='imagenes55'><a href="http://"><img src={linkins} className='linkin' alt="no found" /></a><a href="http://"><img   className='pdf' src={pdf} alt="" /></a></div>

</div>

       



      )
    }

export default Contactame;