import { PageSectionType } from "../constants/types";

export default function EventBanner({ section }: { section: PageSectionType }) {
  const eventBanner = section.fields.eventBanner;
  console.log(eventBanner);

  return <div>HELLO!</div>;
}
