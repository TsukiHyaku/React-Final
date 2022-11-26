import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}  from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">📚TuMangaShop📚</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogo
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mangas</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Buzos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Figuras </a></li>
          </ul>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contactanos</a>
        </li>
        <li>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar Articulo" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form> 
    </div>
    <FontAwesomeIcon  icon={faCartShopping} />
  </div>
</nav>
  )
}

export default NavBar