"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

interface NavbarDropDownProps {
  id: string;
  label: string;
  subItems: any[];
  isFocused: boolean;
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

  function handleFocus() {
    setIsOpen(true);
    onChange(id);
  }

  useEffect(() => {
    if (!isFocused) {
      setIsOpen(false);
    }
  }, [isFocused]);

  return (
    <div className="text-white text-xl">
      <button onMouseEnter={handleFocus}>{label}</button>
      {isOpen && (
        <>
          <div
            className="absolute z-10 mt-6"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="w-10">
              <div className="absolute z-10 border-b-[15px] border-b-luskin-brightBlue border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent left-2 bottom-full"></div>
            </div>
            <div className="flex-col bg-luskin-blue border border-luskin-brightBlue divide-y divide-luskin-brightBlue rounded-md items-start">
              {subItems.map((item) => (
                <div key={item.url} className="py-2 px-10">
                  <Link
                    className="no-underline hover:underline font-light text-lg"
                    href={item.url}
                  >
                    {item.label}
                  </Link>
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
