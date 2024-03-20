// SearchDropdown.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="bg-transparent text-black bg-pink-500 p-2 rounded-full text-lg hover:bg-gray-700"
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-red-500 shadow-md rounded-md">
          <input
            type="text"
            className="w-full p-2 rounded-md border border-gray-300"
            placeholder="Search..."
          />
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
