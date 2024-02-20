"use client";

import { useState } from "react";
// LOCAL COMPONENTS
import BlogCardsRow from "../../components/BlogCardsRow";
import Dropdown from "../../components/ui/Dropdown";
import SearchBar from "@/app/components/ui/SearchBar";
// TYPES
import { BlogCardsRowType, OptionType } from "@/app/constants/types";
import { searchNewsPosts } from "@/app/utils/contentful";

export default function BlogSearchArea({
  news,
  events,
  patientStories,
  dropdownOptions,
}: {
  news: BlogCardsRowType[];
  events: BlogCardsRowType[];
  patientStories: BlogCardsRowType[];
  dropdownOptions: OptionType[];
}) {
  const defaultResults = {
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
          if (searchString === "") {
            setSearchResults(defaultResults);
          } else {
            // Search Contentful. Update searchResults once the search completes.
            searchNewsPosts(searchString).then((newsPosts) => {
              setSearchResults({
                news: [...(newsPosts as unknown as BlogCardsRowType[])],
                events: events,
                patientStories: patientStories,
              });
            });
          }
        }}
      />
      <div className="mb-12 md:hidden px-5">
        <p className="px-1 pb-4">Choose a section you would like to review</p>
        <Dropdown placeHolder="News" options={dropdownOptions} />
      </div>
      <BlogCardsRow type="news" cards={searchResults.news} />
      <BlogCardsRow type="events" cards={events} />
      <BlogCardsRow type="patient-stories" cards={patientStories} />
    </div>
  );
}
