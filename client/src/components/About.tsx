// import Count from "./Count";
import image from "../assets/images/about.png";
import aboutBg from "../assets/images/aboutBackground.jpg";

const About = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container md:flex w-full h-auto items-center justify-center gap-36"
      >
        <div className="flex md:shadow-none sm:justify-center sm:shadow-2xl w-80 h-96 md:justify-end mt-7 ms-11 ">
          <img className="h-full w-full" src={image} alt="" srcSet="" />
        </div>

        <div className="mt-10 ms-8 me-3">
          <div>
            <p className="text-xl text-gray-600">Loram ipsum dolor sit</p>
            <h1 className="font-bold text-4xl">
              <span className="text-blue-800">WE ARE</span> RIGHT FLOORING
            </h1>
            <h1 className="font-bold text-4xl">EXPERTS SINCE 2021</h1>
            <br />
            <p className="text-gray-600">
              We would like to introduce ourselves,br “Penta Trading Est.”
              Basically located in Riyadh,
              <br /> we are the pioneer and specialized in the field of
              resilient flooring “a complete and total
              <br /> flooring solution house”, for supply and application of
              flooring solutions and finishing <br />
              materials for various applications.
            </p>
            <p className="text-gray-600 pt-2">
              Our Main partners partners are basically from Europe & US offering
              high quality and
              <br /> standard items in accordance with client requirement and
              had completed yearly several
              <br />
              projects in various sectors with our qualified technical outfit
              team.
            </p>
            <p className="text-gray-600 pt-2">
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
              diam.
            </p>
            <p className="text-gray-600">
              Our basic main products are Vinyl, Linoleum, rubber flooring,
              carpet tiles, <br />
              raised or access floor, threshold and door profiles, entrance
              mats, wet area mats,
              <br />
              impact protect systems (Rubber & acrylic type), cubicles, steel &
              aluminum
              <br />
              profiles etc. for applications such as commercial, health care,
              education sector
              <br />
              etc. with supply and installation with a qualified technical team.
            </p>
          </div>
          {/* <Count /> */}
          <div className="flex justify-start">
            <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
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
  );
};

export default About;
