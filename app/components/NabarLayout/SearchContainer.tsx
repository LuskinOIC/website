"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchContainerProps {
  isFocused: boolean;
  /* eslint-disable no-unused-vars */
  onChange: (id: string) => void;
  /* eslint-enable no-unused-vars */
}

const styles = {
  button: "bg-transparent p-2 rounded-full text-lg hover:text-[#0076AD]",
  container: "hidden md:block",
  inputContainer:
    "absolute z-40 w-full left-0 right-0 top-full h-[78px] py-9 bg-[#EBEBEB] border border-t-2 border-[#0076AD] flex justify-center items-center",
  input: "w-1/2 pl-4 pr-20 py-2 rounded-l-md border border-r-0 w-full",
  searchBtn:
    "px-4 py-2 bg-[#0076AD] text-white rounded-r-md border border-[#1868F1]",
};

const SearchDropdown = ({ isFocused, onChange }: SearchContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNavigatedFromButton, setHasNavigatedFromButton] = useState(false);
  const [isHoveringOverDropdown, setIsHoveringOverDropdown] = useState(false);
  const [timeoutPid, setTimeoutPid] = useState(null);

  function handleFocus() {
    setIsOpen(true);
    onChange("search");
  }

  useEffect(() => {
    if (!isFocused) {
      setIsOpen(false);
      setHasNavigatedFromButton(false);
      setIsHoveringOverDropdown(false);
    }
  }, [isFocused]);

  useEffect(() => {
    if (hasNavigatedFromButton) {
      const pid = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
      setTimeoutPid(pid as any);
    }
  }, [hasNavigatedFromButton]);

  useEffect(() => {
    if (isHoveringOverDropdown && timeoutPid) {
      clearTimeout(timeoutPid);
    }
  }, [isHoveringOverDropdown, timeoutPid]);

  return (
    <div className={styles.container}>
      <button
        onKeyDown={handleFocus}
        onMouseEnter={handleFocus}
        onClick={handleFocus}
        onMouseLeave={() => setHasNavigatedFromButton(true)}
        className={styles.button}
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {isOpen && (
        <div
          className={styles.inputContainer}
          onMouseLeave={() => {
            setIsOpen(false);
            setHasNavigatedFromButton(false);
            setIsHoveringOverDropdown(false);
          }}
          onMouseEnter={() => {
            setIsHoveringOverDropdown(true);
          }}
        >
          <input type="text" className={styles.input} placeholder="Search..." />
          <button
            className={styles.searchBtn}
            // onClick={}
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
