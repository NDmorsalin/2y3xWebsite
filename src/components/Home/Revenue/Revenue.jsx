import SectionButton from "../../../share/SectionButton/SectionButton";

/* eslint-disable react/no-unknown-property */
const Revenue = () => {
  return (
    <section className="w-full px-10 py-16">
      {/* revinew start */}
      {/* section title */}
      <div className="text-center space-y-8">
        <p className="">Founder Felix Velarde on the 2Y3X method</p>
        <h2 className="text-6xl ">
          Two years to triple revenue. How we do it.
        </h2>
      </div>

      <div className="my-16 relative">
        <iframe
          src="https://www.youtube.com/embed/8Aux7nqu6w8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-10/12 mx-auto  aspect-video"
        ></iframe>

        <div className="absolute w-8 h-full top-0 right-0 flex justify-between items-center flex-col ">
          <div className="text-center w-full">
            <p className="">730</p>
            <div className="w-full h-[2px] bg-[#FFB902] mx-auto"></div>
          </div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="text-center w-full">
            <p className="">00</p>
            <div className="w-full h-[2px] bg-[#FFB902] mx-auto"></div>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center">
    <SectionButton>
      Schedule a call
      </SectionButton>
    </div>

    </section>
  );
};

export default Revenue;
