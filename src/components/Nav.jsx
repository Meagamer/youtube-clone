import { HiOutlineBars3 } from "react-icons/hi2";
import YoutubeLogo from '../assets/YoutubeLogo.png';
import SearchBar from "./SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink, } from "react-router-dom";
import SmalNavSearch from "./SmalNavSearch";
import PropTypes from "prop-types";


function Nav({ isOpen,setOpen }) {
  console.log(isOpen);


  return (
    <>
  
      { !isOpen ? (  
      <div className=" pl-0 w-full h-14 bg-background after358::pl-6 pr-6 flex items-center overflow-hidden justify-between">
        <div className="flex items-center">
        <button className="rounded-full hover:bg-neutral-600 w-10 h-10"><HiOutlineBars3 className="text-text h-7 w-10 "/></button>
        <NavLink to='/'><img src={YoutubeLogo} alt="youtube-logo" className="min-w-18 max-w-[100px] ml-3 object-cover"/></NavLink>

        </div>

        
        <SearchBar  isOpen={isOpen} setOpen={setOpen}  className="flex-grow navfirst:flex-grow-0"/>
         
        <button className=" w-auto h-auto after428:flex gap-1 items-center rounded-3xl border border-neutral-600 p-2 hover:border-transparent hover:bg-secondary after428:min-w-[86px] after428:max-h-[42px] whitespace-nowrap ">
         <BsPersonCircle className="text-text" />
         <p className="hidden  after428:text-text text-sm after428:block">Sign In</p>
        </button>
      </div> ): (
        <SmalNavSearch />
      )}

    </>
  
)};

Nav.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, 
};

export default Nav