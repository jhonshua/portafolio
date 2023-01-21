import React from 'react'
import './proyectos.css'

import github from './imagenes/github.png';
import GitHub1 from './imagenes/GitHub1.png'
import rickandMorty from './imagenes/rick and morty.png';
import aplicacion from './imagenes/aplicacion.png';
import pomodoro from './imagenes/proyecto2.png'
import reactyredux from './imagenes/react y redux.png';
import bootstrap from './imagenes/bootstrap.png';
import typescrip from './imagenes/TypeScript Logo Vector.png'
import node from './imagenes/node.png';
import Figma from './imagenes/figma.png';
import react1 from './imagenes/react.png';
import Visual from './imagenes/visual studio.png';
import Clima from './imagenes/clima.png';
import convercion from './imagenes/convercio.png'
import food from'./imagenes/food.png';
import sql from './imagenes/pngwing.com (6).png';
import webpack from './imagenes/wedpack.png';
import npm from './imagenes/npm.png';
import veu from './imagenes/vue.png';
import git from './imagenes/git.png';
import mysql from './imagenes/mysql.png' 
import javascript from './imagenes/javascript.png'





const Proyectos = () => {
  return (
<div className='contenedordeproyectos'>
                      
  <div className='contenedordeinformacion'>

        <div className='contenedortitulopagina'>Mis Trabajos</div><hr className='linea'/><br />
        <div className='contenido'>

        Aquí hay una lista de la mayoría de los proyectos en los que he estado trabajando
        últimamente. Todo esto se creó durante mi aventura en el bootcamp <a href="https://www.soyhenry.com/webfullstack" target="_blank"><b>Henry</b> </a> , donde 
        estuve codificando durante  9 meses sin parar. Hasta que completé todos los proyectos
        necesarios para obtener mi certificación de <a href="https://henry-social-resources.s3.sa-east-1.amazonaws.com/assets/Henry+-+Programa+Web+Full+Stack.pdf" target="_blank"><b>Desarrollador Full-Stack.</b> </a> 

        </div>

  </div>




  <div className='contenedorproyecto' >

<div> <a href="https://deploy-jet-seven.vercel.app/" target="_blank"><img className='imagendeproyecto' src={food} alt="" /></a></div> 
      
      <div className='contenedorinf'>
        <div className='imgminiatura'> <img className='logotecnologia' src={reactyredux} alt="no found" /><img className='logotecnologia' src={sql} alt=" no found" /><img className='logotecnologia' src={webpack} alt="no found" /><img className='logotecnologia' src={npm} alt="no found" /></div>
        <div className='titulocontenedor'>App - Recetas.</div>
        <div className='comentariocontenedor'>
        Construir una App utlizando React, Redux, Node y Sequelize. 
        Afirmar y conectar los conceptos aprendidos en la carrera.
        Aprender y practicar el workflow de GIT.
        Usar y practicar testing.
        El boilerplate cuenta con dos carpetas: api y client. En estas carpetas estará el código del back-end y el front-end respectivamente.(el codigo se puede ver en el enlace de mi github)
        </div><hr />
    </div>

</div>
                
  <div className='contenedorproyecto' >

<div><a href="http://jhonshua.github.io/rick-and-morty-/" target="_blank"><img  className='imagendeproyecto' src={rickandMorty} alt="" /></a></div> 
      
      <div className='contenedorinf'>
        <div className='imgminiatura'> <img className='logotecnologia' src={reactyredux} alt="no found" /><img className='logotecnologia' src={bootstrap} alt=" no found" /><img className='logotecnologia' src={node} alt="no found" /></div>
        <div className='titulocontenedor'>Consumo de API Rick and Morty.</div>
        <div className='comentariocontenedor'>
          Consumir api mediante react-js, se implementarón estilos con bootstrap .
          se trabajaron los estados con la libreria redux.
          Al finalizar el proyecto se aprendió más de estas tecnologias, este proyecto esta más dirigido al front-end.
        </div><hr />
    </div>

</div>


<div className='contenedorproyecto' >

<div> <a href="https://jhonshua.github.io/lista_to-do-react/" target="_blank"><img className='imagendeproyecto' src={aplicacion} alt="" /></a></div> 
      
      <div className='contenedorinf' id="test1">
        <div className='imgminiatura'> <img className='logotecnologia' src={mysql} alt="no found" /><img className='logotecnologia' src={bootstrap} alt=" no found" /><img className='logotecnologia' src={Figma} alt="no found" /><img className='logotecnologia' src={veu} alt=" no found" /></div>
        <div className='titulocontenedor'>Lista de tareas javascript.</div>
        <div className='comentariocontenedor'>
          Programación bajo entorno de javascript, manejo de libreria Vue, formulario y filtros . Maquetacion y manejo de diversas herramientas de diseño.
          deploy del proyecto, manejo de GitHub y Visual Estudio Code.
        </div><hr />
    </div>

</div>

<div className='contenedorproyecto' >

<div> <a href="https://jhonshua.github.io/App-pomodoro/" target="_blank"><img className='imagendeproyecto' src={pomodoro} alt="" /></a></div> 
      
      <div className='contenedorinf'>
        <div className='imgminiatura'> <img className='logotecnologia' src={react1} alt="no found" /><img className='logotecnologia' src={Figma} alt=" no found" /><img className='logotecnologia' src={Visual} alt="no found" /></div>
        <div className='titulocontenedor'>App-Pomodoro.</div>
        <div className='comentariocontenedor'>
          Consumir api mediante React-js, se implementarón estilos con bootstrap.
          Se trabajaron los estados con la libreria redux.
          Al finalizar el proyecto se aprendió más de estas tecnologias, este proyecto esta más dirigido al frontend.
        </div><hr />
    </div>

</div>






<div className='contenedorproyecto' >

<div> <a href="https://jhonshua.github.io/App-Clima/" target="_blank"><img className='imagendeproyecto' src={Clima} alt="" /></a></div> 
      
      <div className='contenedorinf'>
        <div className='imgminiatura'> <img className='logotecnologia' src={javascript} alt="no found" /> <img className='logotecnologia' src={bootstrap} alt="no found" /><img className='logotecnologia' src={typescrip} alt=" no found" /><img className='logotecnologia' src={react1} alt="no found" /></div>
        <div className='titulocontenedor'>App - Clima.</div>
        <div className='comentariocontenedor'>
          Consumir api mediante React-js, se implementarón estilos con bootstrap.
          Al finalizar el proyecto se aprendió más de estas tecnologias utilizadas,
          y de los diseños responsive.
          este proyecto esta más dirigido al frontend.
        </div><hr />
    </div>

</div>


<div className='contenedorproyecto' >

<div> <a href="https://jhonshua.github.io/App-convercion-monedas/" target="_blank"><img className='imagendeproyecto' src={convercion} alt="" /></a></div> 
      
      <div className='contenedorinf'>
        <div className='imgminiatura'><img className='logotecnologia' src={git} alt="no found" /> <img className='logotecnologia' src={bootstrap} alt="no found" /><img className='logotecnologia' src={typescrip} alt=" no found" /><img className='logotecnologia' src={react1} alt="no found" /></div>
        <div className='titulocontenedor'>App - Conversion de monedas fiat.</div>
        <div className='comentariocontenedor'>
       Realizamos una App qe calcula el precio del USD al precio del dia por el BCV en esta app consumimos una api con una 
       peticion post utilizando axios y la libreria React , dimos estilos con css y bootstrap 5.
        </div><hr />
    </div>

</div>
           

<div className='contenedor2proyectos'>
    <a href="https://github.com/jhonshua" target="_blank"><img className='imagenGit' src={github} alt="" /></a>  
</div>
             
        
        
  </div>
  )
}

export default Proyectos;