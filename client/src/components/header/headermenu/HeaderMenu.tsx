import React from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
}

export const HeaderMenu = () => {
  return (
    <Menu pointing secondary borderless style={menuStyle} fluid>
      <Menu.Item >Home</Menu.Item>
      <Menu.Item link as="a" href="/about" >About Me</Menu.Item>
      <Menu.Item link as="a" href="/contact" >Contact</Menu.Item>
      <Menu.Menu>
        <Dropdown text="Projects" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Item link as="a" href="/projects"> All Projects </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>Computer Science</Dropdown.Item>
            <Dropdown.Item>Other projects</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>

      <Menu.Item as="a"> Blog </Menu.Item>
    </Menu>
  );
};
