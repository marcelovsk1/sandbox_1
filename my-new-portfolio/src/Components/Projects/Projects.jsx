import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'; // Importe o componente Nav
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: "/Users/marcelovsk1/Desktop/portfolio-2/my-new-portfolio/src/img/gameofcodes.png"
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: "/Users/marcelovsk1/Desktop/portfolio-2/my-new-portfolio/src/img/gameofcodes.png"
    },
    {
      title: "Game of Codes",
      description: "Um jogo divertido de código!",
      imgUrl: "/Users/marcelovsk1/Desktop/portfolio-2/my-new-portfolio/src/img/gameofcodes.png"
    }
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>My <span>Projects</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore animi
              asperiores magni in perferendis distinctio iure,
              quas totam earum optio ipsa temporibus, repellendus labore!
              Dolore ipsum delectus illum quaerat sequi.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
             <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">iOS Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Full Stack</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Games</Nav.Link>
              </Nav.Item>
             </Nav>
             <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <p>{project.title}</p>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
             </Tab.Content>
             </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
