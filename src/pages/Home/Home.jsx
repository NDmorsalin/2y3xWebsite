import Bynd from "../../assets/AgenciesNames/Bynd.svg";
import Deeson from "../../assets/AgenciesNames/Deeson.svg";
import Fishinabottle from "../../assets/AgenciesNames/Fishinabottle.svg";
import Impero from "../../assets/AgenciesNames/Impero.svg";
import Synthetic from "../../assets/AgenciesNames/Synthetic.svg";
import WhiteBear from "../../assets/AgenciesNames/WhiteBear.svg";
import Rawnet from "../../assets/AgenciesNames/Rawnet.svg";

import Hero from "../../components/Home/Hero/Hero";
import AgencyName from "../../components/Home/AgencyNames/AgencyName";
import FreeHindsight from "../../components/Home/FreeHindsight/FreeHindsight";
import Revenue from "../../components/Home/Revenue/Revenue";
import ClientSay from "../../components/Home/ClientSay/ClientSay";
import OurProgrammes from "../../components/Home/OurProgrammes/OurProgrammes";
import Growth from "../../components/Home/Growth/Growth";
import ConsistentResults from "../../components/Home/ConsistentResults/ConsistentResults";
import Strengths from "../../components/Home/Strengths/strengths";
import FeaturedInsights from "../../components/Home/FeaturedInsights/FeaturedInsights";
import FeaturedPodcasts from "../../components/Home/FeaturedPodcasts/FeaturedPodcasts";

const agencyNames = [
  {
    name: "Bynd",
    img: Bynd,
  },
  {
    name: "Deeson",
    img: Deeson,
  },
  {
    name: "Fishinabottle",
    img: Fishinabottle,
  },
  {
    name: "Impero",
    img: Impero,
  },
  {
    name: "Synthetic",
    img: Synthetic,
  },
  {
    name: "WhiteBear",
    img: WhiteBear,
  },
  {
    name: "Rawnet",
    img: Rawnet,
  },
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* Agencies we’ve levelled up start */}

      <div className=" px-10 py-16 flex items-center gap-16 flex-col md:flex-row">
        <div className="w-fit">
          <p className="mb-8 font-medium">Agencies we’ve levelled up</p>
          <h2 className="text-7xl  mb-8">
            Grown <span className="block">by 2Y3X</span>
          </h2>
        </div>
        <div className="flex-1 flex items-center flex-wrap gap-8 justify-center ">
          {agencyNames.map((agencyName, index) => (
            <AgencyName key={index} agnecyName={agencyName} />
          ))}
        </div>
      </div>
      {/* Agencies we’ve levelled up end */}

      <FreeHindsight />

      {/* Revenue video start*/}
      <Revenue />
      {/* Revenue video end*/}

      {/* client start */}
      <ClientSay />
      {/* client end */}

      {/* our programmes start */}
      <OurProgrammes />
      {/* our programmes end */}

      {/* strengths start */}
      <Strengths />
      {/* strengths End */}

      {/* Growth  start */}

      <Growth />
      {/* Growth  end */}

      {/*  Consistent results start */}
      <ConsistentResults />
      {/*  Consistent results end */}

      {/* Featured Insights start */}
      <FeaturedInsights />
      {/* Featured Insights end */}

      {/* Featured Podcasts */}
      <FeaturedPodcasts />
      {/* Featured Podcasts */}
    </>
  );
};

export default Home;
