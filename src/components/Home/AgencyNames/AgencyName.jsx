/* eslint-disable react/prop-types */
const AgencyName = ({ agnecyName }) => {
  return (
    <div className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] flex items-center justify-center relative group overflow-hidden h-56 p-4">
      <div className="absolute bg-[#FFB902] w-full h-full top-[calc(100%-2px)] duration-300 group-hover:top-0 left-0 -z-10 "></div>
      <img
        src={agnecyName?.img}
        alt={agnecyName?.name}
        className="translate-y-0 group-hover:-translate-y-12  duration-300 "
      />
    </div>
  );
};

export default AgencyName;
