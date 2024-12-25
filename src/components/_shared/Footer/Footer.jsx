import { Container } from "react-bootstrap";
import Nav from "../../Nav/Nav";

const Footer = ({ activeSection, mode, handleNavigationClick }) => {
  return (
    <>
      <section className="pt-5">
        <footer className="footer mt-5">
          <Container className="mt-5 py-5">
            <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-column align-items-center">
              <div>
                <Nav
                  footer={true}
                  activeSection={activeSection}
                  mode={mode}
                  handleNavigationClick={handleNavigationClick}
                />
              </div>
              <div>
                <p className="copyRights">
                  © 2023 Mohammad Bilal Ejaz. All rights reserved.
                </p>
              </div>
            </div>
          </Container>
        </footer>
      </section>
    </>
  );
};

export default Footer;
