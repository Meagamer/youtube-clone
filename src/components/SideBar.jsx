import PropTypes from "prop-types";
import SideContents from "./SideContents";
import SideExpand from "../context/SideExpand";
import { useContext } from "react";

function SideBar() {
  const { expand, } = useContext(SideExpand);
  return (
    <div className={`bg-background  h-screen ${expand ? 'max-w-[240px]' : 'max-w-[50px]'}
        overflow-hidden pt-5 relative`}>
       <SideContents expand={expand}/>
    </div>
  )
};

SideBar.propTypes = {

    expand: PropTypes.bool.isRequired, 
  };

export default SideBar