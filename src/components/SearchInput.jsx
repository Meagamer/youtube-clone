import { FaSearch } from 'react-icons/fa';

function SearchInput() {
  return (
    <div className="flex items-center rounded-2xl overflow-hidden border border-neautral relative w-full max-w-search ">
    <input
      type="search"
      placeholder="Search"
      className="p-2 w-full focus:outline-none rounded-2xl bg-search border border-neautral text-text"
    />
    <button className="p-2 bg-secondary text-white rounded-br-2xl rounded-tr-2xl absolute right-0 h-full min-w-14 flex justify-center items-center border border-neautral">
    <FaSearch className="text-text" />
    </button>
  </div>
  )
}

export default SearchInput