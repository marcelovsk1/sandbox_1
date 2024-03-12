import Navbar from "./Components//Navbar/Navbar"
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro"
import About from "./Components/About/About"
import Experience from "./Components//Experience/Experience"
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
