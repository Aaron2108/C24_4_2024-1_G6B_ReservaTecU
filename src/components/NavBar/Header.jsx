import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './navBar.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Asegúrate de que setusers está definido o importado
    // setusers(null);
    navigate("/login");
  }

  return (
    <>
      <header className="header_login">
        <img className="img_logo" src="/img/TECSUP.png" alt="Logo" />
        <article className='hamburguesa'>
        <i className='bx bx-list-ul icon' style={{ color: '#060606' }}></i>
        </article>
    </header>
    </>
  );
}

export default Header;
