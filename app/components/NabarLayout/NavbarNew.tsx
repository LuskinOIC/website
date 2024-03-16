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
import SupportWidget from "@/app/components/NabarLayout/SupportWidget";

const styles = {
  navigationMenu: (isScrolled: boolean) =>
    `bg-white fixed max-w-[1600px] ${
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
  // infoList:
  //   "hidden md:flex h-full bg-luskin-brightBlue text-black text-base font-medium py-1 px-3",
  // listItem: "mr-4 underline underline-offset-4 hover:text-slate-200",
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
        </div>
      </div>
    </NavigationMenu>
  );
}
