import Bynd from "../../assets/AgenciesNames/Bynd.svg";
import Deeson from "../../assets/AgenciesNames/Deeson.svg";
import Fishinabottle from "../../assets/AgenciesNames/Fishinabottle.svg";
import Impero from "../../assets/AgenciesNames/Impero.svg";
import Synthetic from "../../assets/AgenciesNames/Synthetic.svg";
import WhiteBear from "../../assets/AgenciesNames/WhiteBear.svg";
import Rawnet from "../../assets/AgenciesNames/Rawnet.svg";

import Hero from "../../components/Home/Hero/Hero";
import AgencyName from "../../components/Home/AgencyNames/AgencyName";

import freeHindsightImg from "../../assets/freeHindsight.png";

const agencyNames = [
  {
    name: "Bynd",
    img: Bynd,
  },
  {
    name: "Deeson",
    img: Deeson,
  },
  {
    name: "Fishinabottle",
    img: Fishinabottle,
  },
  {
    name: "Impero",
    img: Impero,
  },
  {
    name: "Synthetic",
    img: Synthetic,
  },
  {
    name: "WhiteBear",
    img: WhiteBear,
  },
  {
    name: "Rawnet",
    img: Rawnet,
  },
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* Agencies we’ve levelled up start */}

      <div className=" px-10 py-16 flex items-center gap-16 flex-col md:flex-row">
        <div className="w-fit">
          <p className="mb-8 font-medium">Agencies we’ve levelled up</p>
          <h2 className="text-7xl  mb-8">
            Grown <span className="block">by 2Y3X</span>
          </h2>
        </div>
        <div className="flex-1 flex items-center flex-wrap gap-8 justify-center ">
          {agencyNames.map((agencyName, index) => (
            <AgencyName key={index} agnecyName={agencyName} />
          ))}
        </div>
      </div>
      {/* Agencies we’ve levelled up end */}

      {/* free hindsight start */}

      <div className="w-full relative">
        <div className="w-fit relative">
          <img src={freeHindsightImg} alt="" className="" />

          {/* button Your goal container start */}
          <div className="absolute top-[20%] left-[12%] group transform rotate-90">
            {/* button */}
            <button className="text-black py-2 px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Your Goal
            </button>
            {/* line */}
            <div className="absolute w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Your goal container end */}

          {/* button Implement container start */}
          <div className="absolute top-[32%] left-[17.4%] group transform rotate-90">
            {/* button */}
            <button className="text-black py-2 px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Implement
            </button>
            {/* line */}
            <div className="absolute w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Implement container end */}

          {/* button Implement container start */}
          <div className="absolute top-[42.5%] left-[12%] group transform rotate-90">
            {/* button */}
            <button className="text-black py-2 px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Prototype
            </button>
            {/* line */}
            <div className="absolute w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Implement container end */}

          {/* button Implement container start */}
          <div className="absolute top-[52.3%] left-[7%] group transform rotate-90">
            {/* button */}
            <button className="text-black py-2 px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Research
            </button>
            {/* line */}
            <div className="absolute w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Implement container end */}
        </div>

        {/* Free hindsight text start */}
        <div className="absolute w-1/2 top-1/2 transform -translate-y-1/2 right-0 text-white space-y-8">
          <p className="">Getting Started</p>
          <h2 className="text-5xl">Free hindsight</h2>
          <p className="text-2xl">
            How do you grow from £2m to £10m? From 30 to 100 staff? From
            ownership to exit?
          </p>
          <p className="text-2xl">
            The 2Y3X framework provides a clear how to, while our industry
            experience provides the invaluable done that.
          </p>
          <p className="text-2xl">
            We’ve got to the top and want to help next generation get there too.
            A chat with our growth specialists will help you step back, take
            stock, and chart your next move.
          </p>

          <button className="border-2 border-white py-4 px-10  hover:text-black hover:bg-white duration-300 text-white bg-transparent">
            Take the fast self assessment
          </button>
        </div>
        {/* Free hindsight text end */}
      </div>
      {/* free hindsight end */}
    </>
  );
};

export default Home;
