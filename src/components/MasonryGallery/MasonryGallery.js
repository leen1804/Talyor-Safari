
import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import './MasonryGallery.css'; 
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

const images = [
 
    require('../../imgs/Rectangle 13.png'),
    require('../../imgs/Rectangle 14.png',),
    require('../../imgs/Rectangle 20.png'),
    require('../../imgs/Rectangle 19.png'),
    require('../../imgs/Rectangle 20.png'),
    require('../../imgs/Rectangle 14.png'),
    require('../../imgs/Rectangle 16.png'),
    require('../../imgs/Rectangle 22.png'),
    require('../../imgs/Rectangle 21.png'),
    require('../../imgs/Rectangle 13.png'),
    require('../../imgs/Rectangle 14.png'),
    require('../../imgs/Rectangle 14.png'),
 
  
  
  
];

const breakpointColumnsObj = {
  default: 4, 
  1100: 3,   
  700: 2,    
  400: 2    
};
const SectionHeader = styled.h1`
  font-size: 34px;
  color: #A0772C; 
 margin-top:50px;
 margin-bottom:50px;
  @media (min-width: 1200px){
    font-size: 40px;
    line-height: normal;
  }
  @media(max-width:568px){
    margin-bottom:50px;
    font-size:20px;
  }
`;
const Gallery = styled.section`
animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;
   text-align: center;

`;

const MasonryGallery = () => {
  return (
  <Gallery>
     <SectionHeader>OUR GALLERY</SectionHeader>
    <Masonry
    
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt="#" />
        </div>
      ))}

    </Masonry>
    </Gallery>
  );
};

export default MasonryGallery;
