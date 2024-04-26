"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIndex } from "@/app/constants/types";
import { filterSearchResults } from "@/app/utils/search";
import translations from "@/public/locales/en.json";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  input:
    "w-full pl-4 pr-20 py-2 rounded-md md:rounded-l-md border md:border-r-0 bg-white",
  inputResults:
    "w-full mt-3 rounded-md border-2 border-[#0076AD] bg-white flex flex-col overflow-y-scroll z-0 absolute max-h-[90vh] md:max-h-[60vh]",
  searchIconMobile:
    "absolute inset-y-0 right-3 pr-3 flex items-center pointer-events-none text-[#868787]",
  searchBtnDesktop:
    "hidden md:block px-4 py-2 bg-[#0076AD] text-white rounded-r-md border border-[#1868F1]",
  result:
    "p-4 border-b border-[#0076AD] last:border-b-0 text-[#171515] font-bold text-lg hover:underline underline-offset-4",
  noResults: "p-4 text-center text-sm text-[#171515]",
};

interface SearchFormProps {
  onSelect: () => void;
  searchIndex: SearchIndex;
}

const SearchForm = ({ onSelect, searchIndex }: SearchFormProps) => {
  const [searchResults, setSearchResults] = useState<
    Array<{ path: string; title: string }>
  >([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchAttempted(false);
    const query = String(e.target.value).toLowerCase().trim();

    setInputValue(query);

    if (query === "") {
      setSearchResults([]);
      setInputValue("");
      return;
    }

    const searchResults = filterSearchResults(query, searchIndex);

    setSearchResults([...searchResults]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchAttempted(true);
  }

  function closeSearchResults() {
    document.body.style.overflow = "auto";
    setSearchResults([]);
    setInputValue("");
    onSelect();
  }

  useEffect(() => {
    if (searchResults.length > 0) {
      // disable scrolling for the top level document
      document.body.style.overflow = "hidden";
    } else {
      // enable scrolling for the top level document
      document.body.style.overflow = "auto";
    }
  }, [searchResults]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-row">
        <div className="relative w-full">
          <input
            type="text"
            className={styles.input}
            placeholder="Search..."
            list="search"
            value={inputValue}
            onChange={handleSearchChange}
          />
          <div className={styles.searchIconMobile}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <button className={styles.searchBtnDesktop}>
          {translations.searchBar.searchLabel}
        </button>
      </div>
      {searchAttempted && searchResults.length === 0 && (
        <div className={styles.noResults}>
          {translations.searchBar.noResultsFound}
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="">
          <div id="search" className={styles.inputResults}>
            {searchResults.map((result, i) => (
              <Link
                key={i}
                href={result.path}
                className={styles.result}
                onClick={closeSearchResults}
              >
                {result.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
