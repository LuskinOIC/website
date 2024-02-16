"use client";

import Fuse from "fuse.js";
import { useState } from "react";
// TYPES
import { SpecialtyType } from "../../constants/types";
// LOCAL COMPONENTS
import SpecialtyGridLayout from "./SpecialtyGridLayout";
import SearchBar from "@/app/components/ui/SearchBar";

// interface SortedSpecialties {
//   mdPhysicians: PhysicianBioType[];
//   paNpPhysicians: PhysicianBioType[];
// }

export default function SpecialtySearchArea({
  specialties,
}: {
  specialties: SpecialtyType[];
}) {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(specialties);

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
      {
        name: "name",
        getFn: (specialty: SpecialtyType) => specialty.fields.name,
      },
      {
        name: "physicians",
        getFn: (specialty: SpecialtyType) =>
          specialty.fields.physicians // Read physician fields and join all the names
            ?.map(({ fields }) => fields.name)
            .join(),
      },
      {
        name: "location",
        getFn: (specialty: SpecialtyType) =>
          specialty.fields.location.fields.name +
          specialty.fields.location.fields?.streetAddress,
      },
      // {
      //   name: "description",
      //   getFn: (specialty: SpecialtyType) =>
      //     paragraphsToString(specialty.description),
      // },
    ],
  };
  const fuse = new Fuse(specialties, fuseOptions);

  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={(evt) => {
          setSearchString(evt.target.value);
          // If the searchString becomes "", reset the results
          if (evt.target.value === "") {
            setSearchResults(specialties);
          }
        }}
        onSearch={() => {
          if (searchString === "") {
            setSearchResults(specialties);
          } else {
            setSearchResults([
              ...fuse.search(searchString).map((result) => result.item),
            ]);
          }
        }}
      />
      <SpecialtyGridLayout
        showingSearchResults={
          searchString !== "" && searchResults.length !== specialties.length
        }
        specialties={searchResults}
      />
    </div>
  );
}

// TODO: Add back code.
// function paragraphsToString(parentNode: any): string {
//   let str = "";

//   for (let i = 0; i < parentNode.content.length; i++) {
//     str += parentNode.content[i].content[0].value + " ";
//   }

//   return str;
// }
