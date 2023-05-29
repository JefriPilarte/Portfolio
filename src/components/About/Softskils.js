import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from "react-icons/im";

function Softskils() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>I have several soft skills, here I will leave some related to <strong className="purple">business work</strong></p>
          <ul>

            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Comunication</strong> | Communication with my colleagues, with my superiors and above all I do not make decisions that affect the work of others on my own.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Creativity</strong> | When it comes to implementing new and creative solutions to day-to-day problems and implementing increasingly efficient work methods.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Leadership</strong> | By guiding others on the path that I consider to be correct, helping them with their problems and above all, teaching them better ways of doing things.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Resolving Ability</strong> | To deal with complex problems and critical situations, making the most convenient decisions for the good of the project and the integrity of the company.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Critical Thinking</strong> | To evaluate situations objectively and thus find an effective solution to the problem within its own context, thus seeking not to affect other parts of the project in question.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Positive Attitude</strong> | It is not a secret to anyone that in the work environment, sometimes you can feel a lot of pressure and stress. In those cases I maintain my composure and a positive attitude towards myself and my colleagues. This helps to have a greater critical thinking.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Time Management</strong> | I organize all my duties, analyze the priorities and then evaluate the order of their execution taking into account the delivery time limit of each one.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Emotional Intelligence</strong> | To deal with sensitive situations in my environment and above all to maintain my own composure.
            </li>
            <br />
            <li className="about-activity">
              <ImCheckmark /> | <strong className="purple">Stress Management</strong> | In critical situations for the correct development of the project.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Softskils;
