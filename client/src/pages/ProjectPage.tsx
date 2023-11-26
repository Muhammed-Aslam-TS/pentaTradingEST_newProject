import Footer2 from "../components/Footer2";
import Header from "../components/Header";
import Navbar from "../components/Navbar";



export const ProjectPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>


      <div className="mx-auto max-w-7xl p-16 pt-52">
        <div className="text-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            PROJECTS{" "}
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on instagram
            <span className="underline cursor-pointer">
              followuspleaseee
            </span>{" "}
            and tag us to get featured on our timeline
          </p>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2 pt-24">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2 image-container">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="{{item.img[0]}}"
              />
              <div className="image-text flex flex-col">
                <p className="text-white text-3xl mb-2"></p>
                <p className="text-white mb-2">click heare</p>
                <button className="px-3 py-1 rounded-lg bg-white text-black">
                  Go to Work{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
