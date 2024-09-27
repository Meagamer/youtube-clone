import SearchInput from "./SearchInput"
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect } from "react";





function SmalNavSearch({isOpen,setOpen}) {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 428 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, setOpen]);

  return (
    <div className=" after428:hidden pl-6  w-full h-14 bg-background pr-6 flex items-center overflow-hidden justify-between">
       <SearchInput />
       <button  onClick={( () => setOpen(!isOpen))} className="ml-3 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 flex justify-center items-center">
        <IoMdClose className="text-text w-6 h-6" />
      </button>
    </div>
   
  )
};

SmalNavSearch.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, 
};

export default SmalNavSearch