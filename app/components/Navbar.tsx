"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass,} from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/ui/Button";
import { DONATE_URL, MYCHART_URL, SAVE_MY_SPOT } from "../constants/links";
import NavbarDropdown from "@/app/components/NavbarDropdown";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const [selectedDropdown, setSelectedDropdown] = React.useState("");
  const toggleHamburgerDropdown = () => setIsHamburgerOpen(!isHamburgerOpen);
  const resetNavigationMenu = () => setIsHamburgerOpen(false);

  return (
    <NavigationMenu className="">
      <div className="flex flex-row w-full items-center">
        {/* Container for Logo and Links */}

        {/* Logo Container*/}
        <div className="hidden md:block w-fit py-4">
          <Link href="/">
            <Image
              className="ml-4"
              src={"/LOIC_LOGO.svg"}
              alt={"Logo"}
              width={150}
              height={250}
            />
          </Link>
        </div>

        <div className="w-full">
          <div className="basis-3/4 text-lg absolute top-0 right-0">
            <div className="flex flex-row justify-end h-fit">
              <div className="hidden md:flex bg-luskin-purple px-3 py-1 font-medium text-white rounded-bl-lg hover:underline">
                <a
                  href={SAVE_MY_SPOT}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Urgent Care - Save My Spot
                </a>
              </div>
              <div>
                <ul className="hidden md:flex font-bold bg-luskin-brightBlue text-black py-1 px-3">
                  <li className="mr-4">(213) 742 - 1000</li>
                  <li className="mr-4 hover:underline">
                    <a
                      href={MYCHART_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MyChart
                    </a>
                  </li>
                  <li className="mr-4">Espanol</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full">
            <div className="flex justify-evenly items-center w-full">
              <NavbarDropdown
                id="patientCare"
                label="Patient Care"
                onChange={setSelectedDropdown}
                isFocused={selectedDropdown === "patientCare"}
                subItems={[
                  { label: "Patient Care", url: "/patient-care" },
                  { label: "Urgent Care", url: SAVE_MY_SPOT },
                  { label: "Specialties", url: "/specialties" },
                ]}
              />
              <NavbarDropdown
                id="medicalProfessionals"
                label="Medical Professionals"
                isFocused={selectedDropdown === "medicalProfessionals"}
                onChange={setSelectedDropdown}
                subItems={[
                  {
                    label: "Medical Professionals",
                    url: "/medical-professionals",
                  },
                  { label: "Physicians", url: "/physicians" },
                  { label: "Specialties", url: "/specialties" },
                ]}
              />
              <NavbarDropdown
                id="about"
                label="About"
                onChange={setSelectedDropdown}
                isFocused={selectedDropdown === "about"}
                subItems={[
                  { label: "About Us", url: "/about" },
                  { label: "Leadership", url: "/leadership" },
                  { label: "Blog", url: "/blog" },
                  { label: "Partnerships", url: "/partnerships" },
                ]}
              />
              <Link className="block text-white text-xl" href="/ways-to-give">
                Ways to Give
              </Link>
              <Button
                href={DONATE_URL}
                text={"Donate"}
                variant={"yellowPrimary"}
                className="lg:h-[53px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CONTAINER */}
      <div className="flex flex-row w-full justify-between items-center md:hidden">
        {/* Logo Container*/}
        <div className="block md:hidden py-2">
          <Link href="/">
            <Image
              className="ml-4"
              src={"/LOIC_LOGO.svg"}
              alt={"Logo"}
              width={90}
              height={60}
            />
          </Link>
        </div>

        {/* To be implemented later*/}
        <NavigationMenuItem className="list-none">
          {/* <button className="bg-transparent text-white rounded-full p-3 text-xl"> */}{" "}
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          {/* </button> */}
          <button
            onClick={toggleHamburgerDropdown}
            className="bg-transparent text-white rounded-full py-3 px-4 text-xl"
          >
            {" "}
            {/* Increase padding and font size */}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </NavigationMenuItem>
      </div>

      <MobileMenu
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburgerDropdown={toggleHamburgerDropdown}
        closeMenu={resetNavigationMenu}
      />
    </NavigationMenu>
  );
}
