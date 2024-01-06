"use client";

import * as React from "react";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

import { dropdowns } from "./NavbarConstants";
import Button from "@/app/components/ui/Button";
import { DONATE_URL, MYCHART_URL, SAVE_MY_SPOT } from "../constants/links";

interface DropdownStates {
  [key: string]: boolean;
  patientCare: boolean;
  medicalProfessionals: boolean;
  about: boolean;
  waysToGive: boolean;
}

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const toggleHamburgerDropdown = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const [dropdownStates, setDropdownStates] = React.useState<DropdownStates>({
    patientCare: false,
    medicalProfessionals: false,
    about: false,
    waysToGive: false,
  });

  const toggleDropdown = (key: keyof DropdownStates) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const resetNavigationMenu = () => {
    setIsHamburgerOpen(false);
    setDropdownStates({
      patientCare: false,
      medicalProfessionals: false,
      about: false,
      waysToGive: false,
    });
  };

  return (
    <NavigationMenu className="">
      <div className="flex flex-row  mx-2 w-full justify-between">
        {/* Container for Logo and Links */}

        {/* Logo Container */}
        <div className="flex mx-8 mb-4 pt-5 pb-1">
          <a href="/">
            <Image
              src={"/logo.svg"}
              alt={"Logo"}
              width={200}
              height={170}
              style={{}}
            />
          </a>
        </div>

        {/* Links Container */}
        <div className="basis-3/4 text-lg">
          <div className="flex flex-row justify-end h-fit">
            <div className="hidden md:flex bg-luskin-purple px-3 py-1 font-medium text-white rounded-bl-lg hover:underline">
              <a href={SAVE_MY_SPOT} target="_blank" rel="noopener noreferrer">
                Urgent Care - Save My Spot
              </a>
            </div>
            <div>
              <ul className="hidden md:flex font-bold bg-luskin-brightBlue text-black py-1 px-3">
                <li className="mr-4"> (213) 742 - 1000 </li>
                <li className="mr-4 hover:underline">
                  <a
                    href={MYCHART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MyChart
                  </a>
                </li>
                <li className="mr-4"> Espanol </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:flex justify-evenly my-12 items-center text-white text-2xl">
            {dropdowns.map((dropdown, index) => (
              <div
                key={index}
                onMouseEnter={() => toggleDropdown(dropdown.stateKey)}
                onMouseLeave={() => toggleDropdown(dropdown.stateKey)}
                className=""
              >
                <button onClick={() => toggleDropdown(dropdown.stateKey)}>
                  {dropdown.label}
                </button>
                <div
                  className={`absolute mt-2 z-10 ${
                    dropdownStates[dropdown.stateKey] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col bg-luskin-blue border border-luskin-brightBlue divide-y divide-luskin-brightBlue rounded-md items-start">
                    {dropdown.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="w-full py-2">
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.url}
                            className="px-4 pt-10 no-underline hover:underline font-light text-base"
                          >
                            {subItem.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="w-10 h-10 mt-10">
                    <div className="absolute border-b-[15px] border-b-luskin-brightBlue border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent left-2 bottom-full "></div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <Button
                href={DONATE_URL}
                text={"Donate"}
                variant={"yellow"}
                className="lg:h-[53px]"
              />
            </div>
          </div>
        </div>

        {/* MOBILE CONTAINER */}
        <NavigationMenuItem className="navbar justify-end relative container flex w-full md:hidden">
          <button className="bg-transparent text-white rounded-full p-3 text-xl">
            {" "}
            {/* Increase padding and font size */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            onClick={toggleHamburgerDropdown}
            className="bg-transparent text-white rounded-full py-3 px-4 text-xl"
          >
            {" "}
            {/* Increase padding and font size */}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </NavigationMenuItem>

        {/* Mobile dropdown options */}
      </div>
      <MobileMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburgerDropdown={toggleHamburgerDropdown}
        closeMenu={resetNavigationMenu}
      />
    </NavigationMenu>
  );
}
