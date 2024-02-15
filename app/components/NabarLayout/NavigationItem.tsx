import React from "react";
import Link from "next/link";
import { NavigationItemType } from "@/app/constants/types";
import Button from "@/app/components/ui/Button";
import NavbarDropdown from "@/app/components/NabarLayout/NavbarDropdown";

function NavigationItem({
  item,
  selectedDropdown,
  setSelectedDropdown,
}: {
  item: NavigationItemType;
  selectedDropdown: string;
  setSelectedDropdown: (id: string) => void;
}): JSX.Element | null {
  if (item.sys.contentType.sys.id === "navigationLink") {
    return (
      <Link
        href={item.fields.url}
        className="block text-white text-xl underline underline-offset-4 hover:text-slate-200"
      >
        {item.fields.text}
      </Link>
    );
  } else if (item.sys.contentType.sys.id === "navigationDropdown") {
    console.log(item);
    return (
      <NavbarDropdown
        key={item.sys.id}
        id={item.sys.id}
        label={item.fields.text}
        onChange={setSelectedDropdown}
        isFocused={selectedDropdown === item.sys.id}
        subItems={item.fields.navigationLinks}
      />
    );
  } else if (item.sys.contentType.sys.id === "button") {
    return (
      <Button
        className="w-full sm:w-auto text-center gap-2"
        key={item.sys.id}
        href={item.fields.buttonUrl}
        isExternal={item.fields.externalLink}
        text={item.fields.text}
        variant={item.fields.type}
      />
    );
  } else {
    return null;
  }
}

export default NavigationItem;
