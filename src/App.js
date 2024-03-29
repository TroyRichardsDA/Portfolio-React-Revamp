import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { lazy, Suspense } from "react";

const Skills = lazy(() => import("./Components/Skills"));
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Modal = lazy(() => import("./Components/Modal"));
const BackgroundIcons = lazy(() => import("./Components/BackGroundIcons"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <BackgroundIcons />
        <Modal />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
