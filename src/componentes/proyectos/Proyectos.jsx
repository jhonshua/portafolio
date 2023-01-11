import React from 'react'
import './proyectos.css'

import github from './imagenes/github.png';
import GitHub1 from './imagenes/GitHub1.png'
import rickandMorty from './imagenes/rick and morty.png';
import aplicacion from './imagenes/aplicacion.png';
import pomodoro from './imagenes/proyecto2.png'
import reactyredux from './imagenes/react y redux.png';
import bootstrap from './imagenes/bootstrap.png';
import node from './imagenes/node.png';
import Figma from './imagenes/figma.png';
import react1 from './imagenes/react.png';
import Visual from './imagenes/visual studio.png'


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

                  <div><a href="http://jhonshua.github.io/rick-and-morty-/" target="_blank"><img  className='imagendeproyecto' src={rickandMorty} alt="" /></a></div> 
                        
                        <div className='contenedorinf'>
                          <div className='imgminiatura'> <img className='logotecnologia' src={reactyredux} alt="no found" /><img className='logotecnologia' src={bootstrap} alt=" no found" /><img className='logotecnologia' src={node} alt="no found" /></div>
                          <div className='titulocontenedor'>Consumo de API Rick and Morty</div>
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
                          <div className='imgminiatura'> <img className='logotecnologia' src={GitHub1} alt="no found" /><img className='logotecnologia' src={bootstrap} alt=" no found" /><img className='logotecnologia' src={Figma} alt="no found" /><img className='logotecnologia' src={react1} alt=" no found" /></div>
                          <div className='titulocontenedor'>Lista de tareas javascript</div>
                          <div className='comentariocontenedor'>
                            Programación bajo entorno de javascript, manejo de useState React, manejo de los hook react , formulario y filtros . Maquetacion y manejo de diversas herramientas de diseño.
                            deploy del proyecto, manejo de GitHub y Visual Estudio Code.
                          </div><hr />
                      </div>
               
                </div>

                <div className='contenedorproyecto' >

                  <div> <a href="https://jhonshua.github.io/App-pomodoro/" target="_blank"><img className='imagendeproyecto' src={pomodoro} alt="" /></a></div> 
                        
                        <div className='contenedorinf'>
                          <div className='imgminiatura'> <img className='logotecnologia' src={react1} alt="no found" /><img className='logotecnologia' src={Figma} alt=" no found" /><img className='logotecnologia' src={Visual} alt="no found" /></div>
                          <div className='titulocontenedor'>App-Pomodoro</div>
                          <div className='comentariocontenedor'>
                            Consumir api mediante React-js, se implementarón estilos con bootstrap.
                            Se trabajaron los estados con la libreria redux.
                            Al finalizar el proyecto se aprendió más de estas tecnologias, este proyecto esta más dirigido al frontend.
                          </div><hr />
                      </div>
               
                </div>




              

            <     div className='contenedor2proyectos'>
                  
                  <a href="https://github.com/jhonshua" target="_blank"><img className='imagenGit' src={github} alt="" /></a>  
                </div>
            



           


             
        
        
    </div>
  )
}

export default Proyectos