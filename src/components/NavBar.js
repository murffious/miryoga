import React, { Component } from 'react';
import {Navbar, NavItem } from 'react-materialize';
import '../App.css';

// import logo from '../assets/MirYoga - 2 color.png';
import logo from '../assets/MirYoga - White.png';
// import logo from '../assets/MirYoga - Black.png';

  
class NavBar extends Component  {
render() {
  return (
    <Navbar href={logo} left className="nav-bar">
      <ul >
        <img src={logo} style={{width:"50px"}}/>
        {/* <NavItem href='get-started.html'>Schedule</NavItem>
        <NavItem href='components.html'>About</NavItem> */}
        </ul>
      </Navbar>
  );
}
}
  export default NavBar