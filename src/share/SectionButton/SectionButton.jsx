/* eslint-disable react/prop-types */
const SectionButton = ({ children }) => {
  return (
    <button className="border-2 border-black py-4 px-10  hover:text-white hover:bg-black duration-300 text-black bg-transparent">
      {children}
    </button>
  );
};

export default SectionButton;
