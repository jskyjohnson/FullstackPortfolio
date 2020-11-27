import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "assets/css/components/Navs.scss";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  fontSize: "1.5rem",
};
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
      <Menu.Item link as="a" href="/projects" >
       Projects
      </Menu.Item>
      <Menu.Item link as="a" href="/resume" >
       Resume
      </Menu.Item>

      {/* <Menu.Item link as="a" href="/blog">
        {" "}
        Blog{" "}
      </Menu.Item> */}
    </Menu>
  );
};
