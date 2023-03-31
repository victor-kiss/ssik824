"use client"

import {Navbar,Nav} from 'react-bootstrap'
import styled from 'styled-components'

const NavbarStyle = styled.nav`
    nav.navbar{
  width:auto;
  padding:5px;
  margin-bottom:60px;
}


nav.navbar:before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(-45deg, #696eff 0%, #466dff 100% );
  transform: translate3d(0px, 5px, 0) scale(1);
  filter: blur(20px);
  opacity: var(0.7);
  transition: opacity 0.3s;
  border-radius: inherit;
}


nav.navbar::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  border-radius: inherit;
}
      

nav.navbar a.nav-link{
  color:#FFF;
  font-size:18px;
  margin:5px;
  cursor:pointer;
  font-weight:100;
  
  &:focus, &:hover, &:active{
     color:#FFF; 
    font-weight:600;
    font-size:20px;
    letter-spacing:2px;
    transition:.1s ease-in-out;
  }
}


.navbar-light .navbar-toggler {
  border-color:transparent;
  background:transparent;
}



div.navbar-nav a.nav-link{
  margin:0px 5px;
  padding:5px; 
}
`


export default function navbar() {
    return (
        <NavbarStyle>
            <Navbar expand="lg"> 
            <Navbar.Brand href="/" className="fw-bold text-light m-2">
                824
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/conhecimentos" rel="noreferrer" >Conhecimentos</Nav.Link>
                <Nav.Link href="/certificados" rel="noreferrer">Certificados</Nav.Link>
                <Nav.Link href="/sites" rel="noreferrer">Sites</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
        </Navbar>
    </NavbarStyle>
    )
}
