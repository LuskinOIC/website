// Types
import { PageSectionType } from "@/app/constants/types";

export default function Divider({ section }: { section: PageSectionType }) {
  return (
    <div className="md:grid grid-col md:w-[80%] my-2 md:my-6 mx-auto">
      <hr className="hidden md:block h-[4px] bg-[#99C221]" />
      {section.fields.dividerText && (
        <h1 className="mx-2 md:mx-0 px-3 md:px-0 text-[#0076AD] text-xl uppercase">
          {section.fields.dividerText}
        </h1>
      )}
    </div>
  );
}
