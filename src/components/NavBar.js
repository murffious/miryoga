import React, { Component } from 'react';
import {Navbar, NavItem } from 'react-materialize';
import '../App.css';

// import logo from '../assets/MirYoga - 2 color.png';
import logo from '../assets/MirYoga - White.png';
// import logo from '../assets/MirYoga - Black.png';
var Img = <img src={logo} width="50px"/>

  
class NavBar extends Component  {
render() {
  return (
    <Navbar href="/" brand={Img} right className="nav-bar">
    
      
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/schedule'>Schedule</NavItem>
          <NavItem href='components.html'>Blog</NavItem>
         
      </Navbar>
  );
}
}
  export default NavBar