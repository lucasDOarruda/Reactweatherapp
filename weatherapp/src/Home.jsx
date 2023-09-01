import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const IntroCarousel = () => {
  const slides = [
    {
      title: 'Welcome to Our Website',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'img1.jpg', // Replace with your image source
    },
    {
      title: 'Discover Amazing Content',
      text: 'Vivamus hendrerit mi vitae neque laoreet, ut ultrices risus rhoncus.',
      image: 'img2.jpg', // Replace with your image source
    },
    {
      title: 'Join Our Community',
      text: 'Integer volutpat turpis in libero condimentum, eu posuere metus tincidunt.',
      image: 'img3.jpg', // Replace with your image source
    },
  ];

  return (
    <div className="intro-carousel">
      <Carousel infiniteLoop autoPlay>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="legend">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <Container className="intro-box">
        <Row>
          <Col md={6}>
            <div className="intro-content">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                hendrerit mi vitae neque laoreet, ut ultrices risus rhoncus.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="intro-content">
              <h3>Contact Us</h3>
              <p>
                Integer volutpat turpis in libero condimentum, eu posuere metus
                tincidunt.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroCarousel;
