import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectsCard';
import TrackVisibility from 'react-visibility-sensor';
import './Projects.css';

// iOS
import netflixapp from "../../img/netflixapp.png"
import weatherApp from "../../img/weatherapp.png"
import newsapp from "../../img/newsapp.png"
import guessgame from "../../img/guessgame.png"
import mensagerapp from "../../img/mensagerapp.png"
import socialmedia from "../../img/socialmedia.png"
// Fullstack
import gameofcodesImg from "../../img/gameofcodes.png";
import adidasoriginals from "../../img/adidasoriginals.png";
import scraper from "../../img/scraper.png"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const iosProjects = [
    {
      title: "Netflix Clone",
      description: "Description of iOS Project 1",
      imgUrl: netflixapp
    },
    {
      title: "News App",
      description: "Description of iOS Project 2",
      imgUrl: newsapp
    },
    {
      title: "Mensager App",
      description: "Description of iOS Project 2",
      imgUrl: mensagerapp
    },
    {
      title: "Social Media Clone App",
      description: "Description of iOS Project 2",
      imgUrl: socialmedia
    },
    {
      title: "Guess Multiplayer Game",
      description: "Description of iOS Project 2",
      imgUrl: guessgame
    },
    {
      title: "Weather App",
      description: "Description of iOS Project 2",
      imgUrl: weatherApp
    }
  ];

  const fullStackProjects = [
    {
      title: "Scraper Bot",
      description: "Description of Full Stack Project 1",
      imgUrl: scraper
    },
    {
      title: "Full Stack Project 1",
      description: "Description of Full Stack Project 1",
      imgUrl: gameofcodesImg
    },
    {
      title: "Full Stack Project 2",
      description: "Description of Full Stack Project 2",
      imgUrl: adidasoriginals
    }
  ];

  const gamesProjects = [
    {
      title: "Game Project 1",
      description: "Description of Game Project 1",
      imgUrl: "gameProject1Img.jpg"
    },
    {
      title: "Game Project 2",
      description: "Description of Game Project 2",
      imgUrl: "gameProject2Img.jpg"
    }
  ];

  // Função para renderizar os projetos com base na guia selecionada
  const renderProjects = () => {
    switch (activeTab) {
      case "first":
        return iosProjects;
      case "second":
        return fullStackProjects;
      case "third":
        return gamesProjects;
      default:
        return iosProjects; // Define uma guia padrão
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My <span>Projects</span></h2>
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Nav className="i-buttons-container">
                      <Nav.Item>
                        <Nav.Link eventKey="first" as="button" className="button i-button">iOS Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" as="button" className="button i-button">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" as="button" className="button i-button">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className='wrapper'>
                          {renderProjects().map((project, index) => (
                            <Col key={index} sm={6} md={4}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Outras guias */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
