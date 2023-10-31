import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
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
        <div>
          <Gallery />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
