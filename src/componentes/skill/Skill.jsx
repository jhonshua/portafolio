import React from 'react';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./stylesSkill.css";
import skill1 from './imagenes/skill1.png';
import skill2 from './imagenes/skill2.png';
import skill3 from './imagenes/skill3.png';
import skill4 from './imagenes/skill4.png';
import skill5 from './imagenes/skill5.png';


const Skill = () => {



  return (


    <div className='ContainerSkill' >



    <div className='ContenedoresFotos'>

    <div className="titleSkill">Skill</div>

    
          
    <ParallaxProvider>
    

    <Parallax   translateX={[-20,0, 'easeOutQuint']}  opacity= {[0,1.5]} >
        <img className='skill1' src={skill1} alt="no found" />
      </Parallax>
  </ParallaxProvider>

   <ParallaxProvider>
    
<br/>
<br/>
    <Parallax   translateX={[-20,0, 'easeOutQuint']}  opacity= {[0,1]} >
    <img className='skill1' src={skill2} alt="no found" />
      </Parallax>
  </ParallaxProvider>

   <ParallaxProvider>
    
  <br/>
<br/>
    <Parallax   translateX={[-20,0, 'easeOutQuint']}  opacity= {[0,1]} >
    <img className='skill1' src={skill3} alt="no found" />
      </Parallax>
  </ParallaxProvider>

   <ParallaxProvider>
    
  <br/>
<br/>
    <Parallax   translateX={[-20,0, 'easeOutQuint']}  opacity= {[0,1]} >
    <img className='skill1' src={skill4} alt="no found" />
      </Parallax>
  </ParallaxProvider>

  <ParallaxProvider>
    
  <br/>
<br/>
    <Parallax   translateX={[-20,0, 'easeOutQuint']}  opacity= {[0,1]} >
    <img className='skill1' src={skill5} alt="no found" />
      </Parallax>
  </ParallaxProvider>


  


  </div>



    </div>
  )
}

export default Skill
