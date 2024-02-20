import React from "react";
import Link from "next/link";
import {
  ButtonType,
  NavigationLinkType,
  NavigationItemType,
  NavigationDropdownType,
} from "@/app/constants/types";
import Button from "@/app/components/ui/Button";
import NavbarDropdown from "@/app/components/NabarLayout/NavbarDropdown";

function NavigationItem({
  item,
  selectedDropdown,
  setSelectedDropdown,
}: {
  item: NavigationItemType;
  selectedDropdown: string;
  /* eslint-disable no-unused-vars */
  setSelectedDropdown: (id: string) => void;
  /* eslint-enable no-unused-vars */
}) {
  if (item.sys.contentType.sys.id === "navigationLink") {
    const navigationLink = item as NavigationLinkType;
    return (
      <Link
        href={navigationLink.fields.url}
        className="block text-white text-xl hover:text-slate-200 hover:underline hover:underline-offset-4"
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
  } else if (item.sys.contentType.sys.id === "button") {
    const navigationButton = item as ButtonType;
    return (
      <Button
        className="w-full sm:w-auto text-center gap-2"
        key={navigationButton.sys.id}
        href={navigationButton.fields.buttonUrl}
        isExternal={navigationButton.fields.externalLink}
        text={navigationButton.fields.text}
        variant={navigationButton.fields.type}
      />
    );
  } else {
    return null;
  }
}

export default NavigationItem;
