
import imagen3 from '../../assets/imagen3.jpg'; // Importa la imagen
import { App } from '../Keyboard/App';
import './ConsultarCita.css'




export const ConsultarCita = () => {
    return (
        <>
        <div className='div2'>
            <img className='img2' src={imagen3}></img>

            <h1 className='tit2'>Digite su número de Cédula</h1>
        </div>
          
            <App /> 
          
          </>

            
            
            
       
    )
}