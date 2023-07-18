import footerTopImg from "../../assets/footer-top.jpg";
import footerBottomImg from "../../assets/footerBottom.jpg";
import logoWhite from "../../assets/logo-white.svg";
import gbc from "../../assets/good-business-charter.svg";

const Footer = () => {
  return (
    <div className=" relative bg-black overflow-hidden">
      <div className="relative  z-10">
        <div className=" px-4 md:px-10 py-16 text-white w-full md:w-10/12 mx-auto ">
          {/* logo */}
          <div className="my-8">
            <img src={logoWhite} alt="logo white" className="" />
          </div>

          {/*  */}

          <div className="flex gap-4 md:items-center flex-col md:flex-row md:justify-between">
            {/* contact */}
            <div className="space-y-8 md:w-1/3">
              <h5 className="">Contact</h5>
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 w-fit">
                <p className="">UK & Europe</p>{" "}
                <p className="">info@2y3x.com</p>
                <p className="">USA & Canada </p>
                <div className="">naw@2y3x.com</div>
              </div>
            </div>
            {/* 2Y3X Programme */}
            <div className="space-y-8 md:w-1/3">
              <h5 className="">2Y3X Programme</h5>
              <p className="">Events</p>
              <p className="">Insights & Media</p>
              <p className="">Meet the team</p>
              <p className="">Contact</p>
            </div>

            {/*  */}
            <div className="px-4 py-8 bg-white/5 space-y-6 text-center md:w-1/3">
              <h5 className="text-xl ">Scale at speed</h5>
              <p className="">
                This is a how-to guide, matching theory with easily actionable
                steps.
              </p>
              <button className="border-2 border-white py-4 px-10  hover:text-black hover:bg-[#ffb902] hover:border-[#ffb902] duration-300 text-white bg-transparent">
                Buy the book
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-white px-4 md:px-10 py-16 md:w-10/12 mx-auto flex md:items-center gap-4 flex-col md:flex-row md:justify-between">
          <div className="">
            <p className="text-sm">
              <span> Terms</span>
              <span className=" ml-6">Privacy Policy</span>
            </p>
            <p className="mt-4">© 2022 All rights reserved. 2Y3X , QuickMap , and Earnout Maximiser® are Registered Trade Marks</p>
          </div>

          <div className="">
            <img src={gbc} alt="" className="" />
          </div>
        </div>
      </div>
      {/* images */}
      <img
        src={footerTopImg}
        alt=""
        className="absolute -top-40 -left-40 rotate-45 -z-0"
      />
      <img
        src={footerBottomImg}
        alt=""
        className="absolute -bottom-28 -right-10 -rotate-90 -z-0"
      />
    </div>
  );
};

export default Footer;
