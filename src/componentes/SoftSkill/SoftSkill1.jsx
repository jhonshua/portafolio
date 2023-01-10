import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Imagen1 from './images/cerebro.png'
import "./styles.css";







const SoftSkill = () => {

  return (
    <>
      <div className='contenedor'>


    

        <Parallax       pages={3} enabled={true} innerStyle={ { backgroundColor: "#232946"  }} >
        
        <div className='titulo'> SoftSkill</div>


        <div className='contenido1'> Las habilidades emocionales o interpersonales son para mi aptitudes <br />
        fundamentales para deselvorvernos en nuestras labores diarias. <br />
        Poder tener una comunicacion efectiva se traducirá en una mayor productividad, 
        mejores resultados y en general, más ánimo.
        </div>

          <ParallaxLayer
            offset={1}
            speed={1}
            style={{  backgroundColor: "#232946" }}
          />


          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#8bd3dd" }}
          />

                   
                    <ParallaxLayer offset={1} speed={-0.2} style={{overflow: 'hidden', opacity: 0.6 }}>
                      
                      
                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ width: "50%", marginLeft: "20%" }}
                      /> 
                        
                         
                       

                    </ParallaxLayer>



                  


                    <ParallaxLayer offset={1} speed={0.8} style={{ overflow: 'hidden', opacity: 5 }}>
                      
                    <div className='titulo1'> Creatividad y Constanci...</div>

                    <div className='titulo3'>
                      Me siento inspirado en lo que hago y trato de transmitir ese sentimiento a mi equipo.
                    </div>




                    </ParallaxLayer>





                                                        
                    <ParallaxLayer offset={1} speed={0.8} style={{ overflow: 'hidden', opacity: 0.2 }}>
                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ display: "block", width: "50%", marginLeft: "55%" }}
                      />

                           

                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ display: "block", width: "40%", marginLeft: "15%" }}
                      />



                    </ParallaxLayer>

                    
                    <ParallaxLayer offset={2} speed={0} style={{overflow: 'hidden', opacity: 0.6 }}>
                      
                      

                      <img  className='cerebro'  src={Imagen1} alt="imagen no found" />

                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ display: "block", width: "50%", marginLeft: "10%" }}
                      />
                      
                       

                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ display: "block", width: "40%", marginLeft: "55%" }}
                      />
                      
                      <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ display: "block", width: "30%", marginRight: "55%" }}
                      />

                       

                    </ParallaxLayer>


        </Parallax>
      </div>
     
    </>
  );}

export default SoftSkill;