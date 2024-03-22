"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { searchIndex } from "./searchIndex";

const styles = {
  button: "bg-transparent p-2 rounded-full text-lg hover:text-[#0076AD]",
  buttonOpen:
    "flex items-center space-x-2 bg-red-500 p-2 rounded-full text-lg hover:bg-red-600",
  icon: "text-white",
  container: "hidden md:block",
  inputContainer:
    "absolute z-40 left-0 right-0 top-full min-h-[78px] py-9 bg-[#EBEBEB] border border-t-2 border-[#0076AD] flex flex-col justify-center items-center",
  input: "pl-4 pr-20 py-2 rounded-l-md border border-r-0",
  searchBtn:
    "px-4 py-2 bg-[#0076AD] text-white rounded-r-md border border-[#1868F1]",
};

const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);

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

  // function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const query = String(e.target.value).toLowerCase().trim();

  //   const partialMatch = Object.keys(searchIndex).filter((key) =>
  //     key.includes(query),
  //   );
  //   const exactMatch = Object.keys(searchIndex).filter((key) => key === query);

  //   let results: string[] = [];

  //   if (exactMatch.length > 0) {
  //     const object = searchIndex[query as keyof typeof searchIndex];
  //     results = object.map((item) => item.path);
  //   } else if (partialMatch.length > 0) {
  //     results = partialMatch
  //       .flatMap((key) => searchIndex[key as keyof typeof searchIndex])
  //       .map((item) => item.path);
  //   }

  //   setSearchResults(Array.from(new Set(results)));
  // }

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
          <form className="flex flex-row">
            <input
              type="text"
              className={styles.input}
              placeholder="Search..."
              list="search"
              onChange={handleSearchChange}
            />
            <button
              className={styles.searchBtn}
              // onClick={}
            >
              Search
            </button>
          </form>
          <div id="search">
            {searchResults.map((result, i) => (
              <div key={i}>
                <Link href={result} key={result}>
                  {result}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
