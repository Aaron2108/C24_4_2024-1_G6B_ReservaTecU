import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './navBar.css';
import { Link, useNavigate } from "react-router-dom";
import Logout from '../Logout';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='navBar'>
      <ul className='ul_navBar'>
        <li className='li_navBar'><Link to="/inicio">Inicio</Link></li>
        <li className='li_navBar'><Link to="/perfil">Perfil</Link></li>
        <li className='li_navBar'><Link to="/reservasTecsup">Reservas Tecsup</Link></li>
        <li className='li_navBar'><Link to="/reservas">Mis reservas</Link></li>
        <Logout />
      </ul>
    </header>
  );
}

export default Header;
