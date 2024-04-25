import "./index.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { IoMdHeadset } from "react-icons/io";

const SideBar = (props) => {
  const { onBarOpen } = props;

  const onClickBar = () => {
    onBarOpen();
  };

  return (
    <div className="sidebar-container">
      <button className="collapse" onClick={onClickBar}>
        <FaArrowCircleLeft />
      </button>
      <div className="icons">
        <IoSearchSharp className="icon" />
        <MdOutlineDesktopWindows className="icon" />
        <AiOutlineQuestionCircle className="icon" />
        <MdOutlineDateRange className="icon" />
        <BiBuildings className="icon" />
        <HiMiniCurrencyDollar className="icon" />
        <IoMdHeadset className="icon" />
      </div>
    </div>
  );
};

export default SideBar;
