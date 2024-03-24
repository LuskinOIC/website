"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SearchForm from "@/app/components/NabarLayout/SearchForm";
import { SearchIndex } from "@/app/constants/types";

const styles = {
  container: "block",
  button: "bg-transparent p-2 rounded-full text-lg hover:text-[#0076AD]",
  buttonOpen:
    "flex items-center space-x-2 bg-red-500 p-2 rounded-full text-lg hover:bg-red-600",
  icon: "text-white",
  inputContainer:
    "absolute z-40 left-0 right-0 top-full min-h-[78px] py-9 px-5 md:px-20 bg-[#EBEBEB] border border-t-2 border-[#0076AD]",
};

interface SearchDropdownProps {
  searchIndex: SearchIndex;
}

const SearchDropdown = ({ searchIndex }: SearchDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  function closeSearch() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? styles.buttonOpen : styles.button}`}
        aria-label={isOpen ? "Close" : "Search"}
      >
        {isOpen ? (
          <>
            <FontAwesomeIcon icon={faTimes} className={styles.icon} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          </>
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </button>
      {isOpen && (
        <div className={styles.inputContainer}>
          <SearchForm onSelect={closeSearch} searchIndex={searchIndex} />
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
