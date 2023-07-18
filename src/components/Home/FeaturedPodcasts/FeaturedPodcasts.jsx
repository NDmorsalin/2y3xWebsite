import prodcastImg from "../../../assets/podcast/prodcast.png";
import prodcastImg1 from "../../../assets/podcast/prodcast1.png";
import prodcastImg2 from "../../../assets/podcast/prodcast2.png";
import audioWeb from "../../../assets/Icons/Audio Wave.png";
import { FaPlay } from "react-icons/fa";
import SectionButton from "../../../share/SectionButton/SectionButton";

const FeaturedPodcasts = () => {
  return (
    <section className="w-full px-4 md:px-10 py-16">
      {/* revinew start */}
      {/* section title */}
      <div className="text-center space-y-6">
        <p className="">Listen in</p>
        <h2 className=" text-4xl md:text-6xl ">Featured Podcasts</h2>
      </div>

      {/* desktop podcast */}
      <div className="hidden md:block w-10/12 mx-auto my-16 space-y-6">
        <div className="flex items-center gap-4">
          <img src={prodcastImg} alt="" className="" />

          <div className="flex-1">
            <div className="flex items-center gap-4">
              {/* icon */}
              <img src={audioWeb} alt="" className="" />
              <h4 className="text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
            <div className="w-full  rounded-full bg-[#d1cdcd] py-1 px-4 mt-3">
              {/* //todo here is audio input later */}
              <div className="flex items-center justify-between gap-4">
                <FaPlay />
                <p className="text-sm">00:00</p>
                <div className="flex-1 h-px bg-slate-950"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={prodcastImg1} alt="" className="" />

          <div className="flex-1">
            <div className="flex items-center gap-4">
              {/* icon */}
              <img src={audioWeb} alt="" className="" />
              <h4 className="text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
            <div className="w-full  rounded-full bg-[#d1cdcd] py-1 px-4 mt-3">
              {/* //todo here is audio input later */}
              <div className="flex items-center justify-between gap-4">
                <FaPlay />
                <p className="text-sm">00:00</p>
                <div className="flex-1 h-px bg-slate-950"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={prodcastImg2} alt="" className="" />

          <div className="flex-1">
            <div className="flex items-center gap-4">
              {/* icon */}
              <img src={audioWeb} alt="" className="" />
              <h4 className="text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
            <div className="w-full  rounded-full bg-[#d1cdcd] py-1 px-4 mt-3">
              {/* //todo here is audio input later */}
              <div className="flex items-center justify-between gap-4">
                <FaPlay />
                <p className="text-sm">00:00</p>
                <div className="flex-1 h-px bg-slate-950"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* desktop podcast */}

      {/* mobile podcast */}
      <div className=" md:hidden w-full mx-auto my-16 space-y-6">
        <div className="flex items-center flex-col gap-1">
          <div className="flex-1 flex items-center gap-2">
            <img src={prodcastImg} alt="" className="w-10" />
            <div className="flex items-center gap-2">
              {/* icon */}
              <img src={audioWeb} alt="" className="w-4" />
              <h4 className="text-lg md:text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
          </div>
          <div className="w-full  rounded-full bg-[#d1cdcd] py-px px-4 mt-3">
            {/* //todo here is audio input later */}
            <div className="flex items-center justify-between gap-4">
              <FaPlay className="text-xs" />
              <p className="text-sm">00:00</p>
              <div className="flex-1 h-px bg-slate-950"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-1">
          <div className="flex-1 flex items-center gap-2">
            <img src={prodcastImg1} alt="" className="w-10" />
            <div className="flex items-center gap-2">
              {/* icon */}
              <img src={audioWeb} alt="" className="w-4" />
              <h4 className="text-lg md:text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
          </div>
          <div className="w-full  rounded-full bg-[#d1cdcd] py-px px-4 mt-3">
            {/* //todo here is audio input later */}
            <div className="flex items-center justify-between gap-4">
              <FaPlay className="text-xs" />
              <p className="text-sm">00:00</p>
              <div className="flex-1 h-px bg-slate-950"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-1">
          <div className="flex-1 flex items-center gap-2">
            <img src={prodcastImg2} alt="" className="w-10" />
            <div className="flex items-center gap-2">
              {/* icon */}
              <img src={audioWeb} alt="" className="w-4" />
              <h4 className="text-lg md:text-4xl">
                Title for podcast will go here across a line here
              </h4>
            </div>
          </div>
          <div className="w-full  rounded-full bg-[#d1cdcd] py-px px-4 mt-3">
            {/* //todo here is audio input later */}
            <div className="flex items-center justify-between gap-4">
              <FaPlay className="text-xs" />
              <p className="text-sm">00:00</p>
              <div className="flex-1 h-px bg-slate-950"></div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile podcast */}

      <div className="flex items-center justify-center">
        <SectionButton>See more</SectionButton>
      </div>
    </section>
  );
};

export default FeaturedPodcasts;
