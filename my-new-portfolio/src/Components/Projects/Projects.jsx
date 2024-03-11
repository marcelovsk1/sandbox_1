import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectsCard';
import TrackVisibility from 'react-visibility-sensor';
import './Projects.css';

import gameofcodesImg from "../../img/gameofcodes.png";

const Projects = () => {

  const projects = [
    {
      title: "Game of Codes",
      description: "Um jogo chato!",
      imgUrl: gameofcodesImg
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: gameofcodesImg
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: gameofcodesImg
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: gameofcodesImg
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: gameofcodesImg
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: gameofcodesImg
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My <span>Projects</span></h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav className="i-buttons-container">
                      <Nav.Item>
                        <Nav.Link eventKey="first" as="button" className="button i-button" href="">iOS Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" as="button" className="button i-button" href="">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" as="button" className="button i-button" href="">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className='wrapper'>
                        {projects.map((project, index) => (
                          <Col key={index} sm={6} md={4}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </div>
                    </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
                          rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
                          quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores
                          delectus quasi inventore debitis quo.</p> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
}

export default Projects;
