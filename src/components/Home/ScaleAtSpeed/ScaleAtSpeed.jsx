import SectionButton from "../../../share/SectionButton/SectionButton";
import scaleAtSpeedImg from "../../../assets/scaleAtSpeed.png";

const ScaleAtSpeed = () => {
  return (
    <div className="px-10 py-20">
      <div className="w-10/12 mx-auto my-12 flex items-center justify-center gap-8">
        <div className="flex-1 space-y-6">
          <p className="">The theory</p>
          <h2 className="text-8xl">Scale at speed</h2>
          <p className="text-3xl">
            Our programmes are based on the book Scale at Speed by 2Y3X Felix
            Velarde, which translates the best business theory into easy
            actionable steps.
          </p>
          <SectionButton>Buy the book</SectionButton>
        </div>
        <div className="flex-1">
          <img src={scaleAtSpeedImg} alt="" className="  " />
        </div>
      </div>
    </div>
  );
};

export default ScaleAtSpeed;
