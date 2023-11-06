import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.webp";

const Projects2 = () => {
  return (
    <section>
  <div className="2xl:container 2xl:mx-auto">
    <div className="py-6 lg:px-20 md:px-6 px-4">
      <h1 className="text-3xl font-extralight font-arial">Our Works</h1>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">

        <div>
          <div className="relative">
            <div className="relative group hover:opacity-25">
              <img className="w-full " src={banner3}
                alt="A girl Posing Image" />
              <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button
                  className="bg-transparent font-medium text-base leading-4 border-2 border-black py-3 w-full mt-2 ">
                  Quick View
                </button>
              </div>
            </div>
            <p className="font-normal font-arial leading-5 md:mt-6 mt-4">
              RESIDENTIAL
            </p>
            {/* <!-- <p className="text-gray-400 leading-5 mt-4 font-extralight font-new1 ms-1">Transforming your
              home into a personalized oasis of comfort and style</p> --> */}
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="relative group">
              <img className="w-full hover:opacity-25" src={banner2}
                alt="A girl Posing Image" />
              <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button
                  className="bg-transparent font-medium text-base leading-4 border-2 border-black py-3 w-full mt-2 ">
                  Quick View
                </button>
              </div>
            </div>
            <p className="font-normal font-arial leading-5  md:mt-6 mt-4">
              COMMERCIAL
            </p>
            {/* <!-- <p className="text-gray-400 leading-5 mt-4 font-extralight ms-1 font-arial">Transforming your
              home into a personalized oasis of comfort and style</p> --> */}
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="relative group">
              <img className="w-full hover:opacity-25" src={banner4}
                alt="A girl Posing Image" />
              <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button
                  className="bg-transparent font-medium text-base leading-4 border-2 border-black py-3 w-full mt-2 ">
                  Quick View
                </button>
              </div>
            </div>
            <p className="font-normal font-arial leading-5  md:mt-6 mt-4">
              PREMIUM VILLAS
            </p>
            {/* <!-- <p className="text-gray-400 leading-5 mt-4 ms-1 font-arial font-extralight">Transforming your
              home into a personalized oasis of comfort and style</p> --> */}
          </div>

        </div>
      </div>

    </div>
  </div>

</section>
  )
}

export default Projects2