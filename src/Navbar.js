import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Image } from "semantic-ui-react";
function NavBar(props) {
  return (
    <div className="App">
        <NavLink to="/">
        <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png' style={{ marginRight: '1.5em' }} />
          NBA Stats
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'><NavLink to='/signup'>Login</NavLink></Menu.Item>
        <Menu.Item as='a'><NavLink to='/signup'>Sign Up</NavLink></Menu.Item>
        
      </Container>
    </Menu>
      </NavLink>
    </div>
  );
}

export default NavBar;
