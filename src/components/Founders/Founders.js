import React from 'react';
import styled from 'styled-components';
import Right from '../../imgs/Frame 79.png'
import Left from '../../imgs/Frame 78.png'
import theme from '../../theme.js';
import { keyframes } from 'styled-components';

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
const SectionContainer = styled.section`
animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px){
    padding-left:100px;
    padding-right:100px;
    padding-top:4%;
  }
`;

const SectionHeading = styled.h1`
  font-size: 36px;
  color: #A0772C;
  margin-bottom: 40px;

  @media (max-width: 568px) {
    font-size: 20px;
    margin-top:50px;
    margin-bottom:20px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

  }
`;

const LeftDiv = styled.div`
  flex: 1;
  padding: 9px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  

  @media (min-width: 768px) {
    flex: 1;
    margin-top: 0;
    text-align: left;
    align-items: flex-start;
  }
`;

const RightDiv = styled.div`
  flex: 1;
  padding: 9px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  

  @media (min-width: 768px) {
    flex: 1;
    margin-top: 0;
    text-align: left;
   
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #A0772C;
  margin-bottom: 10px;
  margin-top: 30px;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: auto;
  text-align: left; 
  font-family:${props => props.theme.fonts. primary};
  font-weight:500;
  line-height: 25.6px;
  color:rgb(102 102 102);
`;

const Founders = () => {
  return (
    <SectionContainer>
      <SectionHeading>MEET THE FOUNDERS</SectionHeading>
      
      <DivContainer primary>
        <LeftDiv>
          <Image src={Left} alt="Left Image" />
          <Heading>Piers Taylor</Heading>
          <Paragraph>Founder of Taylors Africa Safaris and professional guide</Paragraph>
        </LeftDiv>

        <RightDiv>
          <Image src={Right} alt="Right Image" />
          <Heading>Charles Taylor</Heading>
          <Paragraph>Head of operations and expeditions</Paragraph>
        </RightDiv>
      </DivContainer>
    </SectionContainer>
  );
};

export default Founders;
