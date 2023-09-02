import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaReact } from 'react-icons/fa'; // Import icons from Font Awesome

const IntroCarousel = () => {
  return (
    <div className="intro-carousel">
      <Container className="intro-box">
        <Row>
          <Col md={6}>
            <div className="intro-content">
              <h3>About</h3>
              <p>
                I'm a Data Analytics and Front-end developer who likes to make random projects and put them on the internet.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="intro-content">
              <h3>Contact</h3>
              <p>
                Lucas Arruda
                <br />
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <br />
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  <FaReact /> GitHub
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroCarousel;
