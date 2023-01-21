import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import  Imagen7 from './imagenes/react.png';
import  Imagen8 from './imagenes/redux.png';

import  Imagen10 from './imagenes/phothophso.png';
import  Imagen11 from './imagenes/bootstrap.png';

const Skill2 = () => {

  const [springs, api] = useSpring(() => ({
    from: { x: -630 },
  }))


  const handleClick = () => {
    api.start({
      from: {
        x: -630,
      },
      to: {
        x: -1200,
      },
    })
  }

 return ( 



<div class={styles.conatiner1}>

<div class={styles.texto2}>

Manejo diversas librerias de javascript para el desarrollo 
de la interfaz para mediante mis diseños llevando la 
experiencia de usario a su mas alto nivel.


</div>
  

    <div class={styles.container2}>
     
    <animated.div
            onClick={handleClick}
            style={{
            position:'absolute',  
            ...springs,
            }}


            class={styles.cajaLogos2}

            >
              <div class={styles.imagenes2}>
                    <img class={styles.img}  src={Imagen7} alt="no found" />
                    <img class={styles.img}  src={Imagen8} alt="no found" />
                    <img class={styles.img}  src={Imagen10} alt="no found" />
                    <img class={styles.img}  src={Imagen11} alt="no found" />                    
                   

                    
              </div >
          </animated.div>
    </div>

<br />
           

</div>

 )
              
}

export default Skill2;