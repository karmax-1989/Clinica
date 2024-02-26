
import './AgendarCita.css'
import { useState } from 'react'
import axios from 'axios'


export const AgendarCita = () => {

  const [ formValue, setFormValue ] = useState({});

  const changeForm = ({ target }) => {
    const{ name,value } = target;
    setFormValue({...formValue, [name]: value });
    console.log(formValue);
  }
  
    
  
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('https://lab.globho.com/api/integration/appointment?api_key="patient"',formValue)
    .then(response=> {console.log(response)})
        
    }

    return (
        <>
        <div className='containerRegister'>
            
            <h1 className='registerh1'>AGENDAR CITA</h1>
        </div>
      <form onSubmit={ onSubmit }>
        <h1>DATOS DE USUARIO</h1>
        <div>
          <label>Numero de Documento: </label>
          <input name="id" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>Tipo de Documento: </label>
          <input name="identificationType" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>PRIMER NOMBRE: </label>
          <input name="firstName" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>SEGUNDO NOMBRE: </label>
          <input name="secondName" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>PRIMER APELLIDO: </label>
          <input name="firstlastName" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>SEGUNDO APELLIDO: </label>
          <input name="secondlastName" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>Correo Electrónico: </label>
          <input name="email" type="text" onChange={ changeForm }></input>
        </div>
        <div>
          <label>Teléfono: </label>
          <input name="phone" type="text" onChange={ changeForm }></input>
        </div>
        

        <button type="submit">Entrar</button>
        
      </form>
   </>
  )
}


        

            
            
            
    