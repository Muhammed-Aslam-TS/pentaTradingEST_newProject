import CountUp from "react-countup";

const Count = () => {
  return (
    <div>
      <div className="flex flex-row sm:flex-col-2 justify-center columns-2 gap-3 mt-8 ">
        <div className="basis-1/4 flex flex-col justify-center items-center w-24 h-16 ">
          <CountUp
            className="font-bold text-3xl"
            start={0}
            end={250}
            duration={3}
          />
          <h1>Happy clients</h1>
        </div>
        <div className="basis-1/4 flex flex-col justify-center items-center w-24 h-16">
          <CountUp
            className="font-bold text-3xl"
            start={0}
            end={35}
            duration={3}
          />
          <p>Compleat Projects</p>
        </div>
        <div className="basis-1/4 flex flex-col justify-center items-center w-24 h-16">
          <CountUp
            className="font-bold text-3xl"
            start={0}
            end={100}
            duration={3}
          />
          <h1>cup of tea</h1>
        </div>
        <div className="basis-1/4 flex flex-col justify-center items-center w-24 h-16">
          <CountUp
            className="font-bold text-3xl"
            start={0}
            end={9}
            duration={3}
          />
          <h1>conty</h1>
        </div>
      </div>
    </div>
  );
};

export default Count;
