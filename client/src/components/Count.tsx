import CountUp from "react-countup";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaPlus } from "react-icons/fa";

const Count = () => {
  return (
    <div className="md:flex flex-col-2 container">
      <div className="w-full gap-28 mt-11 sm:pe-4 cursor-pointer">
        <div className="flex flex-col w-full items-center mb-8 sm:mb-0 sm:flex-col-2">
          <div className="mb-2 w-full flex items-center justify-center">
            {" "}
            {/* Added a flex container */}
            {/* <FontAwesomeIcon icon={faPlus} size="lg" /> */}
            <FaPlus />
            <CountUp
              className="font-bold text-3xl"
              start={0}
              end={200}
              duration={3}
            />
          </div>
          <span className="text-dark font-bold">happy clients</span>
        </div>
      </div>
      {/* Repeat the above structure for other sections */}
      <div className="w-full gap-28 mt-11 sm:pe-4 cursor-pointer">
        <div className="flex flex-col w-full items-center mb-8 sm:mb-0 sm:flex-col-2">
          <div className="mb-2 w-full flex items-center justify-center">
            {" "}
            {/* Added a flex container */}
            {/* <FontAwesomeIcon icon={faPlus} size="lg" /> */}
            <FaPlus />
            <CountUp
              className="font-bold text-3xl"
              start={0}
              end={20}
              duration={3}
            />
          </div>
          <span className="text-dark font-bold">happy clients</span>
        </div>
      </div>
      <div className="w-full gap-28 mt-11 sm:pe-4 cursor-pointer">
        <div className="flex flex-col w-full items-center mb-8 sm:mb-0 sm:flex-col-2">
          <div className="mb-2 w-full flex items-center justify-center">
            {" "}
            {/* Added a flex container */}
            {/* <FontAwesomeIcon icon={faPlus} size="lg" /> */}
            <FaPlus />
            <CountUp
              className="font-bold text-3xl"
              start={0}
              end={50}
              duration={3}
            />
          </div>
          <span className="text-dark font-bold">happy clients</span>
        </div>
      </div>
      <div className="w-full gap-28 mt-11 sm:pe-4 cursor-pointer">
        <div className="flex flex-col w-full items-center mb-8 sm:mb-0 sm:flex-col-2">
          <div className="mb-2 w-full flex items-center justify-center">
            {" "}
            {/* Added a flex container */}
            {/* <FontAwesomeIcon icon={faPlus} size="lg" /> */}
            <FaPlus />
            <CountUp
              className="font-bold text-3xl"
              start={0}
              end={100}
              duration={3}
            />
          </div>
          <span className="text-dark font-bold">happy clients</span>
        </div>
      </div>
    </div>
  );
};

export default Count;
