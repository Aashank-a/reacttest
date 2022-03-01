import React from 'react'
import Logo from "../../image/logo.png"
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
export default function Navbar() {
 
  
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar_top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <img src={Logo} alt="" width="60" height="60"
                    class="d-inline-block " /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link active" to="/score">Score card</Link>
                        </li>
                   


                    </ul>
                </div>

            </div>

        

        </nav>)
}

