import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

import Projects2 from "./components/Projects2";
import Services from "./components/Services";

import Stats from "./components/Stats";
import Sample from "./components/Sample";


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
        
          <Sample/>
      
        
      </div>
    </>
  );
}

export default App;
