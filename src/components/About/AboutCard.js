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
            <span className="purple">Amazon | SDE III (Senior Software Engineer Level 6) (2021 - 2024)</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designed and implemented Amazon’s telehealth service using Java and Spring Boot as the primary
              backend, deployed on AWS ECS with infrastructure managed via Terraform and CloudFormation
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Developed key features such as scheduling, video meetings (WebRTC), intake form processing,
              e-prescriptions, and payment handling (Stripe) with React and Redux for the frontend.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Collaborated on AI-driven features for automated patient routing and predictive analytics, utilizing
              Python/FastAPI for experimental models and Spring Boot for production-grade services.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Built RESTful APIs with Spring Boot, ensuring HIPAA-compliance through AWS IAM, OAuth, and
              JWT for secure communication.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Leveraged AWS S3 for secure file storage, AWS Lambda for event-driven workflows, and CloudWatch for
              monitoring and troubleshooting microservices
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Incorporated Node.js for real-time notifications and specific server-side rendering use cases to enhance performance.

            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Optimized service performance and scalability through AWS CloudWatch, and Kubernetes-based
              deployments.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Conducted A/B testing on AI and microservices workflows, refining algorithms and system interactions
              based on user feedback, boosting service effectiveness, and increasing patient satisfaction.
            </li>
          </ul>

            <p style={{textAlign: "justify"}}><span className="purple">Datadog | Software Engineer (2016 - 2018)</span></p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Worked on Datadog’s infrastructure team and developed the Real Time Metrics Systems(Intake, Storage,
                  Query and Web tiers) that collect, process, and visualize data.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Architected Intake to Storage tier for processing 10TB+/day (1 trillion+ data points) through
distributed pipelines with dynamic partitioning for cloud-scale customers using kafka and Java
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Designed a dynamic kafka partition using composite by calling func mod(n, hash(customerID)) enabling
                1:1 mapping between one partition and one customer.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Built the hybrid data storage system used by in memory on the other of days, and AWS S3 on the other
                of months and years.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Cross-functionally collaborated with teams across Backend, Frontend and Data Science and Alerting orgs to design, implement, and deliver improved alerting/monitoring reliability to end-customers during internal incidents.
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> Mentored junior developers and continuously improved development processes and code reviews.
              </li>
              <br />
            </ul>

           
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
