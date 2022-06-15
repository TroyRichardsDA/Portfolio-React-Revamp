import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";
import logo from "./logo.svg";
import Projects from "./Components/Projects/Projects";
import ScrollObserver from "./Context/ScrollObsever";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (displayModal) {
      document.body.classList += " modal-open";
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [displayModal]);

  return (
    <ScrollObserver>
      <div className="App">
        <Nav setDisplayModal={setDisplayModal} logo={logo} />
        <Modal setDisplayModal={setDisplayModal} />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer setDisplayModal={setDisplayModal} />
      </div>
    </ScrollObserver>
  );
}

export default App;
