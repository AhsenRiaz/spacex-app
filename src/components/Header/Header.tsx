import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from "react-bootstrap"
import spacex from "./Images/spacex.png"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className="Header_wrapper">
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
              <Link to = "/"><img src={spacex} width = {200} alt={spacex} /></Link>  
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <div className = "menu1">
                        <Link to = "/">Home</Link> 
                        </div>
                        <div className = "menu2">

                        <Link to = "/missions"> Mission</Link>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header
