import React from 'react'

import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark radius-custom py-4">
  <div className="container-fluid">
    <a className="navbar-brand text-white ms-3" href="#"><img src={logo} alt="" className='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact us</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar