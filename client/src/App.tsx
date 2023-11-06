import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Services3 from "./components/Services3";
import Stats from "./components/Stats";


function App() {
  return (
    <>
      <div>
        
          <Navbar />
        
        
          <Banner />



          <Projects2/>

          <About />


          {/* <Projects/> */}
        
        
          {/* <Services2 /> */}
        
        
        
        
          {/* <Services3 /> */}
        
        
          <Stats />
        
        
          <Services />
        
        
          <Gallery />
        
        
          <Footer />
        
        
          <Footer2 />
        
      </div>
    </>
  );
}

export default App;
