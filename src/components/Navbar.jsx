import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo só aparece se o menu estiver fechado */}
        {!menuOpen && (
          <a href="index.html#home-page" className="logo-link">
            <img src="public/svg/logo.svg" alt="Logo" className="logo" />
          </a>
        )}

        {/* Botão hamburguer */}
        <button
          className="hamburger-btn"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a onClick={closeMenu} href="index.html#home-page" className="nav-link" id='li-inicio'>Início</a></li>
          <li><a onClick={closeMenu} href="index.html#sobre" className="nav-link">Sobre</a></li>
          <li><a onClick={closeMenu} href="index.html#projetos" className="nav-link">Projetos</a></li>
          <li><a onClick={closeMenu} href="index.html#serviços" className="nav-link">Serviços</a></li>
        </ul>
      </nav>

      {/* Contato permanece sempre visível */}
      <a href="index.html#contato" className="nav-contato contato-btn">
        Contato
      </a>
    </>
  );
}

export default Navbar;
