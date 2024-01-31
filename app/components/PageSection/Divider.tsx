// Types
import { PageSectionType } from "@/app/constants/types";

export default function Divider({ section }: { section: PageSectionType }) {
  return (
    <div
      id={section.fields.dividerText}
      className="md:grid grid-col px-1 md:px-32 my-8 mx-auto"
    >
      <hr className="md:block h-[4px] bg-[#99C221]" />
      {section.fields.dividerText && (
        <h1 className="mx-2 md:mx-0 px-3 md:px-0 text-[#0076AD] text-lg md:text-xl uppercase">
          {section.fields.dividerText}
        </h1>
      )}
    </div>
  );
}
