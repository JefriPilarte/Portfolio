import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bingo from "../../Assets/Projects/bingo.png";
import dado from "../../Assets/Projects/dado.png";
import calculator from "../../Assets/Projects/calculator.png";
import error from "../../Assets/Projects/error.png";
import random from "../../Assets/Projects/random.png";
import list from "../../Assets/Projects/list.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          A bit of my <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>A little development practice.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dado}
              isBlog={false}
              title="Dice"
              description="I did this practice when I discovered that you could make 3D elements with pure CSS, so I wanted to give it a try!
              It has functions to roll the dice and generate random numbers just like a real dice would. This is the result."
              ghLink="https://github.com/JefriPilarte/Dado"
              demoLink="https://dado-jefripilarte.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingo}
              isBlog={false}
              title="Classic Bingo"
              description="I always wanted to make a real game, this is the closest thing I could do without using any framework. It's a Classic Bingo!
              The rules are very simple, if you fill all the tiles on your card before your opponent, you win!."
              ghLink="https://github.com/JefriPilarte/Bingo"
              demoLink="https://bingo-au1rdjxxg-jefripilarte.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A simple and straightforward calculator made in React JS."
              ghLink="https://github.com/JefriPilarte/Calculadora"
              demoLink="https://calculadora-kohl-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={error}
              isBlog={false}
              title="Error Range"
              description="This is a practice that, in essence, what it does is calculate the margin of error in the mass production of products on industrial machines. To use it, it is only necessary to know in advance the real probability of failure that said machine has and add the data corresponding to the desired manufacture. This will calculate the probability of leaving defective parts."
              ghLink="https://github.com/JefriPilarte/Margen-error"
              demoLink="https://margen-error.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={random}
              isBlog={false}
              title="Random Number"
              description="Simple application that generates a random number between a given range."
              ghLink="https://github.com/JefriPilarte/Numero-Aleatorio"
              demoLink="https://numero-aleatorio-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={list}
              isBlog={false}
              title="List generator"
              description="Create a small table with products that you want to buy or sell. This shows the total quantity of products and the total price of buying or selling them."
              ghLink="https://github.com/JefriPilarte/Generador-de-Listas"
              demoLink="https://generador-de-listas.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
