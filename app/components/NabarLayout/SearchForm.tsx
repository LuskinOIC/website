"use client";

import React, { useState } from "react";
import Link from "next/link";
import { searchIndex } from "./searchIndex";

const styles = {
  input: "w-full pl-4 pr-20 py-2 rounded-l-md border border-r-0 bg-white",
  inputResults:
    "w-full mt-3 pl-4 pr-20 py-2 rounded-l-md border border-r-0 bg-white",
  searchBtn:
    "px-4 py-2 bg-[#0076AD] text-white rounded-r-md border border-[#1868F1]",
};

const SearchForm = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  console.log(searchResults);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = String(e.target.value).toLowerCase().trim();

    const partialMatch = Object.keys(searchIndex).filter((key) =>
      key.includes(query),
    );
    const exactMatch = Object.keys(searchIndex).filter((key) => key === query);

    let results: string[] = [];

    if (exactMatch.length > 0) {
      results = searchIndex[query as keyof typeof searchIndex].map(
        (item) => item.path,
      );
    } else if (partialMatch.length > 0) {
      results = partialMatch
        .flatMap((key) => searchIndex[key as keyof typeof searchIndex])
        .map((item) => item.path);
    }

    setSearchResults(Array.from(new Set(results)));
  }

  return (
    <form>
      <div className="flex flex-row">
        <input
          type="text"
          className={styles.input}
          placeholder="Search..."
          list="search"
          onChange={handleSearchChange}
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div id="search" className={styles.inputResults}>
          {searchResults.map((result, i) => (
            <div key={i}>
              <Link href={result}>{result}</Link>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchForm;
