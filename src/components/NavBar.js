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
          <NavItem href='/about'>About MirYoga</NavItem>
          <NavItem href='/schedule'>Schedule a Session</NavItem>
          <NavItem href='/miryoga-blog'>Blog</NavItem>
          <a  className="waves-effect waves-light social-icon btn" href='https://www.facebook.com/jennmholden/' target="_blank">
                <i id="facebook-logo" className="fa fa-facebook"></i></a>
      </Navbar>
  );
}
}
  export default NavBar