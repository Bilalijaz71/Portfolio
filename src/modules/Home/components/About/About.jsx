import { Col, Container, Image, Row } from "react-bootstrap";
import AboutAvatar from "../../../../assets/bilal-avatar-banner.jpeg";
import styles from "./style.module.css";
import GitHubIcon from "../../../../assets/svg/GitHubIcon";
import LinkedinIcon from "../../../../assets/svg/LinkedinIcon";
import EmailIcon from "../../../../assets/svg/EmailIcon";
import PhoneIcon from "../../../../assets/svg/PhoneIcon";

const About = () => {
  return (
    <>
      <Container>
        <Row className="position-relative flex-column-reverse flex-md-row">
          <Col sm={12} md={8} lg={7}>
            <div className="h-100 d-flex align-items-center">
              <article>
                <h1 className="fw-bold">
                  Senior Software Engineer
                </h1>
                <p className="text-muted mt-3">
                  With over 4+ years of experience in software development, I possess extensive expertise in designing and developing robust applications using a variety of programming languages and frameworks. My proficiency in both frontend and backend technologies, particularly in ReactJS, NodeJS, ExpressJS, MySQL, and PHP complements my strong foundation in modern software development practices.

                  I have a deep understanding of software architecture, algorithms, and data structures, enabling me to create efficient and scalable solutions. My experience spans across various domains, including web applications, and mobile application.

                  As a Senior Software Engineer, I emphasize best practices in code quality, security, and performance optimization. I am well-versed in Agile methodologies and thrive in collaborative environments, where I can leverage my technical skills alongside my knowledge of UI design, and user experience.
                </p>
                <ul className="list-unstyled mt-3 d-flex gap-4 align-items-center">
                  {/* <li>
                    <a href="https://github.com/maazharis8">
                      <GitHubIcon />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://www.linkedin.com/in/muhammad-maaz-haris">
                      <LinkedinIcon />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="mailto:bilalejaz5295@gmail.com">
                      <EmailIcon />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="tel:923014442882">
                      <PhoneIcon />
                    </a>
                  </li> */}
                </ul>
              </article>
            </div>
          </Col>
          <Col sm={12} md={4} lg={{ offset: 1, span: 4 }}>
            <div className={`user-select-none ${styles.avataraboutWrapper}`}>
              <Image
                src={AboutAvatar}
                alt="about-avatar-maaz"
                className={`img-fluid d-block mx-auto mb-5 mb-md-0 mx-md-0 ${styles.aboutAvatar}`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
