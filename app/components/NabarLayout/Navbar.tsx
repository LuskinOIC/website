"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

import MobileMenu from "@/app/components/NabarLayout/MobileMenu";
import NavigationItem from "@/app/components/NabarLayout/NavigationItem";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/app/components/ui/NavigationMenu";
import { NavigationBarType } from "@/app/constants/types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SupportWidget from "./SupportWidget";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchDropdown from "./SearchContainer";
import bluePhone from "@/public/blue-phone-icon.svg";
// import externalIconBlack from "@/public/external-link-icon-black.svg";

const styles = {
  navigationMenu: (isScrolled: boolean) =>
    `bg-white fixed max-w-[1600px] border-b-2 border-x-2 border-[#0076AD] ${
      isScrolled
        ? "transition-all duration-300 ease-out md:h-[102px]"
        : "transition-all duration-300 ease-out md:h-[180px]"
    }`,
  mainNavScrollWrapper: (isScrolled: boolean) =>
    `hidden md:flex z-50 w-full h-full mx-10  transition-opacity duration-500 ease-out ${
      isScrolled ? "absolute inset-x-0 top-0" : ""
    }`,
  logoContainer: "hidden md:block w-fit  h-fit h-fit bg-pink-200 py-2",
  logoImage: (isScrolled: boolean) =>
    `${
      isScrolled
        ? "transition-all duration-300 ease-out w-24"
        : "transition-all duration-300 ease-out w-30"
    }`,
  navigationItems: "hidden md:flex flex-row justify-evenly w-full items-center",
  mobileContainer:
    "flex flex-row w-full justify-between items-center md:hidden text-black",
  mobileLogoContainer: "block md:hidden py-2 bg-pink-200",
  navigationMenuItem: "block md:hidden list-none",
  mobileMenuButton: "bg-transparent text-black rounded-full py-3 px-4 text-xl",
};

export default function Navbar({
  navigationBar,
}: {
  navigationBar: NavigationBarType;
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("helloo");
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

  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  return (
    <NavigationMenu className={styles.navigationMenu(isScrolled)}>
      {/* DESKTOP CONTAINER */}
      <SupportWidget isScrolled={isScrolled} />

      <div className={styles.mainNavScrollWrapper(isScrolled)}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={() => handleClick("Logo Home")}>
            <Image
              className={styles.logoImage(isScrolled)}
              src={navigationBar.logo.fields.file.url}
              alt="Logo for Luskin Orthopaedic Institute for Children"
              width={150}
              height={250}
            />
          </Link>
        </div>

        <div className={styles.navigationItems}>
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
          {/* SEARCH CONTAINER */}
          <div className="flex flex-row gap-2 text-[#171515] font-bold text-xl">
            <Image src={bluePhone} alt="Phone Icon" width={20} height={20} />
            <span> 213-742-1000 </span>
          </div>
          <SearchDropdown
            isFocused={selectedDropdown === "search"}
            onChange={setSelectedDropdown}
          />
        </div>
      </div>

      {/* MOBILE CONTAINER */}
      <ul className={styles.mobileContainer}>
        <li className={styles.mobileLogoContainer}>
          <Link href="/" onClick={() => handleClick("Mobile Logo Home")}>
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
        <NavigationMenuItem className={styles.navigationMenuItem}>
          {/* <button className="bg-transparent text-white rounded-full p-3 text-xl"> */}{" "}
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {/* </button> */}
          <button
            onClick={toggleHamburgerDropdown}
            aria-label="Open Navigation Menu"
            className={styles.mobileMenuButton}
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
        dropdowns={navigationBar.dropdowns}
      />
    </NavigationMenu>
  );
}
