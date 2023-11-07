import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.webp";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <>
      <div className="hidden  h-auto lg:flex items-center  relative">
        <div className=" z-10 flex w-full pt-20 pb-12">
          <div className="w-1/2 p-3 flex flex-col items-end pt-16">
            <div className="w-4/5">
            <h2 className="text-5xl py-3">
              Lorem Ipsum typescript
            </h2>
            <div className="py-5">
              when an unknown  scrambled it to make a type specimen book<br/> printer took a galley  of type and <br/>
              scrambled it to make a type specimen book.
            </div>
            <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
              Explore
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
          <div
            className="w-1/2"
            style={{
              borderRadius: "5px",
              boxShadow: "rgba(40, 36, 36, 0.25) -10px 10px 5px",

            }}
          >
            <Carousel
              showStatus={false}
              showThumbs={false}
              // showArrows={false}
              infiniteLoop
              autoPlay
              interval={3000} 
            >
              <div>
                <img
                  src={banner1}
                  alt="Your Image 1"
                  className="object-contain h-full w-full"
                />
              </div>
              <div>
                <img
                  src={banner2}
                  alt="Your Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <img
                  src={banner3}
                  alt="Your Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <img
                  src={banner4}
                  alt="Your Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <img
                  src={banner5}
                  alt="Your Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-5/6 w-8/12 before:bg-gray-200 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-0"></div>
      </div>

      <div className="lg:hidden mt-18 lg:mt-0 h-auto z-10 flex flex-col w-full ">
        <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img
              src={banner1}
              alt="Your Image 1"
              className="object-contain h-full w-full"
            />
          </div>
          <div>
            <img
              src={banner2}
              alt="Your Image 2"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <img
              src={banner3}
              alt="Your Image 2"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <img
              src={banner4}
              alt="Your Image 2"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <img
              src={banner5}
              alt="Your Image 2"
              className="object-cover h-full w-full"
            />
          </div>
        </Carousel>
        <div className="p-8 mt-5 bg-gray-200">
        <h2 className="text-5xl py-3">
              Lorem Ipsum typescript
            </h2>
            <div className="py-5">
              when an unknown  scrambled it to make a type specimen book<br/> printer took a galley  of type and <br/>
              scrambled it to make a type specimen book.
            </div>
          <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
            Explore
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

    </>
  );
};

export default Banner;
