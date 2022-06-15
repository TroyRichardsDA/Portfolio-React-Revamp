import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";
import logo from "./logo.svg";
import Projects from "./Components/Projects/Projects";
import ScrollObserver from "./Context/ScrollObsever";

function App() {
  return (
    <ScrollObserver>
      <div className="App">
        <Nav logo={logo} />
        <Modal />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ScrollObserver>
  );
}

export default App;
