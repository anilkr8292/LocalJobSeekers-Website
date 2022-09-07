import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

export const NavbarPage = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand logo-head" href="#">LocalJobSeekers
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <NavLink to='#'id='homee'><li className="nav-item active">
        <a className="nav-link">Home <span class="sr-only"></span></a>
      </li></NavLink>
      <NavLink to='#'id='signupp' ><li className="nav-item">
        <a className="nav-link" >Jobseekers</a>
      </li></NavLink>
      <NavLink to='#'id='profile' ><li className="nav-item">
        <a className="nav-link" >Profile</a>
      </li></NavLink>
      <NavLink to='#'id='Logout' ><li className="nav-item">
        <a className="nav-link" >Logout</a>
      </li></NavLink>
      <NavLink to='#' id='contactt'><li className="nav-item">
        <a className="nav-link">Contact</a>
      </li></NavLink>
    </ul>
  </div>
</nav>
    </>
  )
}
export default NavbarPage;
