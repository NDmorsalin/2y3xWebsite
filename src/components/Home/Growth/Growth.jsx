import { FaLinkedinIn } from "react-icons/fa";
import groth1 from "../../../assets/Groth/groth1.jpg";
import groth2 from "../../../assets/Groth/groth2.jpg";
import groth3 from "../../../assets/Groth/groth3.jpg";
import SectionButton from "../../../share/SectionButton/SectionButton";

const Growth = () => {
  return (
    <>
      {" "}
      <div className="container mx-auto px-10 py-16 ">
        <div className="flex gap-16	    justify-between">
          <div className="flex-1 flex flex-col justify-between">
            
            <div className="mb-8">
              <p className="mb-8 font-medium">Builders and Leaders</p>
              <h2 className="text-7xl">Growth acceleration specialists</h2>
              <p className="mt-8">We’ve been there so you can do that</p>
            </div>
            
            <div className="mb-8">
              <img src={groth2} alt="" className="" />
              <h3 className="text-4xl mt-4">Mwangala (Mo) Lishomwa</h3>
              <p className="text-xl mt-2 mb-5">Managing Director</p>
              <span className="inline-block p-1 rounded border-2 border-black ">
                <FaLinkedinIn className="text-3xl" />
              </span>
            </div>
            <div className="">
              <SectionButton>Meet the team</SectionButton>
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <div className="mb-8">
              <img src={groth1} alt="" className="" />
              <h3 className="text-4xl mt-4">Felix Velarde</h3>
              <p className="text-xl mt-2 mb-5">Founder</p>
              <span className="inline-block p-1 rounded border-2 border-black ">
                <FaLinkedinIn className="text-3xl" />
              </span>
            </div>
            <div className="mb-8 ">
              <img src={groth3} alt="" className="" />
              <h3 className="text-4xl mt-4">Executive Partner</h3>
              <p className="text-xl mt-2 mb-5">Steve McNulty</p>
              <span className="inline-block p-1 rounded border-2 border-black ">
                <FaLinkedinIn className="text-3xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Growth;
