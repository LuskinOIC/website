"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={(evt) => {
          setSearchString(evt.target.value);
          // setSearchResults([...filterPhysicians(evt.target.value, physicians)]);
        }}
        onSearch={() =>
          setSearchResults([...filterPhysicians(searchString, physicians)])
        }
      />
      <SearchResults filteredPhysicians={searchResults} />
    </div>
  );
}

function filterPhysicians(
  searchString: string,
  physicians: PhysicianBioType[],
): PhysicianBioType[] {
  const filteredPhysicians: PhysicianBioType[] = [];

  const searchTerms = searchString.split(/\s/);

  for (let i = 0; i < physicians.length; i++) {
    const p = physicians[i];
    let searchHit = false;

    for (let j = 0; j < searchTerms.length; j++) {
      const s = searchTerms[j].toLowerCase();
      let searchTermHit = false;

      if (s === "") {
        searchTermHit = true;
      } else {
        // Check if there's a hit anywhere
        searchTermHit = searchTermHit || p.name.toLowerCase().includes(s);
        searchTermHit = searchTermHit || searchDocument(s, p.specialties);
        searchTermHit = searchTermHit || searchDocument(s, p.affiliations);
      }

      // Check that the search finds all terms
      searchHit = (j === 0 || searchHit) && searchTermHit;
    }

    if (searchHit) filteredPhysicians.push(p);
  }

  return filteredPhysicians;
}

/*
 * Recurse through the nodes of a document until finding a text node.
 * Then check if text node includes the search string.
 * Returns true if any child node includes the search string.
 */
function searchDocument(searchString: string, node: any): boolean {
  if (node.nodeType === "text")
    return node.value.toLowerCase().includes(searchString);
  else {
    let searchHit = false;
    for (let i = 0; i < node.content.length; i++) {
      searchHit = searchHit || searchDocument(searchString, node.content[i]);
    }
    return searchHit;
  }
}

function SearchResults({
  filteredPhysicians,
}: {
  filteredPhysicians: PhysicianBioType[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-items-center">
      {filteredPhysicians.map((physician) => (
        <Link key={physician.name} href={`/physicians/${physician.slug}`}>
          <div className="border rounded-lg p-4 shadow-md border-zinc-500 md:border-black md:border-opacity-10  flex flex-col md:flex-row items-center gap-5">
            <div className="flex-none w-2/3 md:w-1/3 h-auto">
              <Image
                src={physician.portrait.fields.file.url}
                alt=""
                width={physician.portrait.fields.file.details.image.width}
                height={physician.portrait.fields.file.details.image.height}
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="text-lg font-bold">{physician.name}</h2>
              <h5> Specializes in: </h5>
              <div className="md:text-md md:mb-4  md:pl-4 text-base">
                {renderRichTextToReactComponent(
                  physician.specialties as unknown as Document,
                )}
              </div>
              <p>For Patients: {physician.appointmentNumber}</p>
              <p>For Physicians: {physician.physicianNumber}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
