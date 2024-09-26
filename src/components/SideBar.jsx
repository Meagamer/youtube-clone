import PropTypes from "prop-types";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SideBar({expand, isVisible}) {
  return (
    <div className={`bg-background  h-screen ${expand ? 'max-w-[240px]' : 'max-w-[50px]'} ${isVisible ? 'block' : 'hidden'} transition-all duration-300 ease-in-out
        overflow-hidden p-5`}>
        <NavLink className="flex items-center hover:bg-neautral rounded-xl absolute">
          <IoMdHome className="pr-5 pl-2 text-text w-14 h-14"/>
          <p className={`text-text font-roboto pt-1  ${expand ? 'block' : 'hidden'}`}>Home</p>
        </NavLink>
    </div>
  )
};

SideBar.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    expand: PropTypes.bool.isRequired, 
  };

export default SideBar