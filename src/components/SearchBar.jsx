
import { MdKeyboardVoice } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

function SearchBar({isOpen,setOpen}) {
  return(
    <>

    <div className="flex items-center justify-center p-4 w-search navfirst:max-w-search ">
       <SearchInput />

      <div onClick={( () => setOpen(!isOpen))} className=" ml-2 after428:hidden flex min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 justify-center items-center hover:bg-neutral-600">
      <FaSearch className="text-text" />
      </div>

      <button className="ml-2 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 flex justify-center items-center hover:bg-neutral-600">
        <MdKeyboardVoice className="text-text w-6 h-6" />
      </button>
    </div>


     </>
     
)};

SearchBar.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, 
};

export default SearchBar;
