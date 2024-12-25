const Nav = ({ footer, activeSection, mode, handleNavigationClick }) => {
  return (
    <>
      <nav
        style={{
          boxShadow: footer
            ? `none`
            : "0 0.125rem 0.25rem rgba(0, 0, 0, 0.055)",
        }}
        className={`user-select-none ${
          footer
            ? `d-flex pb-3 py-md-3 py-lg-0`
            : `rounded-pill light-Nav px-4 d-none d-md-block d-lg-block ${
                mode === `light` ? `bg-white` : "dark-Nav"
              }`
        }`}
      >
        <ul className="list-unstyled d-flex gap-3 navList">
          <li
            className={`${footer ? null : `py-2`} ${
              activeSection === "About"
                ? `active ${footer ? null : `borderBottom`}`
                : ""
            }`}
          >
            <a
              href="#about"
              onClick={(e) => handleNavigationClick(e, "about")}
              className={`text-decoration-none`}
            >
              About
            </a>
          </li>
          <li
            className={`${footer ? null : `py-2`} ${
              activeSection === "Projects"
                ? `active ${footer ? null : `borderBottom`}`
                : ""
            }`}
          >
            <a
              className={`text-decoration-none`}
              href="#projects"
              onClick={(e) => handleNavigationClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li
            className={`${footer ? null : `py-2`} ${
              activeSection === "Skills"
                ? `active ${footer ? null : `borderBottom`}`
                : ""
            }`}
          >
            <a
              className={`text-decoration-none`}
              href="#skills"
              onClick={(e) => handleNavigationClick(e, "skills")}
            >
              My Skills
            </a>
          </li>
          <li
            className={`${footer ? null : `py-2`} ${
              activeSection === "frontend"
                ? `active ${footer ? null : `borderBottom`}`
                : ""
            }`}
          >
            <a
              className={`text-decoration-none`}
              href="#frontend"
              onClick={(e) => handleNavigationClick(e, "frontend")}
            >
              Full Stack Excellence
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
