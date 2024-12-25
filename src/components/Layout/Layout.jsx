import React, { useState, useEffect } from "react";
import Footer from "../_shared/Footer/Footer";
import Header from "../_shared/Header/Header";

const Layout = ({ children, activeSection, handleNavigationClick }) => {
  const getMode = () => {
    const storedMode = localStorage.getItem("mode");
    return storedMode || "light";
  };

  const [mode, setMode] = useState(getMode);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header
        activeSection={activeSection}
        handleMode={handleMode}
        mode={mode}
        handleNavigationClick={handleNavigationClick}
      />
      {children}
      <Footer
        activeSection={activeSection}
        mode={mode}
        handleNavigationClick={handleNavigationClick}
      />
    </>
  );
};

export default Layout;
