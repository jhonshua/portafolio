import React from 'react';
import { Link } from "react-router-dom";
import Particles from "./Particles/Particles"
import "./presentacion.css"

const Presentacion = () => {
  return (


    <div>
                
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <div className='presentacion'>Bienvenido .</div>
            </Link>
            <Particles id="tsparticles" />
    </div>

  
  )
}

export default Presentacion