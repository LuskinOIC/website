import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { MobileDropdowns } from "@/app/components/NabarLayout/NavbarConstants";
import { DONATE_URL, MYCHART_URL, SAVE_MY_SPOT } from "@/app/constants/links";

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
    <NavigationMenuList className="block md:hidden bg-[#0076AD]">
      {isHamburgerOpen && (
        <ul className="text-white underline w-full text-sm font-semibold flex flex-col justify-center items-center pt-4 pb-0">
          <a
            href={SAVE_MY_SPOT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Urgent Care - Save My Spot (opens new tab)"
            className=" bg-luskin-purple w-full text-white text-center py-2"
          >
            URGENT CARE - SAVE MY SPOT
          </a>
          {MobileDropdowns.map((item, index) => (
            <li
              key={index}
              className={`${item.cssClasses} w-full text-center py-2`}
            >
              <button
                onClick={() => toggleMobileMenu(index)}
                className="underline"
              >
                {item.label}
              </button>

              {mobileMenuOpenStates[index] && (
                <ul className="bg-gray-100 text-luskin-blue underline w-full text-sm flex flex-col py-2">
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
            aria-label="MYCHART (opens new tab)"
            rel="noopener noreferrer"
            className="w-full text-white font-semibold text-center py-2"
          >
            MYCHART
          </a>
          <a
            href={DONATE_URL}
            target="_blank"
            aria-label="DONATE (opens new tab)"
            rel="noopener noreferrer"
            className="w-full bg-amber-200 text-black font-semibold text-center py-2"
          >
            DONATE
          </a>
          <button
            onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
            className="bg-gray-100 w-full text-luskin-blue text-center py-2"
          >
            CLOSE
          </button>
        </ul>
      )}
    </NavigationMenuList>
  );
}

export default MobileMenu;