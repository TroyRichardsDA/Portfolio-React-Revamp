import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";

const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Modal = lazy(() => import("./Components/Modal"));
const BackgroundIcons = lazy(() => import("./Components/BackgroundIcons"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          light={light}
          dark={dark}
          setIsDark={setIsDark}
          isDark={isDark}
          theme={theme}
          setTheme={setTheme}
          setDisplayModal={setDisplayModal}
        />
        <BackgroundIcons />
        <Modal setDisplayModal={setDisplayModal} />
        <Hero />
        <About setDisplayModal={setDisplayModal} />
        <Projects />
        <Footer setDisplayModal={setDisplayModal} />
      </Suspense>
    </div>
  );
}

export default App;
