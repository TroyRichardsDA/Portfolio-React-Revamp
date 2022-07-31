import { Modal } from "./Components";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import logo from "./logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import BackGroundIcons from "./Components/BackGroundIcons";

const dark = {
  color: "rgb(230, 230, 230)",
  backgroundColor: "black",
};

const light = {
  color: "black",
  backgroundColor: "white",
};

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [theme, setTheme] = useState(dark);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (displayModal) {
      document.body.classList += " modal-open";
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [displayModal]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar
          light={light}
          dark={dark}
          setIsDark={setIsDark}
          isDark={isDark}
          theme={theme}
          setTheme={setTheme}
          setDisplayModal={setDisplayModal}
          logo={logo}
        />
        <BackGroundIcons />
        <Modal setDisplayModal={setDisplayModal} />
        <Hero />
        <About setDisplayModal={setDisplayModal} />
        <Projects />
        <Footer setDisplayModal={setDisplayModal} />
      </ThemeProvider>
    </div>
  );
}

export default App;
