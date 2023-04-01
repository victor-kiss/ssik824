"use client"

import {Navbar,Nav} from 'react-bootstrap'
import styled from 'styled-components'

const NavbarStyle = styled.nav`
  nav.navbar{
  width:auto;
  padding:5px;
  margin-bottom:60px;
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
