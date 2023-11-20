const Gallery = () => {
  return (
    <div className="pt-10">
      <h1 className="flex justify-center md:mt-16 text-2xl font-bold">
        PROJECTS GALLERY
      </h1>
      <div className="container max-w-screen-xl mx-auto md:px-4 px-10 py-2 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center hover:transform hover:scale-110 transition duration-300 "
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
            />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="hover:text-black hover:bg-white hover:border hover:border-black sm:w-auto w-full mt-8 m-7 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
          More Projects
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
  );
};

export default Gallery;
