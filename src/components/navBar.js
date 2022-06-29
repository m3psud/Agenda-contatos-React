import React from "react";
import { Container, Nav, Navbar }  from "react-bootstrap" ;
import { Link } from "react-router-dom";

const NavBar = ()=> {
    return(
        
            <Navbar bg= "dark" variant= "dark">
                <Container fluid>
                 <Link to="/" className="Navbar-brand"> Contatos </Link>
                    <Nav className= "me-auto" >
                  <Link to="/New" className="Nav-link"> Novos </Link>
                   </Nav>
                </Container>
            </Navbar>
        
    )
    }
export default NavBar;