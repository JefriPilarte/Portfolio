import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Jefri Pilarte,</span> Full-Stack Developer <i><span className="purple">mostly focused on Front-End.</span></i> I was born and currently live in the <span className="purple">Dominican Republic.</span> I have been an <span className="purple">independent student</span> for about 3 years, therefore <i><span className="purple">I do not have a University degree,</span></i> but even so, I have several small projects that will give you an idea of what I am capable of.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Produce, write and sing music
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn science
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Society is an artificial logic designated by its history and culture."
          </p>
          <footer className="blockquote-footer">Jefri Pilarte</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
