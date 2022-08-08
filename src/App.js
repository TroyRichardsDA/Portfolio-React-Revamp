import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { lazy, Suspense, useState } from "react";

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
  const [theme, setTheme] = useState(dark);
  const [isDark, setIsDark] = useState(true);

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
        />
        <BackgroundIcons />
        <Modal />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
