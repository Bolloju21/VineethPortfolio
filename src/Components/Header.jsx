import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const NavLinks = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>My Portfolio</h1>
      <NavLinks>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;