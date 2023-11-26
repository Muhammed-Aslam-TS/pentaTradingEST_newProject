import About from "../components/About";
import Banner from "../components/Banner";
import Footer2 from "../components/Footer2";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Projects2 from "../components/Projects2";
import { Sample } from "../components/Sample";
import Services from "../components/Services";
import Stats from "../components/Stats";

export const HomePage = ()=> {
  return (   
      <div>
        <Navbar activeLink={"home"}/>
        <Banner/>
        <Projects2/>
        <About/>
        <Stats/>
        <Services/>
        <Sample/>
        <Gallery/>
        <Footer2/>
      </div>  
  );
}

