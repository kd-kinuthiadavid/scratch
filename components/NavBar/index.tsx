import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { imagesLoaer } from "../../utils";

const NavBar = () => {
  const logoURL = imagesLoaer(
    "Logos/Desktop/Logoscratch_logo_SzQC08Uhz.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1652158985133"
  );
  return (
    <Nav>
      <Image
        src={logoURL}
        width={200}
        height={50}
        alt="Scratch Logo"
        quality={100}
      />
    </Nav>
  );
};

const Nav = styled.nav``;

export default NavBar;
