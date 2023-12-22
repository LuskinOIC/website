import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { MobileDropdowns } from "./NavbarConstants";
import { MYCHART_URL, SAVE_MY_SPOT } from "../constants/links";

interface MobileMenuProps {
  closeMenu: () => void;
  isHamburgerOpen: boolean;
  toggleHamburgerDropdown: () => void;
}

function MobileMenu({
  closeMenu,
  isHamburgerOpen,
  toggleHamburgerDropdown,
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

  return (
    <div>
      <NavigationMenuList className="md:hidden">
        {isHamburgerOpen && (
          <ul className="text-white w-full text-sm font-semibold flex flex-col justify-center items-center pt-4 pb-0">
            <a
              href={SAVE_MY_SPOT}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-luskin-purple w-full text-white text-center pt-4 pb-0"
            >
              URGENT CARE - SAVE MY SPOT
            </a>
            {MobileDropdowns.map((item, index) => (
              <li
                key={index}
                className={`${item.cssClasses} w-full text-center pt-4 pb-0`}
              >
                <button onClick={() => toggleMobileMenu(index)}>
                  {item.label}
                </button>

                {mobileMenuOpenStates[index] && (
                  <ul className="bg-gray-100 text-luskin-blue w-full text-sm flex flex-col py-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`${subItem} w-full text-center py-2`}
                      >
                        {subItem.type === "link" ? (
                          subItem.url && (
                            <Link href={subItem.url} onClick={closeMenu}>
                              {subItem.label}
                            </Link>
                          )
                        ) : (
                          <button onClick={() => toggleMobileMenu(index)}>
                            {subItem.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <a
              href={MYCHART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-luskin-yellow w-full text-black font-semibold text-center pt-4 pb-0"
            >
              MYCHART
            </a>
            <button
              onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
              className="bg-gray-100 w-full text-luskin-blue text-center pt-4 pb-0"
            >
              CLOSE
            </button>
          </ul>
        )}
      </NavigationMenuList>
    </div>
  );
}

export default MobileMenu;
