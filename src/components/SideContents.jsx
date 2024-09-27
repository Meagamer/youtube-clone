import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";





function SideContents() {

  return (
    <NavLink 
    to="home" 
    className={({ isActive }) => `
      ${expand ? 'flex w-56 h-10 hover:bg-neautral items-center pl-3 left-2' : 'grid grid-rows-1 w-full h-12 '}  ${isActive ? 'bg-neautral text-white' : 'bg-transparent'} 
      rounded-lg `}>
        <GoHome className="w-7 h-7 mr-5 text-text"/>
        <p className={`text-text font-roboto pt-1  ${expand ? 'text-norm' : 'text-ss'}`}>Home</p>
      </NavLink>
  )
}

SideContents.propTypes = {

    expand: PropTypes.bool.isRequired, 
  };

export default SideContents;