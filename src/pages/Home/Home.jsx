import Bynd from "../../assets/AgenciesNames/Bynd.svg";
import Deeson from "../../assets/AgenciesNames/Deeson.svg";
import Fishinabottle from "../../assets/AgenciesNames/Fishinabottle.svg";
import Impero from "../../assets/AgenciesNames/Impero.svg";
import Synthetic from "../../assets/AgenciesNames/Synthetic.svg";
import WhiteBear from "../../assets/AgenciesNames/WhiteBear.svg";
import Rawnet from "../../assets/AgenciesNames/Rawnet.svg";

import Hero from "../../components/Home/Hero/Hero";

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
          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10 "></div>
            <img
              src={Bynd}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={Synthetic}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={Fishinabottle}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={Rawnet}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={Impero}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={WhiteBear}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>

          <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
            <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10"></div>
            <img
              src={Deeson}
              alt=""
              className="translate-y-0 group-hover:-translate-y-12  duration-300 "
            />
          </div>
        </div>
      </div>
      {/* Agencies we’ve levelled up end */}
    </>
  );
};

export default Home;
