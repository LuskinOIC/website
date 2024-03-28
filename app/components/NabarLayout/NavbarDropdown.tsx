"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import external_icon_blue from "@/public/external-link-icon-blue.svg";
import NavImageContainer from "@/app/components/NabarLayout/NavImageContainer";

interface NavbarDropDownProps {
  id: string;
  label: string;
  subItems: any[];
  isFocused: boolean;
  // TODO: Figure out why this lint is failing.
  // eslint-disable-next-line no-unused-vars
  onChange: (id: string) => void;
  /* eslint-enable no-unused-vars */
}

const styles = {
  container: "hidden md:block text-[#171515] text-xl font-bold",
  button: (isOpen: boolean) =>
    `text-black hover:underline ${
      isOpen ? "underline" : ""
    } decoration-[#0076AD] underline-offset-4 `,
  dropdownContainer:
    "absolute z-40 w-full left-0 right-0 top-full h-[340px] flex flex-col-2 bg-white py-4 border-b-2 border-[#E0E0E0]",
  linksWrapper: "basis-2/3 h-1/2",
  linksGrid: "hidden md:grid grid-rows-3 grid-flow-col items-start mx-10 pl-10",
  item: "py-2 px-10 flex items-center",
  link: "no-underline hover:underline text-[#0076AD] font-bold text-lg flex items-center",
  linkIcon: "px-0.5 text-blue-500",
};

function NavbarDropDown({
  id,
  label,
  subItems,
  onChange,
  isFocused, // imageContainer,
}: NavbarDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNavigatedFromButton, setHasNavigatedFromButton] = useState(false);
  const [isHoveringOverDropdown, setIsHoveringOverDropdown] = useState(false);
  const [timeoutPid, setTimeoutPid] = useState(null);
  const [imageContainer, setImageContainer] = useState({
    image: subItems[0]?.fields.image || "",
    overlayText: subItems[0]?.fields.text || "",
    overlayLink: subItems[0]?.fields.url || "",
  });

  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
    setIsOpen(false);
  };

  function handleFocus() {
    setIsOpen(true);
    onChange(id);
  }

  useEffect(() => {
    if (!isFocused) {
      setIsOpen(false);
      setHasNavigatedFromButton(false);
      setIsHoveringOverDropdown(false);
    }
  }, [isFocused]);

  useEffect(() => {
    if (hasNavigatedFromButton) {
      const pid = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
      setTimeoutPid(pid as any);
    }
  }, [hasNavigatedFromButton]);

  useEffect(() => {
    if (isHoveringOverDropdown && timeoutPid) {
      clearTimeout(timeoutPid);
    }
  }, [isHoveringOverDropdown, timeoutPid]);

  const handleItemHover = (item: any) => {
    setImageContainer({
      image: item.fields.image,
      overlayText: item.fields.text,
      overlayLink: item.fields.url,
    });
  };

  return (
    <div className={styles.container}>
      <button
        aria-label={label}
        onKeyDown={handleFocus}
        onMouseEnter={handleFocus}
        onClick={handleFocus}
        onMouseLeave={() => setHasNavigatedFromButton(true)}
        className={`${styles.button(isOpen)}`}
      >
        {label}
      </button>
      {isOpen && (
        <>
          <div
            className={styles.dropdownContainer}
            onMouseLeave={() => {
              setIsOpen(false);
              setHasNavigatedFromButton(false);
              setIsHoveringOverDropdown(false);
            }}
            onMouseEnter={() => {
              setIsHoveringOverDropdown(true);
            }}
          >
            <div className={styles.linksWrapper}>
              <div className={styles.linksGrid}>
                {subItems.map((item) => (
                  <div
                    key={item.fields.url}
                    className={styles.item}
                    onMouseEnter={() => handleItemHover(item)}
                  >
                    {item.fields.isExternal ? (
                      <a
                        className={styles.link}
                        href={item.fields.url}
                        aria-label={item.fields.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          handleClick(`Nav dropdown ${item.fields.text}`)
                        }
                      >
                        {item.fields.text}
                        <Image
                          src={external_icon_blue}
                          alt="External Link"
                          width={16}
                          height={16}
                          className={styles.linkIcon}
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.fields.url}
                        onClick={() =>
                          handleClick(`Nav dropdown ${item.fields.text}`)
                        }
                        aria-label={item.fields.text}
                      >
                        <div className={styles.link}>{item.fields.text}</div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <NavImageContainer imageContainer={imageContainer} />
          </div>
        </>
      )}
    </div>
  );
}

export default NavbarDropDown;
