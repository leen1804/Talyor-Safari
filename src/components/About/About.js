import React from 'react';
import styled from 'styled-components';
import theme from '../../theme.js';
import { keyframes } from 'styled-components';
import yourImage from '../../imgs/img 3.png';
import yourImage2 from '../../imgs/img 2.png';
import yourImage3 from '../../imgs/Img 1.png';
import yourImage4 from '../../imgs/img 4.png';


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



const AboutContainer = styled.div`
  
animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;

 
   
  
  @media (max-width: 568px){
    
    padding-top: 40px;
    
  }
`;
const Div = styled.div`
display: flex;
  
padding-top: 105px;
@media (max-width: 568px){
  padding-top: 30px;
  flex-direction: column;
    
  }
  @media(max-width:992px){
    padding-top: 30px;
  }
  @media(max-width:1024px){
    padding-top: 30px;
  }
`
const LeftColumn = styled.div`
   padding-right: 40px;
      padding-left:30px;
flex: 1;
    order: 1;
  @media (min-width:1200px) {
    order: 2;
    padding: 0 0 0 0;
gap:70px;
  }
  @media (max-width:568px){
    display:flex;
    gap:4px;
    width:60%;
  }
  h1 {
    color:#A0772C;
    font-size: 24px;
    margin-bottom: 10px;}
    @media (max-width: 992px) {
    flex-direction: row;
    }
`;

const CenterColumn = styled.div`
  text-align: center;
  order: 1;

padding:0 5% 5%;
  @media (min-width: 768px) {
    flex: 1;
    order: 2;
  }
  @media(max-width:992px){
    padding:0 0 0 0;
  }
`;

const RightColumn = styled.div`
  order: 3;
  padding-right: 40px;
      padding-left:30px;
  @media (min-width: 768px) {
    flex: 1;
    order: 3;
  }
  @media (min-width:1200px) {
    padding:0 0 0 0;
  }
  @media (max-width:568px){
    display:none;
    gap:4px;
    width:60%;}
`;

const Content = styled.div`
 @media (min-width: 1200px){
 width:650px;}
  h1 {
    color:#A0772C;
    font-size: 24px;
    margin-bottom: 10px;
    @media (min-width: 1200px){
      font-size:48px;
      font-weight:700;
      line-height:57.6px;
      
    }
    @media (max-width: 568px) {
    display:none;
  }
    @media (max-width: 992px) {
    display:none;
  }
    @media (max-width: 1024px) {
    display:none;
  }
  }

  p {
    font-family: ${props => props.theme.fonts.primary};
    margin-bottom: 10px;
    color:rgb(102 102 102);
    font-weight:500;
    font-size:14px;
    @media (min-width: 1200px){
      line-height:33.6px;
      font-size:14px;
    font-weight:500;
    color:rgb(102 102 102); padding-top:50px;}
    @media (max-width: 1024px) {
    padding-top:40px;
    font-size:16px;}
    @media(max-width:992px){
font-size:13px;
    }
    @media(max-width:568px){
padding-right:20px;
padding-left:20px;
    }
  }
  

  a {
    text-decoration: underline 2px solid #A0772C;
    border:none;
    background-color:WHITE;
    font-size:15px;
    font-weight:500;
    color:rgb(160  119 44);
    line-height: 14.4px;
    cursor:pointer;
  }
`;
const SectionHeading = styled.h1`
@media(min-width: 1200px){
  display:none;

}
@media(max-width: 992px){
  

}



text-align:center;
margin-top:40px;
margin-bottom:40px;
color:#A0772C;
    font-size: 24px;
`
const Image = styled.img`
  width: 100%;
  max-width: 100%;
margin-bottom:40px;
  @media (min-width: 568px) {
    max-height: 100%;
  }
`;

const About = () => {
  
  return (
    <AboutContainer id="about-anchor" >
<SectionHeading>OUR STORY </SectionHeading>
<Div>
      <LeftColumn>
      
        <Image src={yourImage}  />
        <Image src={yourImage2} />
      </LeftColumn>
      <CenterColumn>
        <Content  primaryy>
          <h1>OUR <br/> STORY</h1>
         <div> <p>In 1978, Taylors Africa Safaris was founded by Professional Guide, Piers Taylor. It is now run by both himself and son, Charles as a family run, hands on safari company. Based in Zimbabwe offering a range of safaris filled with adventure and exploration like no other, Taylors Africa Safaris operates in Victoria Falls, Hwange National Park and Matobo National Park offering a multifaceted trip solely facilitated by Taylors Africa Safaris.</p> <br/> </div>

<div><p>We believe in safari as a journey that immerses the senses and awakens the spirit. Our priority at Taylors Africa is to take our clients on a once in a lifetime journey through the Western side of Zimbabwe starting in Victoria Falls or Bulawayo. .</p></div>
          <a hrfe="#">Find More Out About Us</a>
        </Content>
      </CenterColumn>
      <RightColumn>
        <Image src={yourImage3}/>
        <Image src={yourImage4} />
      </RightColumn>
      </Div>
    </AboutContainer>
  );
};

export default About;
