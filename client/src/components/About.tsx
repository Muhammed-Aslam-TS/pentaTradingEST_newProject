// import Count from "./Count";
import image from "../assets/images/about.png";
import aboutBg from "../assets/images/about-us-background.jpg";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-auto py-0 bg-fixed lg:py-28 flex justify-center"
      >
        <div className="max-w-screen-xl md:flex px-4 ">
          <div className="flex justify-center lg:justify-start items-center w-full md:w-1/2 h-auto p-5 md:p-0">
            <img className=" w-3/5 lg:w-3/5 " src={image} alt="" srcSet="" />
          </div>

          <div className="w-full md:w-1/2 h-auto flex flex-col justify-center p-4">
            <div className="">
              <h1 className="font-bold text-4xl">
                <span className="text-blue-800">WE ARE</span> RIGHT FLOORING
              </h1>
              <h1 className="font-bold text-4xl mb-5">EXPERTS SINCE 2021</h1>

              <p className="text-gray-700 ">
                We would like to introduce ourselves,“Penta Trading Est.”
                Basically located in Riyadh,
                we are the pioneer and specialized in the field of
                resilient flooring “a complete and total
                flooring solution house”, for supply and application of
                flooring solutions and finishin
                materials for various applications.
              </p>
              <p className="text-gray-700 pt-2">
                Our Main partners partners are basically from Europe & US offering
                high quality and
                standard items in accordance with client requirement and
                had completed yearly several
                projects in various sectors with our qualified technical outfit
                team projects in various sectors with our qualified technical outfit
                team.
              </p>

            </div>
            {/* <Count /> */}
            <div className="flex justify-start">
              <button className=" sm:w-auto w-full mt-8 mb-5 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                More Details
                <div className="ml-2 mt-0.5">
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 8H12.6666"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.6667L12.6667 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 5.33301L12.6667 7.99967"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
