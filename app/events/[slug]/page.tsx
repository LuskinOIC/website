import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
// Import components
import PageSection from "@/app/components/PageSection/PageSection";
import BlogCardsRow from "@/app/components/BlogCardsRow";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

// EVENT
export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);
  const allEvents = (await getEvents(4)) as unknown as BlogCardsRowType[];

  return (
    <main>
      <div>
        {orgEvent.pageSections &&
          orgEvent.pageSections.map((section: PageSectionType) => (
            <PageSection key={section.fields.title} section={section} />
          ))}
      </div>

      <div id="event-cards" className="grid justify-center">
        <BlogCardsRow type="events" cards={allEvents} />
      </div>
    </main>
  );
}
