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
    `bg-red-500 fixed max-w-[1600px] top-0 ${
      isScrolled
        ? "transition-all duration-300 ease-out md:h-[102px]"
        : "transition-all duration-300 ease-out md:h-[166px]"
    }`,
  // desktopContainer: 'flex flex-col w-full h-full items-center ',
  // topContainer: 'z-10 w-full relative top-0 right-0',
  // middleContainer:
  //   'relative z-50 flex flex-row w-full h-full items-center gap-x-40 bg-yellow-200',
  // logoContainer: (isScrolled: boolean) =>
  //   `hidden md:block w-fit ${isScrolled ? 'py-2' : 'py-4'}`,
  // logoImage: (isScrolled: boolean) =>
  //   `ml-4 ${
  //     isScrolled
  //       ? 'transition-all duration-300 ease-out w-24'
  //       : 'transition-all duration-300 ease-out w-40'
  //   }`,
  // secondaryMenuContainer: 'w-full h-full bg-yellow-200',
  widgetContainer: (isScrolled: boolean) =>
    `flex flex-row gap-10 justify-end w-full bg-[#0076AD] h-10 transition-transform ease-out ${
      isScrolled ? "transform -translate-y-full" : "transform translate-y-0"
    }`,
  urgentCareLink: (isScrolled: boolean) =>
    `hidden md:block z-50 bg-purple-500 px-5 rounded-b-2xl transition-all duration-500 ease-in-out ${
      isScrolled ? "max-h-0 overflow-hidden" : "max-h-[5rem] h-20"
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
      {/* DESKTOP CONTAINER */}
      <div className={`${styles.widgetContainer(isScrolled)}`}>
        <div className={styles.urgentCareLink(isScrolled)}>
          Your content here...
        </div>
        <div className="">HELLLOOO</div>
        <div className="">HELLLOOO</div>
      </div>

      {/* <div className={styles.desktopContainer}>
        <div className={styles.middleContainer}>
          <div className={styles.logoContainer(isScrolled)}>
            <Link href="/" onClick={() => handleClick('Logo Home')}>
              <Image
                className={styles.logoImage(isScrolled)}
                src={navigationBar.logo.fields.file.url}
                alt="Logo for Luskin Orthopaedic Institute for Children"
                width={150}
                height={250}
              />
            </Link>
          </div>
        </div>
      </div> */}

      {/* <div
        id="navdropdown"
        className="absolute z-40 w-full left-0 right-0 mt-6 top-full bg-red-500"
      >
        HELLLOOO
      </div> */}
    </NavigationMenu>
  );
}
