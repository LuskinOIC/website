"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";
// LOCAL COMPONENTS
import renderRichTextToReactComponent from "@/app/utils/rich-text";
// TYPES
import { PhysicianBioType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
import SearchBar from "./ui/SearchBar";

export default function SearchAreaPhysicians({
  physicians,
}: {
  physicians: PhysicianBioType[];
}) {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(physicians);

  const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      "name",
      {
        name: "specialties",
        getFn: (phys: PhysicianBioType) =>
          unorderedListToString(phys.specialties.content[0]),
      },
      // TODO: Add this back.
      // {
      //   name: "affiliations",
      //   getFn: (phys: PhysicianBioType) =>
      //     paragraphsToString(phys.affiliations),
      // },
    ],
  };
  const fuse = new Fuse(physicians, fuseOptions);

  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={(evt) => {
          setSearchString(evt.target.value);
        }}
        onSearch={() => {
          if (searchString === "") {
            setSearchResults(physicians);
          } else {
            setSearchResults([
              ...fuse.search(searchString).map((result) => result.item),
            ]);
          }
        }}
      />
      <SearchResults filteredPhysicians={searchResults} />
    </div>
  );
}

function unorderedListToString(listNode: any): string {
  let str = "";

  for (let i = 0; i < listNode.content.length; i++) {
    if (listNode.content[i].content) {
      str += listNode.content[i].content[0].content[0].value + " ";
    }
  }

  return str;
}

// TODO: Add back code.
// function paragraphsToString(parentNode: any): string {
//   let str = "";

//   for (let i = 0; i < parentNode.content.length; i++) {
//     str += parentNode.content[i].content[0].value + " ";
//   }

//   return str;
// }

function SearchResults({
  filteredPhysicians,
}: {
  filteredPhysicians: PhysicianBioType[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-24">
      {filteredPhysicians.map((physician) => (
        <Link key={physician.name} href={`/physicians/${physician.slug}`}>
          <div className="border rounded-lg p-4 shadow-md border-zinc-500 md:border-black md:border-opacity-10 grid md:grid-cols-2 gap-12">
            <div className="">
              <Image
                src={physician.portrait.fields.file.url}
                alt=""
                width={physician.portrait.fields.file.details.image.width}
                height={physician.portrait.fields.file.details.image.height}
              />
            </div>
            <div className="">
              <h2 className="text-lg font-bold">{physician.name}</h2>
              <h5>Specializes in:</h5>
              <div className="md:text-md md:mb-4  md:pl-4 text-base">
                {renderRichTextToReactComponent(
                  physician.specialties as unknown as Document,
                )}
              </div>
              {/* <p>For Patients: {physician.appointmentNumber}</p>
              <p>For Physicians: {physician.physicianNumber}</p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
