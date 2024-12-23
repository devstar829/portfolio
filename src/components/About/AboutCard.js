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
            <span className="purple">Datadog (2020 - 2024)</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Built Datadog services for <span className="purple">real-time query parsing and execution</span>, reducing query delays by 30% with Redis caching.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Designed <span className="purple">scalable microservices</span> and <span className="purple">data pipelines</span> using Spring Boot, Kafka, and AWS for real-time data processing.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Built the Endpoints for fetching <span className="purple">metrics, logs and traces</span> from the users in query parsing and execution service.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Automated <span className="purple">CI/CD pipelines</span> with Jenkins, Kubernetes, and Docker, accelerating deployment cycles and improving efficiency.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Resolved 15+ critical system issues, enhancing performance, reliability, and scalability.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Conducted extensive API, unit, and integration testing using JUnit and Mockito to ensure system quality and reliability.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Mentored junior developers and continuously improved development processes and code reviews.
            </li>
          </ul>

            <p style={{textAlign: "justify"}}><span className="purple">TechNova Global(2018 - 2020)</span></p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Developed an<span className="purple"> e-commerce analytics dashboard</span>, improving search rankings and integrating 3rd-party shopping services.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Secured APIs</span> with OAuth 2.0 and integrated RESTful and GraphQL APIs to deliver sales and customer insights.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Designed <span className="purple">database schemas</span> using PostgreSQL, hosted on AWS RDS with automated backups and reap replicas for failover.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Built a <span className="purple">React-based</span> user-friendly frontend and automated backend processes with Spring annotations and JBoss scripts.
              </li>
              <br />
            </ul>

            <p style={{textAlign: "justify"}}><span className="purple">ShopSmart Innovations(2016 - 2018)</span></p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Developed a <span className="purple">media streaming service</span> using Java, Spring, React, and WebSockets, supporting thousands of concurrent users.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Reduced system bottlenecks by 20% through <span className="purple">Kafka-based message streaming</span> for real-time data processing.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Utilized MySQL </span>for storing incident logs and user data, ensuring efficient and reliable data management.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Build the maintain scalable <span className="purple">UI</span> components using the React, Redux and Ant Design.
              </li>
              <br />
            </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
