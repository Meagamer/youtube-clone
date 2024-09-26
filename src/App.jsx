import Nav from "./components/Nav"
import { useState } from 'react';
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [searchopen, setSearchopen] = useState(false)
  const [expand, setExpand] = useState(true)
  
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
      <div className={`grid grid-rows-[auto_1fr] ${expand ? 'grid-cols-[240px_1fr]' : 'grid-cols-[50px_1fr]'} absolute`}>
        <div className="col-span-2">
        <Nav isOpen={searchopen} setOpen={setSearchopen} expand={expand} setExpand={setExpand}/>  
        </div>
        <div className=" z-10">
        <SideBar expand={expand}/>
        </div>
        <div className=" -z-10">
          <Outlet />
        </div>
      </div>
    );
  };

  
App.prototype = {
  setExpand: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired, }

export default App