"use client";

import { useState } from "react";
// LOCAL COMPONENTS
import BlogCardsRow from "../../components/BlogCardsRow";
import Dropdown from "../../components/ui/Dropdown";
import SearchBar from "@/app/components/ui/SearchBar";
// TYPES
import {
  BlogCardsRowType,
  OptionType,
  PageType,
} from "@/app/constants/types";

export default function BlogSearchArea({
  page,
  news,
  events,
  patientStories,
  dropdownOptions,
}: {
  page: PageType;
  news: BlogCardsRowType[];
  events: BlogCardsRowType[];
  patientStories: BlogCardsRowType[];
  dropdownOptions: OptionType[];
}) {
  const defaultResults = {
    page: page,
    news: news,
    events: events,
    patientStories: patientStories,
  };
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(defaultResults);

  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={(evt) => {
          setSearchString(evt.target.value);
          // If the searchString becomes "", reset the results
          if (evt.target.value === "") {
            setSearchResults(defaultResults);
          }
        }}
        onSearch={() => {
          console.log("onSearch()"); // TODO: Remove.
          if (searchString === "") {
            setSearchResults(defaultResults);
          } else {
            // setSearchResults([
            //   ...fuse.search(searchString).map((result) => result.item),
            // ]);
          }
        }}
      />
      <div className="mb-12 md:hidden px-5">
        <p className="px-1 pb-4">Choose a section you would like to review</p>
        <Dropdown placeHolder="News" options={dropdownOptions} />
      </div>
      <BlogCardsRow type="news" cards={news} />
      <BlogCardsRow type="events" cards={events} />
      <BlogCardsRow type="patient-stories" cards={patientStories} />
    </div>
  );
}
