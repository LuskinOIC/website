"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

import { dropdowns, menuMobileItems } from "./NavbarConstants";
import Button from "@/app/components/ui/Button";

interface DropdownStates {
  [key: string]: boolean;
  patientCare: boolean;
  medicalProfessionals: boolean;
  about: boolean;
  waysToGive: boolean;
}

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

  return (
    <NavigationMenu className="">
      <div className="flex flex-row w-full justify-between">
        {/* Container for Logo and Links */}

        {/* Logo Container */}
        <div className="flex p-5">
          <Image
            src={"/logo.svg"}
            alt={"Logo"}
            width={170}
            height={150}
            style={{}}
          />
        </div>

        {/* Links Container */}
        <div className="basis-3/4 text-lg">
          <div className="flex flex-row justify-end h-fit">
            <div className="hidden md:flex bg-purple-700 px-3 py-1 font-medium text-white rounded-bl-lg">
              Urgent Care - Save My Spot
            </div>
            <div>
              <ul className="hidden md:flex font-bold bg-blue-300 text-black py-1 px-3">
                <li className="mr-4"> 2137421000 </li>
                <li className="mr-4"> MyChart </li>
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
                className="h-full"
              >
                <button onClick={() => toggleDropdown(dropdown.stateKey)}>
                  {dropdown.label}
                </button>
                <div
                  className={`absolute mt-2 z-10 ${
                    dropdownStates[dropdown.stateKey] ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col bg-[#0076AD] border border-blue-400 divide-y divide-blue-400 rounded-md items-start">
                    {dropdown.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="w-full px-4 py-2">
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.url}
                            className="px-4 py-2 no-underline hover:underline"
                          >
                            {subItem.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="w-10 h-10 mt-10">
                    <div className="absolute border-b-[15px] border-b-[#32B8DE] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent left-2 bottom-full "></div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <Button
                href={"/"}
                text={"Donate"}
                variant={"yellow"}
                className="lg:h-[53px]"
              />
            </div>
          </div>
        </div>

        {/* MOBILE CONTAINER */}
        <NavigationMenuItem className="navbar justify-end relative container flex w-full md:hidden">
          <button className="bg-transparent text-white rounded-full p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
            className="bg-transparent text-white rounded-full p-2"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </NavigationMenuItem>
      </div>

      {/* Mobile dropdown options */}
      <NavigationMenuList className="md:hidden">
        {isHamburgerOpen && (
          <ul className="w-full text-sm flex justify-center items-center flex-col">
            {menuMobileItems.map((item, index) => (
              <li
                key={index}
                className={`${item.cssClasses} w-full text-center py-2`}
              >
                {item.type === "link" ? (
                  item.url && <Link href={item.url}>{item.label}</Link>
                ) : (
                  <button onClick={item.action || (() => {})}>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
            <li className="text-black w-full text-center py-2 bg-white">
              <Link href="/item2"></Link>
              <button
                onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
              >
                CLOSE
              </button>
            </li>
          </ul>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}