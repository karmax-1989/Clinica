import { Route, Routes } from "react-router-dom"
import { Routess } from "./Routess"
import { AgendarCita } from "../AgendarCita/AgendarCita"
import { ConsultarCita } from "../ConsultarCIta/ConsultarCita"


export const RoutesPrincipal = () => {
  return (

    <Routes>
    <Route path="/*" element={ <Routess /> } />
    <Route path="/agendar-cita" element={ <AgendarCita /> } />
    <Route path="/consultar-cita" element={ <ConsultarCita /> } />
    
    
    </Routes>
    
  )
}
