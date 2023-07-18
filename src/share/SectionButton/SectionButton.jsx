/* eslint-disable react/prop-types */
const SectionButton = ({ children }) => {
  return (
    <button className="border-2 border-black py-2 px-6 md:py-4 md:px-10  hover:text-white hover:bg-black duration-300 text-black bg-transparent">
      {children}
    </button>
  );
};

export default SectionButton;
