import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Senior Software Engineer </span>
           
          
            <br />
            <br />
            My main skills
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Implementing the MicroService Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Strong understand about Using of AWS
            </li>
            <li className="about-activity">
              <ImPointRight /> Rich experience of JAVA, Python, C#, JavaScript
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
