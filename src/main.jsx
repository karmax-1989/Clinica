import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { RoutesPrincipal } from './Pages/App/RoutesPrincipal';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RoutesPrincipal />
    </BrowserRouter>  
  </React.StrictMode>,
)
