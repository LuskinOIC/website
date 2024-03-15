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
    `bg-white fixed max-w-[1600px] ${
      isScrolled
        ? "transition-all duration-300 ease-out md:h-[102px]"
        : "transition-all duration-300 ease-out md:h-[180px]"
    }`,
  // desktopContainer: 'flex flex-col w-full h-full items-center ',
  // topContainer: 'z-10 w-full relative top-0 right-0',
  // middleContainer:
  //   'relative z-50 flex flex-row w-full h-full items-center gap-x-40 bg-yellow-200',
  logoContainer: (isScrolled: boolean) =>
    `hidden md:block w-fit h-fit bg-pink-500 ${isScrolled ? "py-2" : "py-4"}`,
  logoImage: (isScrolled: boolean) =>
    `${
      isScrolled
        ? "transition-all duration-300 ease-out w-24"
        : "transition-all duration-300 ease-out w-30"
    }`,
  // secondaryMenuContainer: 'w-full h-full bg-yellow-200',
  widgetContainer: (isScrolled: boolean) =>
    `flex flex-row gap-10 justify-end w-full pr-8 text-white bg-[#0076AD] h-10  text-base transition-transform ease-out ${
      isScrolled ? "transform -translate-y-full" : "transform translate-y-0"
    }`,
  overlapTab: (isScrolled: boolean) =>
    `hidden md:flex flex-col text-center justify-center z-50 px-7 py-4 rounded-b-2xl hover:underline transition-all duration-500 ease-in-out ${
      isScrolled ? "max-h-0 overflow-hidden" : "max-h-[5rem] h-20"
    }`,
  mainNavScrollWrapper: (isScrolled: boolean) =>
    `w-full z-50 md:flex  h-full transition-opacity duration-500 ease-out ${
      isScrolled ? "absolute inset-x-0 top-0" : ""
    }`,
  infoList:
    "hidden md:flex h-full bg-luskin-brightBlue text-black text-base font-medium py-1 px-3",
  listItem: "mr-4 underline underline-offset-4 hover:text-slate-200",
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
      <div className={`${styles.widgetContainer(isScrolled)}`}>
        <div className={`${styles.overlapTab(isScrolled)} bg-[#825AA4]`}>
          Urgent Care <strong>Save My Spot</strong>
        </div>
        <div className="py-2">(213) 742 - 1000</div>
        <div className="py-2"> | </div>
        <a
          href="/espanol"
          onClick={() => handleClick("Nav Spanish Page")}
          className="py-2 font-semibold hover:underline"
        >
          Español
        </a>
        <div
          className={`${styles.overlapTab(
            isScrolled,
          )} bg-[#FCE385] text-black font-semibold text-lg`}
        >
          DONATE
        </div>
      </div>

      <div className={`${styles.mainNavScrollWrapper(isScrolled)}`}>
        <div className={`h-fit ml-20 ${styles.logoContainer(isScrolled)}`}>
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
        <div className="flex flex-row justify-evenly w-full items-center">
          <div className="item-end">LOGO</div>
          <div className="item-end">LOGO</div>
          <div className="item-end">LOGO</div>
          <div className="item-end">LOGO</div>
          <div className="item-end">LOGO</div>
          <div className="item-end">LOGO</div>
        </div>
      </div>

      <div
        id="navdropdown"
        className="absolute z-40 w-full left-0 right-0 top-full bg-red-500"
      >
        HELLLOOO
      </div>
    </NavigationMenu>
  );
}
