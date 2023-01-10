import React from 'react';
import styles from './styles.module.css'
import { useSpring, animated } from '@react-spring/web'
import  Imagen12 from './imagenes/node.png';
import  Imagen13 from './imagenes/sequelize.png';
import  Imagen14 from './imagenes/sql.png';
import  Imagen15 from './imagenes/github.png';
import  Imagen16 from './imagenes/git.png';


const Skill3 = () => {

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))


  const handleClick = () => {
    api.start({
      from: {
        x: 60,
      },
      to: {
        x: 700,
      },
    })
  }

 return ( 



<div class={styles.conatiner1}>
  
    <div class={styles.container2}>

    <div class={styles.texto1}>

Como Dev manejo javascript uno de los mas  versatiles lenguajes gracias Node js, <br />
  podiendo ejecutar programas tanto en frontend como del lado del servidor <br />
 y realizando conexciones a bases de datos.

</div>
     
          <animated.div
            onClick={handleClick}
            style={{
            position:'absolute',
            background: '#E9C719',
            height:120,
            width:700,
        
            ...springs,
            }}
            >
              <div class={styles.imagenes}>
                    <img class={styles.img}  src={Imagen12} alt="no found" />
                    <img class={styles.img}  src={Imagen13} alt="no found" />
                    <img class={styles.img}  src={Imagen14} alt="no found" />
                    <img class={styles.img}  src={Imagen15} alt="no found" />
                                       
              </div >
          </animated.div>
    </div>

<br />
           

</div>

 )
              
}

export default Skill3;