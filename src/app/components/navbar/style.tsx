'use client'

import styled from "styled-components"

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

    &:hover, &:active, &:focus{
        color:#FFF; 
        font-weight:600;
        font-size:20px;
        letter-spacing:2px;
        transition:.1s ease-in-out;
    }
}




// mobile button background

.navbar-light .navbar-toggler {
    border-color:transparent;
    background:transparent;
}

// mobile version

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px; 
}
`


export {NavbarStyle}