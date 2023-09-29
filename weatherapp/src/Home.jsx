import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaReact } from 'react-icons/fa'; // Import icons from Font Awesome
import {  FaJava, FaHtml5, FaCss3, FaDatabase, FaChartBar, FaCog } from 'react-icons/fa'; // Import icons from Font Awesome



const IntroCarousel = () => {
  return (
    <div className="intro-carousel">
      <Container>
        <Row>
          {/* First Intro Box */}
          <Col md={6}>
            <div className="intro-content">
              <h3>About</h3>
              <p>
              👋🏻 I'm a Data Analytics and Front-end developer who likes to make random projects and put them on the internet.
              </p>
            </div>
          </Col>

          {/* Second Intro Box */}
          <Col md={6}>
            <div className="intro-content-tech">
              <h3>Tech Stack</h3>

              <h4>Here are some of the technologies I work with:</h4>
              <p>
               
              
                <ul>
                <li><FaHtml5 /><br />HTML</li>
                <li><FaCss3 /><br />CSS</li>
                <li><FaJava /><br />Java</li>
                <li><FaReact /><br />React</li>
                <li><FaDatabase /><br />SQL</li>
                <li><FaChartBar /><br />Power Platform</li>
                
                
                </ul>



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
          {/* Add more intro boxes here if needed */}
        </Row>
      </Container>
    </div>
  );
};

export default IntroCarousel;
