import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  fontSize: "1.5rem",
};
const projectsMenuStyle ={
  padding: "0"
}


export const SideMenu = () => {
  return (
    <Menu vertical borderless fluid style={menuStyle}>
      <Menu.Item link as="a" href="/">
        Home
      </Menu.Item>
      <Menu.Item link as="a" href="/about">
        About Me
      </Menu.Item>
      <Menu.Item link as="a" href="/contact">
        Contact
      </Menu.Item>
      <Menu.Item style={projectsMenuStyle}>
        <Dropdown item compact text="Projects" fluid>
          <Dropdown.Menu direction="left" scrolling={false}>
            <Dropdown.Item>All Projects</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Computer Science</Dropdown.Item>
            <Dropdown.Item>Other projects</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

			<Menu.Item link as="a" href="/blog"> Blog </Menu.Item>
    </Menu>
  );
};
