import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Yo from "../../Assets/Yo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            Hello! I am a <b className="purple">junior-level Full-Stack Developer</b>. Although I have no business experience, I have worked on many <b className="purple">freelance projects, personal projects, and team volunteer jobs.</b>
              <br />
              <br />I have more proficiency in <b className="purple">Front-End</b> and that's where I have developed most of my personal projects. <b className="purple">My English level is intermediate</b>, but I still don't have the ability to sustain an informal conversation.
              <br />
              <br />
              I am very selective with the decisions I make. <b className="purple">Value communication and teamwork.</b> I always look to learn new things and try different perspectives. Additionally, <i><b className="purple">I have the ability to lead teams, help others, and make decisions that contribute to the team's goal.</b></i>
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Yo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JefriPilarte"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jefri-pilarte-0a9522235/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ferikeyoficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
