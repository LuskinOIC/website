// Types
import { PageSectionType } from "@/app/constants/types";

export default function Divider({ section }: { section: PageSectionType }) {
  return (
    <div className="md:grid grid-col md:w-9/12 my-2 md:my-6 mx-auto">
      <hr className="hidden md:block h-[3px] bg-[#99C221]" />
      {section.fields.dividerText && (
        <h1 className="px-2 md:px-0 text-[#0076AD] text-xl">
          {section.fields.dividerText}
        </h1>
      )}
    </div>
  );
}
