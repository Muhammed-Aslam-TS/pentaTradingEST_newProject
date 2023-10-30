import Count from "./Count";
import image from "../assets/images/about.png";
import aboutBg from "../assets/images/aboutBackground.jpg";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" md:flex w-full h-screen items-center justify-center gap-36"
      >
        <div className="flex md:shadow-none sm:justify-center sm:shadow-2xl w-80 h-96 md:justify-end mt-7 ms-11 ">
          <img className="h-full w-full" src={image} alt="" srcSet="" />
        </div>

        <div className="mt-10 ms-8 me-3">
          <div>
            <p className="text-xl text-gray-600">Loram ipsum dolor sit</p>
            <h1 className="font-bold text-4xl">Loram ipsum dolor sit</h1>
            <h1 className="font-bold text-4xl">amet consectrtu</h1>
            <br />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600">
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
            </p>
            <p className="text-gray-600">
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
              diam.
            </p>
            <p className="text-gray-600">
              Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>

            <br />
            <p className="text-gray-600">
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
              diam.
            </p>
            <p className="text-gray-600">
              Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
          </div>
          <Count />
          <div className="flex justify-start">
            <button className="bg-gray-500 text-white p-3 rounded-lg mt-12 ">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
