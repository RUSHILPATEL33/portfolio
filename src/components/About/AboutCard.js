import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rushil</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I’m a passionate{" "}
            <span className="purple">Java Developer</span> focused on{" "}
            <span className="purple">Data Structures & Problem Solving</span>.
            <br />
            Currently, I’m building my project{" "}
            <span className="purple">DevFixer</span> and improving my skills in{" "}
            <span className="purple">Full Stack Development</span>.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech & Building Projects 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Build. Dominate."
          </p>
          <footer className="blockquote-footer">Rushil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;