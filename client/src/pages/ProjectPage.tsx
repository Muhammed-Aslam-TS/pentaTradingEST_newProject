import Navbar from "../components/Navbar";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import { useEffect } from "react";


export const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar activeLink={'projects'}/>
        <Header/>


        <div className="2xl:container 2xl:mx-auto">
        <div className="py-6 lg:px-20 md:px-6 px-4">
          {/* <h1 className="text-3xl font-extralight ">Our Works</h1> */}
          <div
            className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">

            <div>
              <div className="relative">
                <div className="relative group">
                  <img
                    className="w-full transition-opacity duration-500 group-hover:opacity-25"
                    src={banner3}
                    alt="A girl Posing Image"
                  />
                  <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button className="bg-transparent font-medium text-base leading-4 border-2 border-gray-900 py-3 w-full mt-2 hover:bg-gray-900 hover:text-white">
                      Quick View
                    </button>
                  </div>
                </div>
                {/* <p className="font-semibold  leading-5 md:mt-6 mt-4">RESIDENTIAL</p> */}
              </div>
            </div>

            

            <div>
              <div className="relative">
                <div className="relative group">
                  <img className="w-full transition-opacity duration-500 group-hover:opacity-25" src={banner2}
                    alt="A girl Posing Image" />
                  <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                      className="bg-transparent font-medium text-base leading-4 border-2 border-gray-900 py-3 w-full mt-2  hover:bg-gray-900 hover:text-white">
                      Quick View
                    </button>
                  </div>
                </div>
                {/* <p className="font-semibold  leading-5  md:mt-6 mt-4">
                  COMMERCIAL
                </p> */}
                {/* <!-- <p className="text-gray-400 leading-5 mt-4 font-extralight ms-1 ">Transforming your
              home into a personalized oasis of comfort and style</p> --> */}
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="relative group">
                  <img className="w-full transition-opacity duration-500 group-hover:opacity-25" src={banner4}
                    alt="A girl Posing Image" />
                  <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                      className="bg-transparent font-medium text-base leading-4 border-2 border-gray-900 py-3 w-full mt-2  hover:bg-gray-900 hover:text-white">
                      Quick View
                    </button>
                  </div>
                </div>
                {/* <p className="font-semibold  leading-5  md:mt-6 mt-4">
                  PREMIUM VILLAS
                </p> */}
                {/* <!-- <p className="text-gray-400 leading-5 mt-4 ms-1  font-extralight">Transforming your
              home into a personalized oasis of comfort and style</p> --> */}
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer2 />
    </div>
  );
};
