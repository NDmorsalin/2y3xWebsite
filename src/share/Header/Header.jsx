import logo from "../../assets/logo.svg";
import toggleBar from "../../assets/toggleBar.svg";

const Header = () => {
  return (
    // todo make it sticky
    <div className="px-10 py-8 flex items-center justify-between fixed w-full left-0 top-0 z-50 ">
      {/* logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="2Y3X , QuickMap , and Earnout Maximiser®  "
          className=""
        />
      </div>
      {/* toggle bar */}
      <div className="">
      <img
          src={toggleBar }
          alt="2Y3X , QuickMap , and Earnout Maximiser®  "
          className=""
        />
      </div>
    </div>
  );
};

export default Header;
