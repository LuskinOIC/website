"use client";

import React, { useState, useEffect } from "react";
import chevronDown from "@/public/chevron-down.svg";
import Image from "next/image";
import { OptionType } from "@/app/constants/types";

interface DropdownProps {
  placeHolder: string;
  options: OptionType[];
}

export default function Dropdown(props: DropdownProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const resetSelectedValue = () => {
    setSelectedValue(null);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label.toUpperCase();
    }
    return props.placeHolder.toUpperCase();
  };

  const onItemClick = (option: OptionType) => {
    setSelectedValue(option);
    window.location.href = `#${option.targetID}`;
    setShowMenu(false);
  };

  const isSelected = (option: OptionType) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <>
      <div className="text-left border border-solid border border-[#0076AD] relative rounded">
        <button
          onClick={handleInputClick}
          onKeyDown={handleInputClick}
          className="p-1 py-4 flex items-center justify-between select-none"
        >
          <div className="pl-4 text-[#9A9A9A]">{getDisplay()}</div>
          <div className="pr-1">
            <Image alt="chevron-down" src={chevronDown} />
          </div>
        </button>
        {showMenu && (
          <div className="text-black absolute translate-y-1 w-full border border-solid border-[#ccc] rounded overflow-auto max-h-36 bg-[#fff]">
            {props.options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onItemClick(option);
                  resetSelectedValue();
                }}
                className={`p-2 cursor-pointer :bg-[#9fc3f870] ${
                  isSelected(option) ? "bg-[#0d6efd] text-white" : ""
                }`}
              >
                {option.label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
