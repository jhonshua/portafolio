import './App.css';
import About from './componentes/about me/About';
import Skill from './componentes/skill/Skill';
import Softskill1  from './componentes/SoftSkill/SoftSkill1';
import Proyectos from './componentes/proyectos/Proyectos';
import Contactame from './componentes/contactame/Contactame';
import Presentacion from './componentes/presentacion/Presentacion';






function App() {


  return (

    
   <div>
     <Presentacion/>
      <About/>
      <Skill/>
      <Softskill1/>
      <Proyectos/>
      <Contactame/>
    </div>
 
  );
}

export default App;
