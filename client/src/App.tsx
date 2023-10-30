import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Banner />
        </div>
        <div>
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
