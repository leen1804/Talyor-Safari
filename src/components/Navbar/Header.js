import React, { useState } from 'react';
import styled from 'styled-components';
import yourImage4 from '../../imgs/MobileLogoSepia2 1.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  height: 20vh;
  color: #8B4513;
  padding-left: 95px;
  padding-right: 150px;
  padding-top: 60px;
  @media (max-width: 568px) {
    padding-top: 12px;
    padding-left: 183px;
    padding-bottom: 46px;
  }
`;

const Logo = styled.div`
  width: 20px;
  height: 130px;
  background-color: grey;
  @media (max-width: 568px) {
    height: 69px;
  }
  @media (min-width: 1200px) {
    font-size: 48px;
    margin-right: 30px;
  }
  img {
    width: auto;
    height: 130px;
    @media (max-width: 568px) {
      height: 67px;
    }
  }
`;

const Nav = styled.nav`
  padding-left: 100px;
  ul {
    list-style: none;
    display: flex;
    gap: 50px;
    text-decoration: none;
    @media (max-width: 1024px) {
      gap: 24px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  ul li a {
    text-decoration: none;
    color: rgb(160, 119, 44);
    font-size: 12px;
    list-style: none;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    gap: 10px;
  }
  ul li a:hover {
    color: rgb(239, 238, 212);
  }
`;

const Hami = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; /* Slide from top */
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(160, 119, 44);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
    transition: all 0.7s ease 0s;
    overflow: hidden;
    height: 95vh;
    list-style: none;
    text-decoration: none;
    ul li a {
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      margin: 20px;
      list-style: none;
    }
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  padding-left: -70px;
  display: flex;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    color: #8B4513;
    z-index: 1000;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerIcon onClick={toggleNav}>
        {isOpen ? '✕' : '☰'}
      </HamburgerIcon>
      <Hami isOpen={isOpen}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/mobile-safari">Mobile Safari</a></li>
          <li><a href="/safari-train">Safari Train</a></li>
          <li><a href="/safari-rally">Safari Rally</a></li>
        </ul>
      </Hami>
      <LeftNav>
        <Nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Nav>
      </LeftNav>
      <Logo isOpen={isOpen}>
        <img src={yourImage4} alt="Logo" />
      </Logo>
      <RightNav>
        <Nav>
          <ul>
            <li><a href="/mobile-safari">Mobile Safari</a></li>
            <li><a href="/safari-train">Safari Train</a></li>
            <li><a href="/safari-rally">Safari Rally</a></li>
          </ul>
        </Nav>
      </RightNav>
    </HeaderContainer>
  );
};

export default Header;
