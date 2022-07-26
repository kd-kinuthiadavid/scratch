import React from "react";
import styled from "styled-components";
import { imagesLoaer } from "../../utils";

const NavBar = () => {
  const logoURL = imagesLoaer("Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg");
  return (
    <Nav>
      <img src={logoURL} alt="Scratch Logo" />
    </Nav>
  );
};

const Nav = styled.nav``;

export default NavBar;
