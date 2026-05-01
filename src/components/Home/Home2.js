import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a passionate <b className="purple">Java Developer</b> who enjoys
              solving problems and building real-world applications.
              <br />
              <br />
              My core focus is on{" "}
              <b className="purple">Data Structures & Algorithms</b> and writing
              efficient, clean code.
              <br />
              <br />
              I work with
              <i>
                <b className="purple">
                  {" "}
                  Java, C++, JavaScript, React.js, and Node.js{" "}
                </b>
              </i>
              to build scalable web applications.
              <br />
              <br />
              Currently, I’m working on my project{" "}
              <b className="purple">DevFixer</b> and continuously improving my
              skills in <b className="purple">Full Stack Development</b>.
              <br />
              <br />
              Apart from coding, I enjoy gaming 🎮 and participating in
              hackathons, always aiming to build something impactful.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;