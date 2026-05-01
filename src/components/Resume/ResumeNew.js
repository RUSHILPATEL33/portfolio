import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", color: "white" }}>
        <h2>Resume Coming Soon 🚀</h2>
      </Row>
    </Container>
  );
}

export default ResumeNew;