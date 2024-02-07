"use client";

import { useState } from "react";
import Fuse from "fuse.js";
// TYPES
import { PhysicianBioType } from "@/app/constants/types";
import SearchBar from "@/app/components/ui/SearchBar";
import PhysiciansGridLayout from "@/app/components/PhysicianComponents/PhysiciansGridLayoutSection";

interface SortedPhysicians {
  mdPhysicians: PhysicianBioType[];
  paNpPhysicians: PhysicianBioType[];
}

export default function PhysicianSearchArea({
  physicians,
}: {
  physicians: PhysicianBioType[];
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
    threshold: 0.35,
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
      {searchString === "" ? (
        <AllResults physicians={physicians} />
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

function AllResults({ physicians }: { physicians: PhysicianBioType[] }) {
  const { mdPhysicians, paNpPhysicians } = physicians.reduce<SortedPhysicians>(
    (acc, physician) => {
      const category =
        physician.providerType === "PA/NP" ? "paNpPhysicians" : "mdPhysicians";

      acc[category].push(physician);

      return acc;
    },
    { mdPhysicians: [], paNpPhysicians: [] },
  );
  return (
    <>
      <PhysiciansGridLayout title="OUR PHYSICIANS" physicians={mdPhysicians} />
      <PhysiciansGridLayout
        title="OUR PHYSICIAN'S ASSISTANTS & NURSE PRACTIONERS"
        physicians={paNpPhysicians}
      />
    </>
  );
}
