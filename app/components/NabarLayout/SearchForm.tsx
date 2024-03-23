"use client";

import React, { useState } from "react";
import Link from "next/link";
import searchIndexData from "@/app/data/searchIndex.json";

interface SearchIndex {
  [key: string]: Array<{ path: string; title: string }>;
}

const styles = {
  input: "w-full pl-4 pr-20 py-2 rounded-l-md border border-r-0 bg-white",
  inputResults:
    "w-full mt-3 rounded-md border-2 border-[#0076AD] bg-white flex flex-col",
  searchBtn:
    "px-4 py-2 bg-[#0076AD] text-white rounded-r-md border border-[#1868F1]",
  result:
    "p-4 border-b border-[#0076AD] last:border-b-0 text-[#171515] font-bold text-lg hover:underline underline-offset-4",
  noResults: "p-4 text-center text-sm text-[#171515]",
};

const searchIndex = searchIndexData as SearchIndex;

interface SearchFormProps {
  onSelect: () => void;
}

const SearchForm = ({ onSelect }: SearchFormProps) => {
  const [searchResults, setSearchResults] = useState<
    Array<{ path: string; title: string }>
  >([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  let results: Array<{ path: string; title: string }> = [];

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchAttempted(false);
    const query = String(e.target.value).toLowerCase().trim();

    if (query === "") {
      setSearchResults([]);
      return;
    }

    const partialMatch = Object.keys(searchIndex).filter((key) =>
      key.includes(query)
    );
    const exactMatch = Object.keys(searchIndex).filter((key) => key === query);
    const key = query as keyof typeof searchIndex;

    if (exactMatch.length > 0 && searchIndex[key].length > 0) {
      results = searchIndex[key].map((item) => ({
        path: item.path,
        title: item.title,
      }));
    }
    if (partialMatch.length > 0) {
      const partialMatches = partialMatch
        .flatMap((key) => searchIndex[key as keyof typeof searchIndex])
        .map((item) => ({ path: item.path, title: item.title }));
      results.concat(partialMatches);
    }

    results = Array.from(new Set(results));

    // Sort the search results so paths with title that includes the query term are shown first
    results = results.sort((a, b) => {
      const aContains = a.title.toLowerCase().includes(query);
      const bContains = b.title.toLowerCase().includes(query);

      // Prioritize titles with the match word
      if (aContains && !bContains) return -1;
      if (!aContains && bContains) return 1;

      // Next priority is the length of the title, shorter titles come first
      if (a.title.length !== b.title.length) {
        return a.title.length - b.title.length;
      }

      // Finally, sort alphabetically
      return a.title.localeCompare(b.title);
    });

    results = results.slice(0, 5);

    console.log(results);

    setSearchResults([...results]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchAttempted(true);
  }

  function closeSearchResults() {
    setSearchResults([]);
    onSelect();
  }

  return (
    <form onSubmit={handleSubmit}>
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
      {searchAttempted && searchResults.length === 0 && (
        <div className={styles.noResults}>No results found.</div>
      )}
      {searchResults.length > 0 && (
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
      )}
    </form>
  );
};

export default SearchForm;
