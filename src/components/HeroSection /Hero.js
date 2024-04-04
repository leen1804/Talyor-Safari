import React from "react";
import styled from "styled-components";
import image1 from "../../imgs/Hero.png";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;
const HeroSection = styled.div`
  animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;
  background-image: url(${image1});
  background-size: cover;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify: space-between;
  min-height: 80vh;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    min-height: 70vh;
  }
  @media (min-width: 1200px) {
    background-position: center;
  }
`;

const Content = styled.div`
  margin-bottom: -30%;
  margin-right: -40px;
  font-size: 20px;
  color: white;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 80%;
    margin-left: 10rem;
  }
`;
const Lilly = styled.div`
  .scroll-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    @media (max-width: 768px) {
      bottom: 108px;
    }

    .circle {
      height: 70px;
      width: 70px;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.33);
      color: rgb(255, 255, 255);
      font-size: 15px;
      font-family: AvenirNext-Regular;
    }
  }
  .scroll-button::before {
    height: 50px;
    width: 2px;
    background: rgb(255, 255, 255);
    position: absolute;
    content: "";
    bottom: -50px;
    left: 50%;
  }
  a {
    text-decoration: none;
  }
`;

const Heading1 = styled.div`
  text-align: center;
  h1 {
    font-size: 20px;
    color: #a0772c;
    font-weight: 100;
    font-family: ${(props) => props.theme.fonts.secondi};

    @media (max-width: 1200px) {
      font-size: 40px;
      margin-top: -9%;
    }
    @media (min-width: 1200px) {
      font-size: 48px;
      margin-top: -10%;
      margin-left: 50px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

function Hero() {
  const scrollToAbout = () => {
    const aboutAnchor = document.getElementById("about-anchor");
    aboutAnchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection>
      <Heading1>
        <h1>LET US TAKE YOU ON AN ADVENTURE</h1>
      </Heading1>
      <Content>
        Follow us <ImFacebook2 style={{ color: "white" }} size={15} />{" "}
        <ImInstagram style={{ color: "white" }} size={15} />
      </Content>
      <Lilly>
        <a className="scroll-button" onClick={scrollToAbout}>
          <div className="circle">Scroll </div>
        </a>
      </Lilly>
    </HeroSection>
  );
}

export default Hero;
