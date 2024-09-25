
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardVoice } from 'react-icons/md';

function SearchBar() {
  return (
    <div className="flex items-center justify-center p-4 w-search navfirst:max-w-search ">
      <div className="hidden big:flex items-center rounded-2xl overflow-hidden border border-neutral-600 relative w-full max-w-search ">
        <input
          type="search"
          placeholder="Search"
          className="p-2 w-full focus:outline-none rounded-2xl bg-search border border-neutral-600 hidden big:block"
        />
        <button className="p-2 bg-secondary text-white rounded-br-2xl rounded-tr-2xl absolute right-0 h-full min-w-14 flex justify-center items-center border border-neutral-600">
        <FaSearch className="text-text" />
        </button>
      </div>

      <button className="big:hidden flex min-w-10 min-h-10 rounded-full bg-secondary ml-4 justify-center items-center hover:bg-neutral-600">
      <FaSearch className="text-text" />
      </button>

      <button className="min-w-10 min-h-10 rounded-full bg-secondary ml-4 flex justify-center items-center hover:bg-neutral-600">
        <MdKeyboardVoice className="text-text w-6 h-6" />
      </button>
    </div>
  );
}

export default SearchBar;
