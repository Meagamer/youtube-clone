import Nav from "./components/Nav"
import { useState } from 'react';
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import PropTypes from "prop-types";

function App() {
  const [searchopen, setSearchopen] = useState(false)
  const [expand, setExpand] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 428) {
        setIsVisible(false);
         
      } else if (window.innerWidth <= 1024) {
        setExpand(false);                                                                                
        setIsVisible(true);

      } else {            
        setExpand(true);                        
        setIsVisible(true);                                                    
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  console.log(isVisible);
  return (
    <>
    <Nav isOpen={searchopen} setOpen={setSearchopen} expand={expand} setExpand={setExpand} visible={isVisible} setVisible={setIsVisible}/>
     
    <SideBar expand={expand} isVisible={isVisible} />
    </>
  )
}

App.prototype = {
  setExpand: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired, 
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired, 
}

export default App