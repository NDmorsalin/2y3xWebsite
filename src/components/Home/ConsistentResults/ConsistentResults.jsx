import { FaStar } from "react-icons/fa";

const ConsistentResults = () => {
  return (
    <div className=" px-10 py-16 flex items-center gap-16 flex-col md:flex-row bg-[#D9D9D9]">
      <div className="w-fit">
        <p className="mb-8 font-medium">Making Change</p>
        <h2 className="text-7xl  mb-8">
          Consistent <br /> results
        </h2>
      </div>
      <div className="flex-1 flex items-center flex-wrap gap-4 justify-center ">
        <div className="flex justify-center  flex-col gap-8 flex-1 p-10 relative group overflow-hidden border border-[#FFB902] bg-white">
          {/* ratings  */}
          <div className="flex items-center gap-2 relative z-10">
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
          </div>
          {/* ratings  */}

          {/* title */}
          <h4 className="text-2xl relative z-10">Focus on what really matters</h4>
          {/* title */}

          <p className="text-justify relative z-10">
            “Brilliant at getting management to focus on what really matters –
            and getting us to let go of things that are not contributing to our
            strategic aims.”
          </p>

          {/* commenter */}
          <div className="flex item-center gap-4 relative z-10">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />

            <div className="">
              <p className="text-sm">Fred Moore</p>
              <p className="text-sm font-light ">COO, Matter Of Form</p>
            </div>
          </div>
          {/* commenter */}
       <div className="absolute w-full h-full bg-[#FFB902] duration-300 top-full left-0 group-hover:top-0 -z-0"></div>
        </div>
        <div className="flex justify-center  flex-col gap-8 flex-1 p-10 relative group overflow-hidden border border-[#FFB902] bg-white">
          {/* ratings  */}
          <div className="flex items-center gap-2 relative z-10">
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
            <FaStar className="group-hover:text-black duration-300 text-[#FFB902]" />
          </div>
          {/* ratings  */}

          {/* title */}
          <h4 className="text-2xl relative z-10">Focus on what really matters</h4>
          {/* title */}

          <p className="text-justify relative z-10">
            “Brilliant at getting management to focus on what really matters –
            and getting us to let go of things that are not contributing to our
            strategic aims.”
          </p>

          {/* commenter */}
          <div className="flex item-center gap-4 relative z-10">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />

            <div className="">
              <p className="text-sm">Fred Moore</p>
              <p className="text-sm font-light ">COO, Matter Of Form</p>
            </div>
          </div>
          {/* commenter */}
       <div className="absolute w-full h-full bg-[#FFB902] duration-300 top-full left-0 group-hover:top-0 -z-0"></div>
        </div>

      </div>
    </div>
  );
};

export default ConsistentResults;
