import { ChangeEventHandler } from "react";
import { cn } from "@/lib/utils";

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
  const outerStyling = cn("flex justify-center my-6 md:my-12 mt-6", className);

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
          className="absolute right-0 top-0 px-4 py-2 bg-blue-500 text-white rounded-r-md border border-blue-500"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
