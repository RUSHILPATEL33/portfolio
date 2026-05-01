import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import devfixer from "../../Assets/Projects/devfixer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My <strong className="purple">Project</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here is a project I’ve built recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devfixer}
              isBlog={false}
              title="DevFixer"
              description="DevFixer is a developer-focused platform designed to identify, debug, and resolve coding issues efficiently. It helps developers streamline their workflow by providing structured solutions and improving productivity during development."
              techStack="Java, React.js, Node.js, MongoDB"
              ghLink="https://github.com/YOUR_USERNAME/devfixer"
              // demoLink="https://YOUR_DEPLOYED_LINK.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;