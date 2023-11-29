"use client";

import React, { useState, useEffect } from "react";
import chevronDown from "../../../public/chevron-down.svg";
import Image from "next/image";
import { OptionType } from "@/app/constants/types";

interface DropdownProps {
  placeHolder: string;
  options: OptionType[];
}

export default function Dropdown(props: DropdownProps) {
  const [showMenu, setShowMenu] = useState(false);
  // allow users to select options and siplay value selecte din dropdown input
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

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return props.placeHolder;
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
      <div className="DROPDOWN-MENU-CONTAINER text-left border border-solid border border-[#0076AD] relative rounded">
        <div
          onClick={handleInputClick}
          className="DROPDOWN-INPUT p-1 flex items-center justify-between select-none"
        >
          <div className="DROPDOWN-SELECTED-VALUE pl-2">{getDisplay()}</div>
          <div className="DROPDOWN-TOOLS">
            <div className="DROPDOWN-TOOL pr-1">
              <Image alt="chevron-down" src={chevronDown} />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="DROPDOWN-MENU absolute translate-y-1 w-full border border-solid border-[#ccc] rounded overflow-auto max-h-36 bg-[#fff]">
            {props.options.map((option) => (
              <div
                key={option.value}
                onClick={() => onItemClick(option)}
                className={`p-1 cursor-pointer :bg-[#9fc3f870] ${
                  isSelected(option) ? "bg-[#0d6efd] text-white" : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
