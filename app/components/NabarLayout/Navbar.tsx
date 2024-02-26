"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "@/app/components/NabarLayout/MobileMenu";
import NavigationItem from "@/app/components/NabarLayout/NavigationItem";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { NavigationBarType } from "@/app/constants/types";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import externalIconWhite from "@/public/external-link-icon-white.svg";
import externalIconBlack from "@/public/external-link-icon-black.svg";
import { MYCHART_URL, SAVE_MY_SPOT } from "@/app/constants/links";

export default function Navbar({
  navigationBar,
}: {
  navigationBar: NavigationBarType;
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleHamburgerDropdown = () => setIsHamburgerOpen(!isHamburgerOpen);
  const resetNavigationMenu = () => setIsHamburgerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const widgetTransformClass = isScrolled
    ? "transform -translate-y-full"
    : "transform translate-y-0";
  const transitionClass = isScrolled
    ? "transition-all duration-300 ease-out"
    : "transition-all duration-300 ease-out";
  const navbarClass = isScrolled ? "md:h-[102px]" : "md:h-[166px]";
  const paddingClass = isScrolled ? "py-2" : "py-4";
  const logoWidthClass = isScrolled ? "w-24" : "w-40";

  return (
    <NavigationMenu
      className={`z-50 fixed max-w-[1600px] top-0 ${transitionClass} ${navbarClass}`}
    >
      {/* DESKTOP CONTAINER */}
      <div className="flex flex-row w-full items-center">
        {/* LOGO CONTAINER */}
        <div className={`hidden md:block w-fit ${paddingClass}`}>
          <Link href="/">
            <Image
              className={`ml-4 ${transitionClass} ${logoWidthClass}`}
              src={navigationBar.logo.fields.file.url}
              alt="Logo for Luskin Orthopaedic Institute for Children"
              width={150}
              height={250}
            />
          </Link>
        </div>

        {/* SECONDARY MENU CONTAINER */}
        <div className="w-full">
          <div className="text-lg absolute top-0 right-0">
            <div
              className={`flex flex-row justify-end h-fit transition-transform ease-out ${widgetTransformClass}`}
            >
              <a
                href={SAVE_MY_SPOT}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex flex-row bg-luskin-purple px-3 py-1 font-medium text-white rounded-bl-lg underline underline-offset-4 hover:text-slate-200"
              >
                Urgent Care - Save My Spot
                <Image
                  src={externalIconWhite}
                  alt="External Link"
                  width={16}
                  height={16}
                  className="text-white px-0.5"
                />
              </a>
              <div>
                <ul className="hidden md:flex h-full bg-luskin-brightBlue text-black text-base font-medium py-1 px-3">
                  <li className="mr-4">(213) 742 - 1000</li>
                  <li className="mr-4 underline underline-offset-4 hover:text-slate-200">
                    <a
                      href={MYCHART_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row"
                    >
                      MyChart
                      <Image
                        src={externalIconBlack}
                        alt="External Link"
                        width={16}
                        height={16}
                        className="text-white px-0.5"
                      />
                    </a>
                  </li>
                  <li className="mr-4 underline underline-offset-4 hover:text-slate-200">
                    <a href="/espanol">Español</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full">
            <div className="flex justify-evenly items-center w-full hover:text-slate-200">
              {navigationBar.navigationItems.map((item) => {
                return (
                  <NavigationItem
                    key={item.sys.id}
                    item={item}
                    selectedDropdown={selectedDropdown}
                    setSelectedDropdown={setSelectedDropdown}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CONTAINER */}
      <ul className="flex flex-row w-full justify-between items-center md:hidden">
        {/* LOGO CONTAINER */}
        <li className="block md:hidden py-2">
          <Link href="/">
            <Image
              className="ml-4"
              src={"/LOIC_LOGO.svg"}
              alt={"Logo"}
              width={90}
              height={60}
            />
          </Link>
        </li>

        {/* To be implemented later */}
        <NavigationMenuItem className="block md:hidden list-none">
          {/* <button className="bg-transparent text-white rounded-full p-3 text-xl"> */}{" "}
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {/* </button> */}
          <button
            onClick={toggleHamburgerDropdown}
            aria-label="Open Navigation Menu"
            className="bg-transparent text-white rounded-full py-3 px-4 text-xl"
          >
            {" "}
            {/* Increase padding and font size */}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </NavigationMenuItem>
      </ul>

      <MobileMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburgerDropdown={toggleHamburgerDropdown}
        closeMenu={resetNavigationMenu}
      />
    </NavigationMenu>
  );
}
