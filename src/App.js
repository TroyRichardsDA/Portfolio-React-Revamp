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
    <div className="App">
      <Nav setDisplayModal={setDisplayModal} logo={logo} />
      <Modal setDisplayModal={setDisplayModal} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer setDisplayModal={setDisplayModal} />
    </div>
  );
}

export default App;
