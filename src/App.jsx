import Nav from "./components/Nav"
import { useState, useContext } from 'react';
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { SideExpandProvider } from "./context/SideExpandProvider";
import SideExpand from "../context/SideExpand";





function App() {
  const [searchopen, setSearchopen] = useState(false)
  const { expand, setExpand } = useContext(SideExpand);
  
  useEffect(() => {
    const handleResize = () => {
     if (window.innerWidth <= 1024) {
        setExpand(false);                                                                                


      } else {            
        setExpand(true);                        
                                               
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
    return (
      <SideExpandProvider>
      <div className={`grid grid-rows-[auto_1fr] ${expand ? 'grid-cols-[240px_1fr]' : 'grid-cols-[50px_1fr]'}`}>
        <div className="col-span-2">
        <Nav isOpen={searchopen} setOpen={setSearchopen} />  
        </div>
        <div className=" z-10">
        <SideBar/>
        </div>
        <div className=" -z-10">
          <Outlet />
        </div>
      </div>
      </SideExpandProvider>
    );
  };

  
App.prototype = {
  setExpand: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired, }

export default App