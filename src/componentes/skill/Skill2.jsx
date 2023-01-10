import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import  Imagen7 from './imagenes/react.png';
import  Imagen8 from './imagenes/redux.png';

import  Imagen10 from './imagenes/phothophso.png';
import  Imagen11 from './imagenes/bootstrap.png';

const Skill2 = () => {

  const [springs, api] = useSpring(() => ({
    from: { x: -700 },
  }))


  const handleClick = () => {
    api.start({
      from: {
        x: -700,
      },
      to: {
        x: -1400,
      },
    })
  }

 return ( 



<div class={styles.conatiner1}>

<div class={styles.texto2}>

manejo diversas librerias de javascript para el esarrollo de Las interfaz   <br />
tratando de mantenerme actualizado para mediante mis diseños
llevando la esperiencias de usario a su mas alto nivel


</div>
  

    <div class={styles.container2}>
     
          <animated.div
            onClick={handleClick}
            style={{
            position:'absolute',
            background: '#E9C719',
            height:120,
            width:700, 
            justifyItems: 'flex-end', 
            ...springs,
            }}
            >
              <div class={styles.imagenes}>
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