"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import external_icon_white from "@/public/external-link-icon-white.svg";

interface NavbarDropDownProps {
  id: string;
  label: string;
  subItems: any[];
  isFocused: boolean;
  // TODO: Figure out why this lint is failing.
  // eslint-disable-next-line no-unused-vars
  onChange: (id: string) => void;
}

const styles = {
  container: "text-white text-xl",
  button: "hover:text-slate-200",
  dropdownContainer: "absolute z-10 mt-6",
  arrow:
    "absolute z-10 border-b-[15px] border-b-luskin-brightBlue border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent left-2 bottom-full",
  dropdown:
    "flex-col bg-luskin-blue border border-luskin-brightBlue divide-y divide-luskin-brightBlue rounded-md items-start",
  item: "py-2 px-10 flex items-center",
  link: "no-underline hover:underline font-light text-lg flex items-center",
  linkIcon: "text-white px-0.5",
};

function NavbarDropDown({
  id,
  label,
  subItems,
  onChange,
  isFocused,
}: NavbarDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNavigatedFromButton, setHasNavigatedFromButton] = useState(false);
  const [isHoveringOverDropdown, setIsHoveringOverDropdown] = useState(false);
  const [timeoutPid, setTimeoutPid] = useState(null);

  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  function handleFocus() {
    setIsOpen(true);
    onChange(id);
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
        aria-label={label}
        onKeyDown={handleFocus}
        onMouseEnter={handleFocus}
        onClick={handleFocus}
        onMouseLeave={() => setHasNavigatedFromButton(true)}
        className={styles.button}
      >
        {label}
      </button>
      {isOpen && (
        <>
          <div
            className={styles.dropdownContainer}
            onMouseLeave={() => {
              setIsOpen(false);
              setHasNavigatedFromButton(false);
              setIsHoveringOverDropdown(false);
            }}
            onMouseEnter={() => {
              setIsHoveringOverDropdown(true);
            }}
          >
            <div className="w-10">
              <div className={styles.arrow}></div>
            </div>
            <div className={styles.dropdown}>
              {subItems.map((item) => (
                <div key={item.fields.url} className={styles.item}>
                  {item.fields.isExternal ? (
                    <a
                      className={styles.link}
                      href={item.fields.url}
                      aria-label={item.fields.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        handleClick(`Nav dropdown ${item.fields.text}`)
                      }
                    >
                      {item.fields.text}
                      <Image
                        src={external_icon_white}
                        alt="External Link"
                        width={16}
                        height={16}
                        className={styles.linkIcon}
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.fields.url}
                      onClick={() =>
                        handleClick(`Nav dropdown ${item.fields.text}`)
                      }
                      aria-label={item.fields.text}
                    >
                      <div className={styles.link}>{item.fields.text}</div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NavbarDropDown;
