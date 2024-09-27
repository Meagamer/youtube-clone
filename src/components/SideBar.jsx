import PropTypes from "prop-types";


function SideBar({expand,}) {
  return (
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