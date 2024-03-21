import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenuList } from "@/app/components/ui/NavigationMenu";
import { MobileDropdowns } from "@/app/components/NabarLayout/NavbarConstants";
import { DONATE_URL, MYCHART_URL, SAVE_MY_SPOT } from "@/app/constants/links";
import external_icon_white from "@/public/external-link-icon-white.svg";
import external_icon_black from "@/public/external-link-icon-black.svg";
import { sendGAEvent } from "@next/third-parties/google";
import { NavigationDropdownType } from "@/app/constants/types";

interface MobileMenuProps {
  closeMenu: () => void;
  isHamburgerOpen: boolean;
  toggleHamburgerDropdown: () => void;
  dropdowns: NavigationDropdownType[];
}

const styles = {
  navigationMenu: "block md:hidden",
  menuList:
    "text-white w-full text-sm font-semibold flex flex-col justify-center items-center pt-4 pb-0",
  menuItem:
    "flex flex-row justify-center bg-luskin-purple w-full text-white text-center py-2",
  externalLinkIcon: "text-white px-0.5",
  mobileDropdown: "w-full text-center py-2 text-black",
  mobileDropdownMenu:
    "bg-gray-100 text-luskin-blue underline w-full text-sm flex flex-col py-2 ",
  mobileDropdownMenuItem: "w-full text-center py-2",
  myChartLink:
    "flex flex-row justify-center w-full text-black font-semibold text-center py-2",
  donateButton: "w-full bg-amber-200 text-black font-semibold text-center py-2",
  closeButton: "bg-gray-100 w-full text-luskin-blue text-center py-2",
};

function MobileMenu({
  closeMenu,
  isHamburgerOpen,
  toggleHamburgerDropdown,
  dropdowns,
}: MobileMenuProps) {
  const [mobileMenuOpenStates, setMobileMenuOpenStates] = useState(
    MobileDropdowns.map(() => false),
  );
  useEffect(() => {
    // Reset all mobileMenuOpenStates to false when isHamburgerOpen becomes false
    if (!isHamburgerOpen) {
      setMobileMenuOpenStates(MobileDropdowns.map(() => false));
    }
  }, [isHamburgerOpen]);

  const toggleMobileMenu = (index: number) => {
    const newMobileMenuOpenStates = [...mobileMenuOpenStates];
    newMobileMenuOpenStates[index] = !newMobileMenuOpenStates[index];
    setMobileMenuOpenStates(newMobileMenuOpenStates);
  };

  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  return (
    <NavigationMenuList className={styles.navigationMenu}>
      {isHamburgerOpen && (
        <ul className={styles.menuList}>
          <a
            href={SAVE_MY_SPOT}
            onClick={() => handleClick("Mobile Nav Save My Spot")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Urgent Care - Save My Spot (opens new tab)"
            className={styles.menuItem}
          >
            URGENT CARE - SAVE MY SPOT MYCHART
            <Image
              src={external_icon_white}
              alt="External Link"
              width={16}
              height={16}
              className={styles.externalLinkIcon}
            />
          </a>
          {dropdowns.map((item, index) => (
            <li key={index} className={`${styles.mobileDropdown}`}>
              <button onClick={() => toggleMobileMenu(index)}>
                {item.fields.text}
              </button>

              {mobileMenuOpenStates[index] && (
                <ul className={styles.mobileDropdownMenu}>
                  {item.fields.navigationLinks.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`${styles.mobileDropdownMenuItem}`}
                    >
                      {subItem.fields.isExternal ? (
                        <button
                          onClick={() => {
                            handleClick(`Mobile Nav ${subItem.fields.text}}`);
                            toggleMobileMenu(index);
                          }}
                        >
                          {subItem.fields.text}
                        </button>
                      ) : (
                        subItem.fields.url && (
                          <Link
                            href={subItem.fields.url}
                            onClick={() => {
                              handleClick(`Mobile Nav ${subItem.fields.text}`);
                              closeMenu;
                            }}
                          >
                            {subItem.fields.text}
                          </Link>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <a
            href={MYCHART_URL}
            onClick={() => handleClick("Mobile Nav MyChart")}
            target="_blank"
            aria-label="MYCHART (opens new tab)"
            rel="noopener noreferrer"
            className={styles.myChartLink}
          >
            MYCHART
            <Image
              src={external_icon_black}
              alt="External Link"
              width={16}
              height={16}
              className={styles.externalLinkIcon}
            />
          </a>
          <a
            href={DONATE_URL}
            onClick={() => handleClick("Mobile Nav Donate")}
            target="_blank"
            aria-label="DONATE (opens new tab)"
            rel="noopener noreferrer"
            className={styles.donateButton}
          >
            DONATE
          </a>
          <button
            onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
            className={styles.closeButton}
          >
            CLOSE
          </button>
        </ul>
      )}
    </NavigationMenuList>
  );
}

export default MobileMenu;
