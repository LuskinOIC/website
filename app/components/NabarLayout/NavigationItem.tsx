import React from "react";
import Link from "next/link";
import {
  NavigationLinkType,
  NavigationItemType,
  NavigationDropdownType,
} from "@/app/constants/types";
import NavbarDropdown from "@/app/components/NabarLayout/NavbarDropdown";
import { sendGAEvent } from "@next/third-parties/google";

const styles = {
  link: "hidden lg:block text-[#171515] font-bold text-xl hover:underline decoration-[#0076AD] underline-offset-4",
  button: "w-full sm:w-auto text-center gap-2",
};

function NavigationItem({
  item,
  selectedDropdown,
  setSelectedDropdown,
  closeMenuItems,
}: {
  item: NavigationItemType;
  selectedDropdown: string;
  /* eslint-disable no-unused-vars */
  setSelectedDropdown: (id: string) => void;
  closeMenuItems: () => void;
  /* eslint-enable no-unused-vars */
}) {
  const handleClick = (text: string) => {
    sendGAEvent({
      event: "buttonClicked",
      value: text,
    });
  };

  if (item.sys.contentType.sys.id === "navigationLink") {
    const navigationLink = item as NavigationLinkType;
    return (
      <Link
        href={navigationLink.fields.url}
        onClick={() => {
          handleClick(`Nav Menu ${navigationLink.fields.text}`);
          closeMenuItems();
        }}
        className={styles.link}
      >
        {navigationLink.fields.text}
      </Link>
    );
  } else if (item.sys.contentType.sys.id === "navigationDropdown") {
    const navigationDropdown = item as NavigationDropdownType;
    return (
      <NavbarDropdown
        key={navigationDropdown.sys.id}
        id={navigationDropdown.sys.id}
        label={navigationDropdown.fields.text}
        onChange={setSelectedDropdown}
        isFocused={selectedDropdown === navigationDropdown.sys.id}
        subItems={navigationDropdown.fields.navigationLinks}
      />
    );
  } else {
    return null;
  }
}

export default NavigationItem;
