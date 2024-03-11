import Navbar from "./Components//Navbar/Navbar"
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro"
import About from "./Components/About/About"
import Experience from "./Components//Experience/Experience"
import Projects from "./Components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
