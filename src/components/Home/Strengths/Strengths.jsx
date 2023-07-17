const Strengths = () => {
  return (
    <div className="py-28 px-10 relative z-0 bg-black text-white text-center overflow-hidden ">
      <div className="w-8/12 mx-auto space-y-12 relative z-10">
        <div className="flex items-center justify-center animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_235_3882)">
              <circle cx="10" cy="10" r="9" stroke="#FFB902" strokeWidth="2" />
              <path d="M10 4V10" stroke="#FFB902" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_235_3882">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="text-7xl te">
          Identify your Strengths and weaknesses in under four minutes
        </h3>
        <button className="border-2 border-white py-4 px-10  hover:text-black hover:bg-white duration-300 text-white bg-transparent">
          FREE self assessment
        </button>
      </div>

      {/* circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      {/* circles */}
    </div>
  );
};

export default Strengths;
