import React from 'react';
import styled from 'styled-components';
import leeImage from '../../imgs/safari-rally-logo-final-sepia-layered 1.png'
import leeImage2 from '../../imgs/TAYLORS AFRICA MOBILE SAFARI LOGO 1.png'
import leeImage3 from '../../imgs/TAYLORS TRAIN LOGO 1.png'
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
  
  padding: 40px;
  text-align: center;
  @media (min-width: 1200px){
padding-left:100px;
padding-right:100px;
padding-top:4%;
  }
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  color: #A0772C; 
  margin-bottom: 40px;
  @media (min-width: 1200px){
    font-size: 40px;
    line-height: normal;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 340px; 
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  text-align: center;
  border:  solid 1px  #A0772C ;
  border-radius:  16px;
  @media (max-width: 768px) {
    width: 400px; 
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardParagraph = styled.p`
  font-size: 14px;
  color:rgb(102 102 102);
  font-weight:500;
  line-height:25.2px;
  font-family: ${props => props.theme.fonts. primary};
  
`;

const CardButton = styled.button`
   cursor:pointer;
  text-decoration: underline 2px solid #A0772C;
  margin-top:40px;
    border:none;
    background-color:WHITE;
  transition: background-color 0.3s;
  color:rgb(160  119 44);
  &:hover {
    background-color:#a0772c51;
  }
`;

const SectionWithCards = () => {
  return (
    <SectionContainer>
      <SectionHeader>WHAT WE OFFER</SectionHeader>
      <CardContainer>
        
        <Card>
          <CardImage src={leeImage}/>
          <CardParagraph primary>Our signature mobile safaris which either start in Bulawayo or Victoria falls are an airport to airport multi-day safari solution for our clients, showing the best of what Zimbabwe has to offer. Hosted, guided and transported by Taylors Africa’s guides giving our clients a second to none safari adventure.</CardParagraph>
          <CardButton href="#">Find out more about mobile safari</CardButton>
        </Card>

      
        <Card>
          <CardImage src={leeImage2} />
          <CardParagraph>Our 120 tonne safari train caters to larger groups allowing them the safari experience whilst on rails traversing the world famous Hwange National Park during the day. Please note that this is a fully catered option with sleeping cabins aboard the train.</CardParagraph>
          <CardButton href="#">Find out more about mobile safari</CardButton>
        </Card>

        
        <Card>
          <CardImage src={leeImage3} />
          <CardParagraph>This is a four day, 250 participant, self drive, whirlwind of an event that is hosted and organised by Taylors Africa Safaris every year with a portion of the funds going towards conservation. These contributions go towards several conservational initiatives in the national parks we operate in. </CardParagraph>
          <CardButton  href="#">Find out more about mobile safari</CardButton>
        </Card>
      </CardContainer>
    </SectionContainer>
  );
};

export default SectionWithCards;
