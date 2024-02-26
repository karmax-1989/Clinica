import { Route, Routes } from "react-router-dom"
import './Routess.css'
import { Principal } from "../Principal/Principal"




export const Routess = () => {
  return (
    <>
    
    

    <Routes>
      <Route path="/*" element={ < Principal /> } />
      
    </Routes>
    </>
  )
}
