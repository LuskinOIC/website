"use client";

import { useState } from "react";
import Fuse from "fuse.js";
// TYPES
import {
  PhysicianBioType,
  PhysicianPageSectionType,
} from "@/app/constants/types";
// LOCAL COMPONENTS
import SearchBar from "@/app/components/ui/SearchBar";
import PhysiciansGridLayout from "@/app/providers/PhysicianComponents/PhysiciansGridLayoutSection";
import AllPhysicians from "@/app/providers/PhysicianComponents/AllSortedPhysicians";

export default function PhysicianSearchArea({
  physicians,
  sortedPhysicians,
}: {
  physicians: PhysicianBioType[];
  sortedPhysicians: PhysicianPageSectionType[];
}) {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(physicians);

  /* https://www.fusejs.io/api/options.html */
  const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.32,
    // distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: true,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
      "name",
      {
        name: "specialties",
        getFn: (phys: PhysicianBioType) =>
          phys.specialties &&
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
    <div className="w-full">
      <SearchBar
        value={searchString}
        onChange={(evt) => {
          setSearchString(evt.target.value);
          // If the searchString becomes "", reset the results
          if (evt.target.value === "") {
            setSearchResults(physicians);
          }
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
      {searchString === "" ? (
        <AllPhysicians sortedPhysicians={sortedPhysicians} />
      ) : (
        <SearchResults filteredPhysicians={searchResults} />
      )}
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
    <PhysiciansGridLayout
      title="SEARCH RESULTS"
      physicians={filteredPhysicians}
    />
  );
}
