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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import externalIconWhite from "@/public/external-link-icon-white.svg";
import externalIconBlack from "@/public/external-link-icon-black.svg";
import { MYCHART_URL, SAVE_MY_SPOT } from "@/app/constants/links";

const styles = {
  navigationMenu: (isScrolled: boolean) =>
    `z-50 fixed max-w-[1600px] top-0 ${
      isScrolled
        ? "transition-all duration-300 ease-out md:h-[102px]"
        : "transition-all duration-300 ease-out md:h-[166px]"
    }`,
  desktopContainer: "flex flex-row w-full items-center",
  logoContainer: (isScrolled: boolean) =>
    `hidden md:block w-fit ${isScrolled ? "py-2" : "py-4"}`,
  logoImage: (isScrolled: boolean) =>
    `ml-4 ${
      isScrolled
        ? "transition-all duration-300 ease-out w-24"
        : "transition-all duration-300 ease-out w-40"
    }`,
  secondaryMenuContainer: "w-full",
  widgetContainer: (isScrolled: boolean) =>
    `flex flex-row justify-end h-fit transition-transform ease-out ${
      isScrolled ? "transform -translate-y-full" : "transform translate-y-0"
    }`,
  urgentCareLink:
    "hidden md:flex flex-row bg-luskin-purple px-3 py-1 font-medium text-white rounded-bl-lg underline underline-offset-4 hover:text-slate-200",
  infoList:
    "hidden md:flex h-full bg-luskin-brightBlue text-black text-base font-medium py-1 px-3",
  listItem: "mr-4 underline underline-offset-4 hover:text-slate-200",
  navigationItemsContainer: "hidden md:block w-full",
  navigationItemsSubContainer:
    "flex justify-evenly items-center w-full hover:text-slate-200",
  mobileContainer:
    "flex flex-row w-full justify-between items-center md:hidden",
  mobileLogoContainer: "block md:hidden py-2",
  navigationMenuItem: "block md:hidden list-none",
  mobileMenuButton: "bg-transparent text-white rounded-full py-3 px-4 text-xl",
};

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

  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  return (
    <NavigationMenu className={styles.navigationMenu(isScrolled)}>
      {/* DESKTOP CONTAINER */}
      <div className={styles.desktopContainer}>
        {/* LOGO CONTAINER */}
        <div className={styles.logoContainer(isScrolled)}>
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

        {/* SECONDARY MENU CONTAINER */}
        <div className={styles.secondaryMenuContainer}>
          <div className="text-lg absolute top-0 right-0">
            <div className={styles.widgetContainer(isScrolled)}>
              <a
                href={SAVE_MY_SPOT}
                onClick={() => handleClick("Nav Save My Spot")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.urgentCareLink}
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
                <ul className={styles.infoList}>
                  <li className="mr-4">(213) 742 - 1000</li>
                  <li className={styles.infoList}>
                    <a
                      href={MYCHART_URL}
                      onClick={() => handleClick("Nav MyChart")}
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
                  <li className={styles.listItem}>
                    <a
                      href="/espanol"
                      onClick={() => handleClick("Nav Spanish Page")}
                    >
                      Español
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.navigationItemsContainer}>
            <div className={styles.navigationItemsSubContainer}>
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
      <ul className={styles.mobileContainer}>
        {/* LOGO CONTAINER */}
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
      />
    </NavigationMenu>
  );
}
