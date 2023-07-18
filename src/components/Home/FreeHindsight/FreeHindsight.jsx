import freeHindsightImg from "../../../assets/freeHindsight.png";
const FreeHindsight = () => {
  return (
    <>
      {/* free hindsight start */}

      <div className="w-full relative flex items-center justify-between bg-black flex-col md:flex-row">
        <div className="w-full md:w-fit relative">
          <img src={freeHindsightImg} alt="" className="object-cover" />

          {/* button Your goal container start */}
          <div className="absolute top-[13%] left-[16%] md:top-[21%] md:left-[22%] group transform rotate-90">
            {/* button */}
            <button className="text-black px-4 py-1 text-sm md:text-base md:py-2 md:px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Your Goal
            </button>
            {/* line */}
            <div className="absolute w-6 md:w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Your goal container end */}

          {/* button Implement container start */}
          <div className="absolute top-[24%] md:top-[33.4%] left-[29%] md:left-[30%] group transform rotate-90">
            {/* button */}
            <button className="text-black px-4 py-1 text-sm md:text-base md:py-2 md:px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Implement
            </button>
            {/* line */}
            <div className="absolute w-6 md:w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Implement container end */}



          {/* button Prototype container start */}
          <div className="absolute top-[39%] md:top-[43.7%] left-[4%] md:left-[23%] group transform rotate-90">
            {/* button */}
            <button className="text-black px-4 py-1 text-sm md:text-base md:py-2 md:px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Prototype
            </button>
            {/* line */}
            <div className="absolute w-6 md:w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Prototype container end */}


          {/* button Research container start */}
          <div className="absolute md:top-[52.3%]  md:left-[14%] top-[55%]  left-[18%]  group transform rotate-90">
            {/* button */}
            <button className="text-black px-4 py-1 text-sm md:text-base md:py-2 md:px-8 bg-white group-hover:bg-[#FFB902] duration-300">
              Research
            </button>
            {/* line */}
            <div className="absolute w-6 md:w-12 h-[2px] bg-white group-hover:bg-[#FFB902] left-full top-1/2 -translate-y-1/2 duration-300"></div>
          </div>
          {/* button Research container end */}


        </div>

        {/* Free hindsight text start */}
        <div className="px-4 mb-8 md:mb-0 md:mt-0 -mt-20 md:px-0 md:absolute relative z-10 w-full md:w-1/2 md:top-1/2 md:transform md:-translate-y-1/2 right-0 text-white space-y-4 md:space-y-8 md:text-start text-center">
          <p className="text-white  ">Getting Started</p>
          <h2 className=" md:text-5xl text-4xl">Free hindsight</h2>
          <p className=" md:text-2xl">
            How do you grow from £2m to £10m? From 30 to 100 staff? From
            ownership to exit?
          </p>
          <p className=" md:text-2xl">
            The 2Y3X framework provides a clear how to, while our industry
            experience provides the invaluable done that.
          </p>
          <p className=" md:text-2xl">
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

export default FreeHindsight;
