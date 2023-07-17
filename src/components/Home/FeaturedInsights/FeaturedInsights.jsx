import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import featuredInsights1 from "../../../assets/featuredInsights/featuredInsights1.jpg";
import featuredInsights2 from "../../../assets/featuredInsights/featuredInsights2.jpg";
import SectionButton from "../../../share/SectionButton/SectionButton";

const FeaturedInsights = () => {
  return (
    <div className="px-10 py-16">
      <p className="mb-3">Our Views</p>

      <div className="flex items-center justify-between">
        <h2 className="text-6xl">Featured Insights</h2>

        <div className=" items-center justify-center gap-4 hidden md:flex">
          <div className="border-2 duration-300 border-[#fac233e0] hover:border-[#FFB902] p-2">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="border-2 duration-300 border-black hover:border-[#FFB902] p-2">
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="flex gap-8">
        <div className="flex-1">
          <img
            src={featuredInsights1}
            alt=""
            className="max-w-full my-8 block aspect-video  object-cover max-h-[750px]"
          />

          <div className="flex items-center gap-2 my-4">
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag1
            </div>
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag2
            </div>
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag3
            </div>
          </div>

          <h3 className="text-4xl mb-4">
            Title for featured story will go here across two lines if needed
          </h3>

          <p className="text-xl">
            {" "}
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class{" "}
          </p>

          <p className="mt-6">Read more ...</p>
        </div>
        <div className="flex-1">
          <img
            src={featuredInsights2}
            alt=""
            className="max-w-full my-8 block aspect-video object-cover max-h-[750px]"
          />

          <div className="flex items-center gap-2 my-4">
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag1
            </div>
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag2
            </div>
            <div className="px-2 py-1 border border-[#FFB902] rounded text-sm  shadow ">
              #tag3
            </div>
          </div>

          <h3 className="text-4xl mb-4">
            Title for featured story will go here across two lines if needed
          </h3>

          <p className="text-xl">
            {" "}
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class{" "}
          </p>

          <p className="mt-6">Read more ...</p>
        </div>

      </div>
      {/* features */}

      <div className="flex items-center justify-center my-8 ">
        <SectionButton>
        See more
        </SectionButton>
      </div>
    </div>
  );
};

export default FeaturedInsights;
