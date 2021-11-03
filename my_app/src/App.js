// import "./portfoilo0.css";
// import "./css/bootstrapt.main.css";
import "./App.css";

import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Masthead from "./component/Masthead";
import Project from "./component/Project";
import Skills from "./component/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Masthead />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
