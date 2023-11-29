import { useEffect } from "react";
import Footer2 from "../components/Footer2";
import Header from "../components/Header";
import Navbar from "../components/Navbar"
import ScrollTop from "../components/ScrollTop";

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar activeLink={"about"}/>
      <div className="bg-blue-500 w-full h-screen ">
        <Header />
        <div className="flex justify-center">
          <div className="bg-green-500 w-96 h-52"></div>
          <div className="bg-red-500 w-96 h-52"></div>
        </div>
      </div>
      <Footer2 />
      <ScrollTop/>
    </div>
  );
};
