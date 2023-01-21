import React from 'react';
import Landing from '../Landing/Landing';
import About from '../about me/About';
import Skill from '../skill/Skill';
import Softskill1  from '../SoftSkill/SoftSkill1';
import Proyectos from '../proyectos/Proyectos';
import Contactame from '../contactame/Contactame';

const Pagina = () => {
  return (
    <div>
     <Landing/>
      <About/>
      <Skill/>
      <Softskill1/>
      <Proyectos/>
      <Contactame/>
    </div>
  )
}

export default Pagina
