import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
            Experienced in various aspects of <span className="purple">Full-Stack Development</span> and <span className="purple">Data Streaming pipeline</span>
            </h1>
            <p className="home-about-body">
            I am skilled in various programming languages, including JavaScript, TypeScript, Java, C#, and Python. 
            I have proficiency in both frontend and backend frameworks, such as React, Vue, Next.js, Express, Spring Boot, ASP.NET Core, Django, Flask, and FastAPI. 
            Additionally, I possess a deep understanding of SQL and NoSQL databases.
            </p>
          </Col>

          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              Experienced in working with <span className="purple">Agile</span> methodologies.
            </h1>
            <p className="home-about-body">
            I enjoy working with Agile methodologies, particularly Scrum and Kanban, which I have consistently applied throughout my career. 
            My experience includes facilitating daily stand-ups, sprint planning, and retrospectives to foster team collaboration and improve project delivery. 
            This approach has allowed me to adapt to changing requirements and ensure a high level of customer satisfaction.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              Familier in <span className="purple">Cloud</span> services.
            </h1>
            <p className="home-about-body">
              Fortunately, I have experience with various cloud service platforms, including AWS, Azure, Netlify, and Heroku. 
              I am also an expert in using services such as AWS Lambda, Redis, message brokers, and D3.
            </p>
          </Col>

          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "1.6em" }}>
              Implemented <span className="purple">CI/CD</span> pipelines
            </h1>
            <p className="home-about-body">
            I have extensive experience in composing CI/CD pipelines using tools such as GitHub, Docker, Kubernetes, and Jenkins. 
            I have designed and implemented automated workflows that streamline the integration and deployment processes, ensuring consistent and reliable delivery of applications. 
            Additionally, I have successfully launched several projects on cloud services, optimizing them for scalability and performance while adhering to best practices in DevOps.
            </p> 
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devstar829"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
