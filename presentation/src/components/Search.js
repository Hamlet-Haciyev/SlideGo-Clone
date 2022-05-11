import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  const [search, setSearch] = useState("");

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searcher transition-opacity duration-300 flex-1 z-0 pointer-events-auto opacity-100">
      <form
        action=""
        className="relative w-full md:w-8/12 mt-6 md:mt-8 mx-auto z-15"
      >
        <div className="relative group bg-gray-150 sm:bg-purple-500 sm:focus-within:bg-white focus-within:placeholder-gray-600 focus-within:text-gray-600 overflow-hidden rounded-lg">
          <input
            type="text"
            placeholder="Search a template"
            value={search}
            onChange={handleChangeInput}
            autoComplete="off"
            className="focus:ring-0 w-full outline-none appearance-none text-[#qqq] pl-4 sm:pl-6 pr-12 h-12 sm:h-14 bg-white placeholder-gray-700 rounded-lg js-bound"
          />
          <button
            type="submit"
            className="absolute top-0 bottom-0 right-0 text-blue-600 mx-5 flex items-center"
          >
            <FiSearch className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
