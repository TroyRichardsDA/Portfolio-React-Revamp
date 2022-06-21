import {
  Nav,
  Footer,
  Header,
  Modal,
  About,
  Skills,
  Projects,
} from "./Components";
import logo from "./logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

const dark = {
  color: "rgb(230, 230, 230)",
};

const light = {
  color: "black",
};

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [theme, setTheme] = useState(light);
  const [isDark, setIsDark] = useState(false);

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
        <Nav
          light={light}
          dark={dark}
          setIsDark={setIsDark}
          isDark={isDark}
          theme={theme}
          setTheme={setTheme}
          setDisplayModal={setDisplayModal}
          logo={logo}
        />
        <Modal setDisplayModal={setDisplayModal} />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer setDisplayModal={setDisplayModal} />
      </ThemeProvider>
    </div>
  );
}

export default App;
