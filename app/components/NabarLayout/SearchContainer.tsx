"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SearchForm from "@/app/components/NabarLayout/SearchForm";
import { SearchIndex } from "@/app/constants/types";

const styles = {
  container: "hidden md:block z-10",
  button: "bg-transparent px-2 py-1 rounded-full text-lg hover:text-[#0076AD]",
  buttonOpen: "bg-red-500 px-2 py-1 rounded-full text-lg hover:bg-red-600",
  icon: "text-white",
  inputContainer:
    "absolute z-40 left-0 right-0 top-full max-h-screen py-9 px-5 md:px-20 bg-[#EBEBEB]",
};

interface NavSearchContainerProps {
  searchIndex: SearchIndex;
  onSearchOpen: () => void;
}

const NavSearchContainer = ({
  searchIndex,
  onSearchOpen,
}: NavSearchContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      document.body.style.overflow = "auto";
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

  const closeSearch = () => setIsOpen(false);
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    onSearchOpen();
  };

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        <div className="min-w-[55.5px]">
          <button
            onClick={toggleSearch}
            className={`${isOpen ? styles.buttonOpen : styles.button}`}
            aria-label={isOpen ? "Close" : "Search"}
          >
            {isOpen ? (
              <>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`${styles.icon} pr-1`}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={styles.icon}
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </>
            )}
          </button>
        </div>
        {isOpen && (
          <div className={styles.inputContainer}>
            <SearchForm onSelect={closeSearch} searchIndex={searchIndex} />
          </div>
        )}
      </div>
      <div className="block md:hidden py-3.5 px-7">
        <SearchForm onSelect={closeSearch} searchIndex={searchIndex} />
      </div>
    </>
  );
};

export default NavSearchContainer;
