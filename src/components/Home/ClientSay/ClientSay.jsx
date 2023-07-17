import clientSayImg from "../../../assets/clientSayImg.jpg";
import deeson from "../../../assets/AgenciesNames/Deeson.svg";

const ClientSay = () => {
  return (
    <div className="flex items-center justify-between gap-4 pl-10 bg-[#FFB902]">
      <div className="flex-1 space-y-8">
        <p className="">
        What our clients say
        </p>
        <h3 className="text-4xl">“Their leadership and challenge really helped us set us up for growth and a subsequent exit. I’d thoroughly recommend working with them and would love the opportunity to work with them again in the future.”</h3>
        <p className="">Simon Wakeman | Managing director</p>
        <img src={deeson} alt="" className="" />
      </div>
      <div className="">
        <img src={clientSayImg} alt="" className="" />
      </div>
    </div>
  );
};

export default ClientSay;
