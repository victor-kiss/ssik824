"use client"

import React   from 'react'

import {Navbar,Nav} from 'react-bootstrap'


import {NavbarStyle} from './style'

export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg"> 
            <Navbar.Brand href="/" className="fw-bold text-light m-2">
                824
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
                <i className="bi bi-list icon text-light"></i>
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
    </>
    )
}