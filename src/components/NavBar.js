import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize';
import '../App.css';

// import logo from '../assets/MirYoga - 2 color.png';
import logo from '../assets/MirYoga - White.png';
// import logo from '../assets/MirYoga - Black.png';
var Img = <img src={logo} width="50px"/>

  
class NavBar extends Component  {
render() {
  return (
    <Navbar  left className="nav-bar">
     
          <NavItem href='/'><Icon>home</Icon></NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/schedule'>Schedule</NavItem>
          <NavItem href='components.html'>Blog</NavItem>
         <li> <a  className="waves-effect waves-light social-icon btn">
                <i style={{lineHeight: "21px !important"}} className="fa fa-facebook"></i></a></li>
      </Navbar>
  );
}
}
  export default NavBar