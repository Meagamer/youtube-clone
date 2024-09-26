import PropTypes from "prop-types";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SideBar({expand, isVisible}) {
  return (
    <div className={`bg-background  h-screen ${expand ? 'max-w-[240px]' : 'max-w-[50px]'}
        overflow-hidden p-5 relative`}>
      <NavLink 
      to="home" 
      className={({ isActive }) => `
        ${expand ? 'flex w-56 h-10 hover:bg-neautral items-center pl-3 left-2' : 'grid grid-rows-1 w-full h-12 p-1 left-0'}  ${isActive ? 'bg-neautral text-white' : 'bg-transparent'} 
        rounded-lg absolute
   
      `}>
          { expand? <GoHome className="w-7 h-7 mr-5"/> : <GoHomeFill className="w-7 h-7 mr-10 left"/> }
          <p className={`text-text font-roboto pt-1  ${expand ? 'text-norm' : 'text-ss'}`}>Home</p>
        </NavLink>
    </div>
  )
};

SideBar.propTypes = {

    expand: PropTypes.bool.isRequired, 
  };

export default SideBar