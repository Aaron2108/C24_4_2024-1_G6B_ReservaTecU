import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectRoute from './components/ProtectRoute'
import LoginPages from './pages/LoginPages'
import { useState } from 'react'
import InicioPage from './pages/InicioPage'
import RegisterPage from './pages/RegisterPage'
import PerfilPage from './pages/PerfilPage'

function App() {

  const [users, setusers] = useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPages />} />

                            {/*Rutas Protegidas*/}
      {/* <Route element={<ProtectRoute users={users}/>}>  */}
      <Route path='/inicio' element={<InicioPage redirectTo="/login"/>} />
      <Route path='/register' element={<RegisterPage redirectTo="/login"/>} />
      <Route path='/perfil' element={<PerfilPage redirectTo="/login"/>} />
      {/* </Route> */}
                            {/*Rutas Protegidas*/}  

    </Routes>

    </BrowserRouter>
  )
}

export default App
