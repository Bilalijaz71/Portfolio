import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

const skills = [
  {
    name: 'HTML5',
    progessIndicator: 90
  },
  {
    name: 'CSS3 | SCSS | SASS | CSS Module',
    progessIndicator: 80
  },
  {
    name: 'BOOTSTRAP | TAILWIND | REACT BOOTSTRAP',
    progessIndicator: 80
  },
  {
    name: 'VANILLA JAVASCRIPT | ES6 | JQUERY',
    progessIndicator: 70
  },
  {
    name: 'MongoDB/MySQL ',
    progessIndicator: 70
  },
  {
    name: 'REACTJS ',
    progessIndicator: 70
  },
  {
    name: 'Express JS ',
    progessIndicator: 70
  },
  {
    name: 'NodeJS',
    progessIndicator: 70
  },
  {
    name: 'REACT REDUX | CONTEXT API | REACT QUERY',
    progessIndicator: 70
  },
  {
    name: 'AXIOS | FETCH API',
    progessIndicator: 80
  },
  {
    name: 'ANT DESIGN | MATERIAL UI',
    progessIndicator: 75
  },
  {
    name: 'SCRUM | AGILE',
    progessIndicator: 65
  },
  {
    name: 'GITHUB | BITBUCKET',
    progessIndicator: 80
  },
  {
    name: 'JIRA | TAIGA | TRELLO | CLICKUP',
    progessIndicator: 71
  },
]

const Skills = () => {
  return (
    <>
      <Container className="skills-Wrapper">
        <Row>
          <Col xs={12} md={7} lg={7}>
            <article>
              <h2>
                Transforming ideas into powerful softwares that drive results
              </h2>
              <p className="mt-4 text-muted">
                As a Senior Software Engineer,
                I possess a robust skill set that encompasses a deep understanding of
                software development principles, design patterns, and best practices.
                I am proficient in multiple programming languages, including Python,
                and JavaScript, and have extensive experience with frameworks such as NodeJS,
                ExpressJS, MongoDB, MySQL, and React.
              </p>
            </article>
          </Col>
        </Row>
        <Row className="mt-4">
          {
            skills?.map((ele, idx) => <>
              <Col xs={12} md={6} lg={6}>
                <div className="my-3">
                  <h4 className="mb-2">{ele?.name}</h4>
                  <ProgressBar
                    height={13}
                    bgColor={"#38b2ac"}
                    animateOnRender={true}
                    completed={ele?.progessIndicator}
                    isLabelVisible={false}
                  />
                </div>
              </Col>
            </>)
          }
        </Row>
      </Container>
    </>
  );
};

export default Skills;
