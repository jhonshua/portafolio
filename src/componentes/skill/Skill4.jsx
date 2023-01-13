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
        x: -1200,
      },
    })
  }

 return ( 



<div class={styles.conatiner1}>

<div class={styles.texto4}>

Como programador tengo conocimiento en JavaScript y sus librerías pero también en herramientas
que me permiten desarrollar mi actividades y procesos de forma más cómoda.



</div>
  

    <div class={styles.container2}>
     
          <animated.div
            onClick={handleClick}
            style={{
            position:'absolute',
            background: '#E9C719',
            height:120,
            width:680, 
            justifyItems: 'flex-end', 
            ...springs,
            }}
            >
              <div class={styles.imagenes4}>
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