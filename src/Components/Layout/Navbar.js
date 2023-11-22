import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo.jpg"

const Navbar = () => {
return(
    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
  <div className="container-fluid">
    <img src={logo} alt = "logo" style={{height: "5%", width: "5%", borderRadius:"40px"}} className="logo m-3 "/>
    <Link className="navbar-brand" exact = "true" to="/">UMS APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" exact = "true" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact = "true" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" exact = "true" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" exact = "true" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
);
}
export default Navbar;