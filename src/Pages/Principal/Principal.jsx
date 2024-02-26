import './Principal.css'
import imagen2 from '../../assets/imagen2.jpg'; // Importa la imagen
import { NavLink } from 'react-router-dom';


export const Principal = () => {
  return (
    <div>
      <div>
        <h1 className='tit'>Centro de Atención Médico</h1>
      </div>
      <div>
        <img src={imagen2}></img>
        <div className="card">
          <div className="div-card1">
          <NavLink className="agendar-cita" to="/agendar-cita" > AGENDAR CITA </NavLink>
          </div>
          <div className="div-card2">
          <NavLink className="consultar-cita" to="/consultar-cita" > CONSULTAR CITA </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
