import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Avatar from "../Avatar/Avatar";
import Nav from "../../Nav/Nav";
import LightMode from "../../../assets/svg/LightMode";
import "./header.css"; // Import a CSS file for styling (create this file)
import DarkModeIcon from "../../../assets/svg/DarkModeIcon";

const Header = ({ activeSection, handleMode, mode, handleNavigationClick }) => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the value (e.g., 100) based on when you want the navbar to become sticky
      setIsNavSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Container className="py-2 position-relative">
          <div className="d-flex justify-content-between align-items-center">
            <Avatar />
            <div className={`nav-container ${isNavSticky ? "sticky" : ""}`}>
              <Nav
                footer={false}
                activeSection={activeSection}
                mode={mode}
                handleNavigationClick={handleNavigationClick}
              />
            </div>
            <button
              style={{
                borderRadius: "20px",
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.055)",
              }}
              className={`change-Mode ${isNavSticky ? "sticky" : ""}`}
              onClick={handleMode}
            >
              {mode === "light" ? <LightMode /> : <DarkModeIcon />}
            </button>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
