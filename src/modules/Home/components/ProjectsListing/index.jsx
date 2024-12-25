import { Col, Container, Row, Image } from "react-bootstrap";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import vteams from "../../../../assets/vteams.png";
import osc from "../../../../assets/osc.png";
import weatec from "../../../../assets/Weatec.png";

const ProjectsListing = () => {
  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col xs={12} md={7} lg={8}>
            <article>
              <h2 className="fw-bold">Featured Projects that I have develop</h2>
              <p className="text-muted mt-4">
                I've dedicated myself to numerous projects over the years, each
                aimed at making a significant impact. However, the ones I hold
                in the highest regard are those that continue to influence and
                improve the lives of people on a large scale. These projects
                play a vital role in contributing to the overall enhancement of
                the economic ecosystem, and their ongoing impact is a source of
                great pride for me.
              </p>
            </article>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              icon={
                <>
                  {" "}
                  <Image
                    src={`https://vincellar.vinfolio.com/favicon.png`}
                    className="img-fluid"
                    alt="Vin-Cellar"
                  />
                </>
              }
              projectName="VinCellar"
              projectDescription="VinCellar is the most complete online wine cellar management system with robust features and an active online community"
              link="https://vincellar.vinfolio.com/"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              icon={
                <>
                  {" "}
                  <Image src={vteams} className="img-fluid" alt="vteams" />
                </>
              }
              projectName="vTeams"
              projectDescription="vTeams offer you a talented team of Solution Architects, QA Specialists, Skilled Coders, Certified Project Managers, Business Analysts, and other Expert Developers, all equipped to take complete care of your project."
              link="https://vteams.com/"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              icon={
                <>
                  {" "}
                  <Image src={osc} className="img-fluid" alt="osc" />
                </>
              }
              projectName="OutDoor Sport Connection"
              projectDescription="Outdoor Sport Connection is the new online tool for the outdoor enthusiast. OSC is an abbreviation for Outdoor Sport Connection. You will find this referenced in our logo and in various places through out the site."
              link="https://www.outdoorsportconnection.com/inside"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectCard
              icon={
                <>
                  {" "}
                  <Image src={weatec} className="img-fluid" alt="weatec" />
                </>
              }
              projectName="Weatec"
              projectDescription="Developing an extensive and intricate web application focused on Internet Accountability for WEATEC."
              link={`http://stagingv3.weatec.com/`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsListing;
