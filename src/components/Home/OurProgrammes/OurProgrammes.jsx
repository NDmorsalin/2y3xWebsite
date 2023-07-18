import SectionButton from "../../../share/SectionButton/SectionButton";
import StrategyMap from "../../../assets/OurProgrammes/StrategyMap.svg";
import QuickMap from "../../../assets/OurProgrammes/QuickMap.svg";
import PropositionDevelopment from "../../../assets/OurProgrammes/PropositionDevelopment.svg";

const OurProgrammes = () => {
  return (
    <>
      <section className="w-full md:px-10 px-4 py-16 text-black">
        {/* revinew start */}
        {/* section title */}
        <div className="text-center space-y-4 md:space-y-6">
          <p className="">Start your 2Y3X journey</p>
          <h2 className="md:text-6xl text-4xl ">Our programmes and workshops</h2>
        </div>

        <div className="flex  justify-center flex-wrap mt-16 flex-col md:flex-row md:gap-2 gap-8 ">
          {/* StrategyMap */}
          <div className="flex justify-center items-center flex-col gap-8 md:flex-1 px-4 py-8 md:px-12 md:py-12 relative group overflow-hidden">
            {/* hover animation start */}
            <div className="absolute w-full h-full flex top-0 left-0 -z-10">
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-0 left-0 bg-[#FFB902] border border-[#FFB902] border-r-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-75 left-1/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-100 left-2/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-150 left-3/4 bg-[#FFB902] border border-[#FFB902] border-l-white"></div>
            </div>
            {/* hover animation end */}
            <p className="">Strategy Map</p>

            <img src={StrategyMap} alt="" className="" />

            <p className="text-center">
              Designed for companies that understand the value in defining a
              clear strategy. We help you do this, quickly.
            </p>
            <SectionButton>Set up a no strings call</SectionButton>
          </div>

          {/* QuickMap */}
          <div className="flex justify-center items-center flex-col gap-8 md:flex-1 px-4 py-8 md:px-12 md:py-12 relative group overflow-hidden">
            {/* hover animation start */}
            <div className="absolute w-full h-full flex top-0 left-0 -z-10">
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-0 left-0 bg-[#FFB902] border border-[#FFB902] border-r-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-75 left-1/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-100 left-2/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-150 left-3/4 bg-[#FFB902] border border-[#FFB902] border-l-white"></div>
            </div>
            {/* hover animation end */}
            <p className="">Strategy Map</p>

            <img src={QuickMap} alt="" className="" />

            <p className="text-center">
              Designed for companies that understand the value in defining a
              clear strategy. We help you do this, quickly.
            </p>
            <SectionButton>Set up a no strings call</SectionButton>
          </div>

          {/* PropositionDevelopment */}
          <div className="flex justify-center items-center flex-col gap-8 md:flex-1 px-4 py-8 md:px-12 md:py-12 relative group overflow-hidden">
            {/* hover animation start */}
            <div className="absolute w-full h-full flex top-0 left-0 -z-10">
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-0 left-0 bg-[#FFB902] border border-[#FFB902] border-r-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-75 left-1/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-100 left-2/4 bg-[#FFB902] border border-[#FFB902] border-x-white"></div>
              <div className="w-1/4 absolute h-full top-full group-hover:top-0 duration-300 delay-150 left-3/4 bg-[#FFB902] border border-[#FFB902] border-l-white"></div>
            </div>
            {/* hover animation end */}
            <p className="">Strategy Map</p>

            <img src={PropositionDevelopment} alt="" className="" />

            <p className="text-center">
              Designed for companies that understand the value in defining a
              clear strategy. We help you do this, quickly.
            </p>
            <SectionButton>Set up a no strings call</SectionButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProgrammes;
