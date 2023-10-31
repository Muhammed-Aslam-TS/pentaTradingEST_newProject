import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <div>
        <Navbar />

        </div>
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
        <div>
<Footer2/>
        </div>
      </div>
    </>
  );
}

export default App;
