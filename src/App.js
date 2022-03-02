import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import logo from "./logo.svg";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav logo={logo} />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
