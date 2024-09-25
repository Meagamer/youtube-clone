import { HiOutlineBars3 } from "react-icons/hi2";
import YoutubeLogo from '../assets/YoutubeLogo.png';
import SearchBar from "./SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Nav({ isOpen,setOpen }) {
  return (
    <>
  
      {!isOpen ? (  
      <div className=" pl-0 w-full h-14 bg-background margin:pl-6 pr-6 flex items-center overflow-hidden justify-between">
        <div className="flex items-center">
        <button className="rounded-full hover:bg-neutral-600 w-10 h-10"><HiOutlineBars3 className="text-text h-7 w-10 "/></button>
        <NavLink to='/'><img src={YoutubeLogo} alt="youtube-logo" className="min-w-18 max-w-[100px] ml-3 object-cover"/></NavLink>

        </div>

        
        <SearchBar className="flex-grow navfirst:flex-grow-0"/>
         
        <button className=" w-auto h-auto big:flex gap-1 items-center rounded-3xl border border-neutral-600 p-2 hover:border-transparent hover:bg-secondary big:min-w-[86px] big:max-h-[42px] whitespace-nowrap ">
         <BsPersonCircle className="text-text" />
         <p className="hidden  big:text-text text-sm big:block">Sign In</p>
        </button>
      </div> ):(
        div
      )}
    </>
  
}

export default Nav