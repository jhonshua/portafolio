import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import  Imagen11 from './imagenes/visual studio.png';
import  Imagen12 from './imagenes/git.png';
import  Imagen13 from './imagenes/npm.png';
import  Imagen14 from './imagenes/postman.png';

const Skill4 = () => {

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

Como dev tenco conocimiento en  Jvascript y sus librerias pero tambien en herramientas
que me permiten desarrollar mi actividades y procesos de forma mas comoda.


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
                    <img class={styles.img}  src={Imagen11} alt="no found" />
                    <img class={styles.img}  src={Imagen12} alt="no found" />
                    <img class={styles.img}  src={Imagen13} alt="no found" />
                    <img class={styles.img}  src={Imagen14} alt="no found" />                    
                   

                    
              </div >
          </animated.div>
    </div>

<br />
           

</div>

 )
              
}

export default Skill4;