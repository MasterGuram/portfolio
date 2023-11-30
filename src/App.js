import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Tools from "./components/Tools";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
      <Skills />
      <Tools />
      <Contact />

      <SocialLinks /> 
    </div>
  );
}

export default App;
