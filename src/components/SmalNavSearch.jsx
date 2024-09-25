import { FaAngleDoubleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SmalNavSearch() {
  return (
    <div className=" big:hidden margin:pl-6 pl-0 w-full h-14 bg-background pr-6 flex items-center overflow-hidden justify-between">
         <input
    type="search"
    placeholder="Search"
    className="big:hidden block p-2 w-full focus:outline-none rounded-2xl bg-search border border-neutral-600  text-text"
  />
    </div>
   
  )
}

export default SmalNavSearch