import { Card, CardBody } from "react-bootstrap";
import CompanyAvatar from "../../../../../../components/_shared/CompanyAvatar/CompanyAvatar";
import LinkIcon from "../../../../../../assets/svg/LinkIcon";

const ProjectCard = ({ projectName, projectDescription, link, icon }) => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="text-decoration-none user-select-none"
      >
        <Card className="projectCard border-0">
          <CardBody>
            <CompanyAvatar icon={icon} />
            <article className="mt-4 projectDescription">
              <h6>{projectName}</h6>
              <p className="text-muted mt-2">{projectDescription}</p>
              <button className="border-0 outline-0 bg-transparent showProjectBtn mt-3 p-0">
                <LinkIcon />
                <span className="ms-1">
                  {link ? `Show Project` : `In Progress`}
                </span>
              </button>
            </article>
          </CardBody>
        </Card>
      </a>
    </>
  );
};

export default ProjectCard;
