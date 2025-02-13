import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header" id="home">
      <a className="logo" href="#">Amal Nisha</a>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className="mobile-nav">
          <ul onClick={() => setToggleMenu(false)} className="mobile-nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      <button onClick={() => setToggleMenu(!toggleMenu)} className="menu-button" >
        <i className="fa-solid fa-bars menu-icon"></i>
      </button>
    </header>
  );
}