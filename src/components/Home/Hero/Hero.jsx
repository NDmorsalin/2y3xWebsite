import SectionButton from "../../../share/SectionButton/SectionButton";

const Hero = () => {
  return (
    <div>
      {/* hero section start */}
      <div className="w-full h-[896px] flex items-center justify-center text-center relative top-0 left-0 z-0 overflow-hidden   ">
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <p className="">
            It’s time for <span className="">2Y3X</span>
          </p>
          {/* title */}
          <h1 className="text-9xl ">Triple your revenue in two years</h1>
          {/* description */}
          <div className="w-6/12 mx-auto">
            <p className="text-2xl ">
              Acceleration programme and one-off workshops to scale your
              business at speed.
            </p>
          </div>

          {/* action button */}
          <div className="w-fit mx-auto">
            <SectionButton>
            Take the fast self assessment
            </SectionButton>
          </div>
        </div>
       {/*  <div
        //   todo add animation
          className="w-[2500px] h-[2500px] left-1/2 top-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 animate-spin "
        ></div> */}
      </div> 
      {/* hero section End */}
    </div>
  );
};

export default Hero;
