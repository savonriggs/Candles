import React from 'react'
import {Nav, NavIcon, NavLink, Bars} from './navBarElements'


const NavBar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to= "/">JasLovelyCandles</NavLink>
            <NavIcon onClick={toggle}>
                <p>Candles List</p>
                <Bars />
            </NavIcon>
        </Nav>
        
    </>
  )
}

export default NavBar