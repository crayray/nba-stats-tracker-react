import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Container, Image } from "semantic-ui-react";
function NavBar() {
  return (
    <div className="App">
        <NavLink to="/">
        <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          NBA Stats
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Stats'>
          <Dropdown.Menu>
            <Dropdown.Item>Teams</Dropdown.Item>
            <Dropdown.Item>Players</Dropdown.Item>
            <Dropdown.Item>Favorites</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
      </NavLink>
    </div>
  );
}

export default NavBar;