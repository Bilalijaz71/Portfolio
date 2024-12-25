import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import About from "./components/About/About";
import ProjectsListing from "./components/ProjectsListing";
import Skills from "./components/Skills/Skills";
import { Container } from "react-bootstrap";

const Home = () => {
  const [activeSection, setActiveSection] = useState("About");
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const bestPracticesSectionRef = useRef(null);
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutSectionRef.current;
      const projectsSection = projectsSectionRef.current;
      const skillSection = skillSectionRef.current;
      const bestPracticesSection = bestPracticesSectionRef.current;

      const scrollPosition = window.scrollY;

      if (aboutSection && isSectionActive(aboutSection, scrollPosition)) {
        setActiveSection("About");
      } else if (
        projectsSection &&
        isSectionActive(projectsSection, scrollPosition)
      ) {
        setActiveSection("Projects");
      } else if (
        skillSection &&
        isSectionActive(skillSection, scrollPosition)
      ) {
        setActiveSection("Skills");
      } else if (
        bestPracticesSection &&
        isSectionActive(bestPracticesSection, scrollPosition)
      ) {
        setActiveSection("frontend");
      }
    };

    const isSectionActive = (section, scrollPosition) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigationClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <Layout
        activeSection={activeSection}
        handleNavigationClick={handleNavigationClick}
      >
        <section id="about" ref={aboutSectionRef} className="mt-5">
          <About />
        </section>
        <section ref={projectsSectionRef} className="pt-0 pt-md-5">
          <div id="projects" className="mt-5">
            <ProjectsListing />
          </div>
        </section>
        <section ref={skillSectionRef} className="pt-5">
          <div id="skills" className="mt-5">
            <Skills />
          </div>
        </section>
        <section ref={bestPracticesSectionRef} className="pt-5">
          <Container>
            <div id="frontend" className="mt-5">
              <article>
                <h2>A Guide to Full Stack Excellence
                </h2>
                <p className="mt-3 text-muted">
                  Full stack development encompasses both front-end and back-end technologies,
                  allowing developers to build complete web applications. Achieving excellence in
                  full stack development requires a combination of technical skills, best practices,
                  and a mindset geared towards continuous learning.
                  This guide outlines key areas to focus on for full stack excellence.
                </p>
                <h4 className="mt-4">Front-End Development:</h4>
                <ul>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        HTML/CSS:{` `}
                      </b>
                      Master the structure and styling of web pages.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        JavaScript:{` `}
                      </b>
                      Learn the fundamentals of JavaScript, including ES6+ features.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        Frameworks/Libraries:{` `}
                      </b>
                      Familiarize yourself with popular frameworks like React, Next, or Vue.js.
                    </p>
                  </li>
                </ul>
                <h4 className="mt-4">Back-End Development:</h4>
                <ul>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        Server-Side Languages:{` `}
                      </b>
                      Gain proficiency in languages such as Node.js, Python, Ruby, Java, or PHP.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        Frameworks:{` `}
                      </b>
                      Learn back-end frameworks like Express.js (Node.js), Django (Python), or Ruby on Rails.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                        APIs:{` `}
                      </b>
                      Understand RESTful services and GraphQL for building and consuming APIs.
                    </p>
                  </li>
                </ul>
                <h4 className="mt-4">Databases:</h4>
                <ul>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                      SQL Databases:{` `}
                      </b>
                      Learn about relational databases like PostgreSQL or MySQL.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2 text-muted">
                      <b>
                      NoSQL Databases:{` `}
                      </b>
                      Explore NoSQL options like MongoDB or Firebase for unstructured data.
                    </p>
                  </li>
                </ul>
                <h4 className="mt-4">Performance Optimization:</h4>
                <p className="mt-2 text-muted">
                  Optimize your code for speed and efficiency to enhance page
                  loading times. Compress images, minimize HTTP requests, and
                  leverage browser caching to create a snappy user experience.
                  Tools like Lighthouse can help identify performance
                  bottlenecks.
                </p>
                <h4 className="mt-4">Code Consistency and Readability:</h4>
                <p className="mt-2 text-muted">
                  Maintain clean, consistent, and readable code by adhering to
                  coding standards and style guides. Consistency not only aids
                  collaboration but also makes it easier for developers to
                  understand, maintain, and troubleshoot code.
                </p>
                <h4 className="mt-4">Version Control:</h4>
                <p className="mt-2 text-muted">
                  Implement a version control system, such as Git, to track
                  changes and collaborate seamlessly with other developers.
                  Regularly commit your code and use branching strategies to
                  manage different features or bug fixes, ensuring a stable and
                  organized codebase.
                </p>
                <h4 className="mt-4">Cross-Browser Compatibility:</h4>
                <p className="mt-2 text-muted">
                  Test your websites across multiple browsers and devices to
                  ensure a consistent experience for all users. Identify and
                  address compatibility issues early in the development process
                  to minimize debugging efforts later on.
                </p>
                <h4 className="mt-4">Accessibility:</h4>
                <p className="mt-2 text-muted">
                  Prioritize accessibility by following Web Content
                  Accessibility Guidelines (WCAG). Ensure that your websites are
                  usable by individuals with disabilities, incorporating proper
                  HTML semantics, ARIA roles, and providing alternative text for
                  images.
                </p>
                <h4 className="mt-4">Optimized Images:</h4>
                <p className="mt-2 text-muted">
                  Compress and choose the appropriate file formats for images to
                  minimize their impact on page load times. Use responsive
                  images and lazy loading techniques to deliver a visually
                  appealing experience without sacrificing performance.
                </p>
                <h4 className="mt-4">Component-Based Architecture:</h4>
                <p className="mt-2 text-muted">
                  Embrace a modular and component-based architecture, utilizing
                  frameworks like React or Vue.js. This approach promotes
                  reusability, maintainability, and scalability, making it
                  easier to manage complex applications.
                </p>
              </article>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Home;
