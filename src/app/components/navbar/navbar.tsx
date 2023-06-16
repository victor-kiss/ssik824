"use client"

import {Navbar,Nav} from 'react-bootstrap'


export default function navbar() {
    return (
            <Navbar expand="lg"> 
            <Navbar.Brand href="/" >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ad84ff" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
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
    )
}
