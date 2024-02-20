"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="text-white text-xl">
      <button
        aria-label={label}
        role="menu"
        onKeyDown={handleFocus}
        onMouseEnter={handleFocus}
        onClick={handleFocus}
        onMouseLeave={() => setHasNavigatedFromButton(true)}
        className="hover:text-slate-200"
      >
        {label}
      </button>
      {isOpen && (
        <>
          <div
            className="absolute z-10 mt-6"
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
              <div className="absolute z-10 border-b-[15px] border-b-luskin-brightBlue border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent left-2 bottom-full"></div>
            </div>
            <div className="flex-col bg-luskin-blue border border-luskin-brightBlue divide-y divide-luskin-brightBlue rounded-md items-start">
              {subItems.map((item) => (
                <div
                  key={item.fields.url}
                  className="py-2 px-10 flex items-center"
                >
                  {item.fields.isExternal ? (
                    <a
                      className="no-underline hover:underline font-light text-lg flex items-center"
                      href={item.fields.url}
                      aria-label={item.fields.text}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.fields.text}
                      <Image
                        src={external_icon_white}
                        alt="External Link"
                        width={16}
                        height={16}
                        className="text-white px-0.5"
                      />
                    </a>
                  ) : (
                    <Link href={item.fields.url} aria-label={item.fields.text}>
                      <div className="no-underline hover:underline font-light text-lg">
                        {item.fields.text}
                      </div>
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
