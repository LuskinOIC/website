import { ChangeEventHandler } from "react";
import { cn } from "@/lib/utils";
import translations from "@/public/locales/en.json";

export default function SearchBar({
  value,
  onChange,
  onSearch,
  className,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
  className?: string;
}) {
  const outerStyling = cn(
    "flex justify-center my-2 md:my-2 mt-6 md:mt-10",
    className,
  );

  return (
    <div className={outerStyling}>
      <div className="relative w-4/5 md:w-2/3">
        <input
          type="text"
          placeholder="Search..."
          className="pl-4 pr-20 py-2 rounded-l-md border border-r-0 w-full"
          value={value}
          onChange={onChange}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              onSearch();
            }
          }}
        />
        <button
          className="absolute right-0 top-0 px-4 py-2 bg-[#1868F1] text-white rounded-r-md border border-[#1868F1]"
          onClick={onSearch}
        >
          {translations.searchBar.searchButton}
        </button>
      </div>
    </div>
  );
}
