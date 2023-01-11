import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import Imagen1 from './imagenes/javscript.png';
import Imagen2 from './imagenes/html.png';
import Imagen3 from './imagenes/css.png'
import Imagen4 from './imagenes/figma.png'
import Imagen5 from './imagenes/visual studio.png'



const Skill = () => {

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))


  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 680,
      },
    })
  }

 return ( 



<div class={styles.conatiner1}>
  
    <div class={styles.container2}>
      
          <div class={styles.texto1}>

              Como Dev front-end creo interfaz gráfica de usuario de los sitio web, <br />
              mediante el uso de HTML, CSS y JavaScript, para que los clientes puedan <br />
              ver e interactuar con las aplicaciones.

          </div>
 
          <animated.div
            onClick={handleClick}
            style={{
            position:'absolute',  
            ...springs,
            }}


            class={styles.cajaLogos}

            >
              <div class={styles.imagenes}>
                    <img class={styles.img}  src={Imagen1} alt="no found" />
                    <img class={styles.img}  src={Imagen2} alt="no found" />
                    <img class={styles.img}  src={Imagen3} alt="no found" />
                    <img class={styles.img}  src={Imagen4} alt="no found" />
                   
                                          
              </div >
          </animated.div>
    </div>

<br />
           

</div>

 )
              
}

export default Skill