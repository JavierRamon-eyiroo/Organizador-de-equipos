import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div >
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programacion"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX y Diseno"/>
    </div>
  );
}

export default App; 
