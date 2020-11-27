import React, { useState } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";
import "assets/css/components/Navs.scss";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
};

const projectsMenuStyle = {
  padding: "0",
};

export const HeaderMenu = () => {
  const [active, seTactive] = useState(window.location.pathname);

  return (
    <Menu pointing secondary borderless style={menuStyle} widths={5}>
      <Menu.Item link as="a" href="/">
        Home
      </Menu.Item>
      <Menu.Item link as="a" href="/about" active={active === "/about"}>
        About Me
      </Menu.Item>
      <Menu.Item link as="a" href="/contact" active={active === "/contact"}>
        Contact
      </Menu.Item>
      <Menu.Item link as="a" href="/projects" active={active === "/projects"}>
        Projects
      </Menu.Item>
      <Menu.Item link as="a" href="/resume" active={active === "/resume"}>
        Resume
      </Menu.Item>

      {/* <Menu.Item link as="a" href="/blog" active={active.startsWith("/blog")}>
        Blog
      </Menu.Item> */}
    </Menu>
  );
};
