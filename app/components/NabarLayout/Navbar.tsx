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
import NavSearchContainer from "./SearchContainer";
import bluePhone from "@/public/blue-phone-icon.svg";
import logo from "@/public/Luskin_OIC_v2.png";
import { SearchIndex } from "@/app/constants/types";

const styles = {
  navigationMenu: (isScrolled: boolean) =>
    `bg-white fixed max-w-[1600px] ${
      isScrolled
        ? "transition-all duration-300 ease-out md:h-[102px]"
        : "transition-all duration-300 ease-out md:h-[180px]"
    }`,
  mainNavScrollWrapper: (isScrolled: boolean) =>
    `hidden md:flex z-50 w-full h-full transition-opacity duration-500 ease-out ${
      isScrolled ? "absolute inset-x-0 top-0" : ""
    }`,
  logoContainer: "hidden md:block w-fit h-fit h-fit mx-10 pt-4",
  logoImage: (isScrolled: boolean) =>
    ` h-auto ${
      isScrolled
        ? "transition-all duration-300 ease-out w-24"
        : "transition-all duration-300 ease-out w-30"
    }`,
  navigationItems:
    "hidden md:flex flex-row justify-evenly w-full items-center z-1",
  theContainer: "flex md:hidden flex-col py-2",
  mobileContainer:
    "flex md:hidden flex-row w-full justify-between items-center text-black",
  mobileLogoContainer: "block md:hidden py-2",
  navigationMenuItem: "block flex flex-row md:hidden list-none",
  mobileMenuButton: "bg-transparent text-black rounded-full px-4 text-xl",
};

export default function Navbar({
  navigationBar,
  searchIndex,
}: {
  navigationBar: NavigationBarType;
  searchIndex: SearchIndex;
}) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleHamburgerDropdown = () => setIsHamburgerOpen(!isHamburgerOpen);
  const resetNavigationMenu = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);

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

  const closeMenuItems = () => {
    setSelectedDropdown("");
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
              src={logo}
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
                closeMenuItems={closeMenuItems}
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
          <NavSearchContainer
            searchIndex={searchIndex}
            onSearchOpen={closeMenuItems}
          />
        </div>
      </div>

      {/* MOBILE CONTAINER */}
      <div className={styles.theContainer}>
        <ul className={styles.mobileContainer}>
          <li className={styles.mobileLogoContainer}>
            <Link href="/" onClick={() => handleClick("Mobile Logo Home")}>
              <Image
                className="ml-4 w-contain h-auto"
                src={logo}
                alt={"Logo"}
                width={90}
                height={60}
              />
            </Link>
          </li>

          <NavigationMenuItem className={styles.navigationMenuItem}>
            <button
              onClick={toggleHamburgerDropdown}
              aria-label="Open Navigation Menu"
              className={styles.mobileMenuButton}
            >
              {" "}
              <FontAwesomeIcon icon={faBars} />
            </button>
          </NavigationMenuItem>
        </ul>
        <NavSearchContainer
          searchIndex={searchIndex}
          onSearchOpen={closeMenuItems}
        />
      </div>

      <MobileMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburgerDropdown={toggleHamburgerDropdown}
        closeMenu={resetNavigationMenu}
        dropdowns={navigationBar.dropdowns}
      />
    </NavigationMenu>
  );
}
