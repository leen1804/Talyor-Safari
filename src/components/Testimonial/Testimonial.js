import React, { useRef } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

const TestimonialSection = styled.section`
  animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;

  @media (min-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 3%;
  }
`;

const SectionHeader = styled.header`
  margin-bottom: 20px;
`;

const TestimonialHeading = styled.h1`
  font-size: 32px;
  color: #a0772c;
  margin-bottom: 10px;
  margin-top: 50px;
  @media (min-width: 1200px) {
    font-size: 45px;
    margin-bottom: 50px;
    text-align: left;
  }
`;

const TestimonialParagraph = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 50px;
  margin-top: 80px;
  color: rgb(102 102 102);
  font-family: ${props => props.theme.fonts.primary};
  line-height: 35px;
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const TestimonialParagraphl = styled.p`
  color: #A0772C;
  text-align: left;
  font-weight: 600;
`;
const TestimonialParagraphW = styled.p`
  color: #A0772C;
  margin-top: 20px;
  text-align: left;
  font-weight: 600;
`;

const TestimonialParagraphll = styled.p`
  color: #A0772C;
  margin-bottom: 50px;
  line-height: 40px;
  text-align: left;
`;

const CarouselSection = styled.div`
  padding: 40px;
`;

const TestimonialData = [
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    ltext1: '5 couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  {
    title: 'Client testimonials',
    ltext: 'Best safari experience in Zimbabwe!',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
];

const TestimonialCarousel = () => {
  return (
    <TestimonialSection>
      <SectionHeader>
        <TestimonialHeading>Client testimonials</TestimonialHeading>
      </SectionHeader>
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status indicator
        infiniteLoop={true} // Infinite loop enabled
        autoPlay={true} // Auto play enabled
        interval={5000} // Interval for auto play
        stopOnHover={true} // Pause auto play on hover
      >
        {TestimonialData.map((item, index) => (
          <CarouselSection key={index}>
            <TestimonialParagraphl>{item.ltext}</TestimonialParagraphl>
            <TestimonialParagraphW>{item.ltext1}</TestimonialParagraphW>
            <TestimonialParagraph>{item.text}</TestimonialParagraph>
            <TestimonialParagraphll>{item.ltext2}</TestimonialParagraphll>
          </CarouselSection>
        ))}
      </Carousel>
    </TestimonialSection>
  );
};

export default TestimonialCarousel;