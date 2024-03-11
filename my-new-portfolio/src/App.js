import Navbar from "./Components//Navbar/Navbar"
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro"
import About from "./Components/About/About"
import Experience from "./Components//Experience/Experience"
// import Portfolio from "./Components/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Experience />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
