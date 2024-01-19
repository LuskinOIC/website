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

// DATE TIME FORMATTING
function formatDateTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

const eventSummaryClassNames: ClassNames = {
  paragraph:
    "text-base mb-4 mr-8 ml-1 md:text-2xl md:font-normal  md:leading-relaxed md:mb-10",
};

const buttonStyling =
  "md:rounded-lg md:no-underline md:bg-[#0076AD] uppercase md:text-white md:my-5 md:w-48 md:py-3 md:text-2xl md:font-semibold md:capitalize md:tracking-wide";

// EVENT
export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);
  const allEvents = (await getEvents(4)) as unknown as BlogCardsRowType[];

  const eventPhoto = orgEvent.eventPhoto.fields.file;
  const dateString = orgEvent.eventDate;
  const eventDate: Date = new Date(dateString);
  const formattedDateTime: string = formatDateTime(eventDate);

  return (
    <main>
      <div
        className="flex flex-col-reverse md:flex-row md:justify-between"
        id="main-event"
      >
        <div className="mx-10 md:ml-36 md:mt-24 md:w-4/12" id="main-event-info">
          <h1 className="my-6 text-2xl font-bold md:mb-8 md:text-4xl md:font-normal">
            {orgEvent.eventName}
          </h1>
          {renderRichTextToReactComponent(
            orgEvent.eventSummary as unknown as Document,
            eventSummaryClassNames,
          )}
          <p className="mb-4 text-lg md:mb-6 md:text-2xl">
            Event Date: {formattedDateTime}
          </p>
          <div className="flex flex-col md:mb-32 md:flex-row">
            <button
              className={`md:mr-6 mb-4 w-44 rounded-lg bg-[#0076AD] py-1 text-lg tracking-wide uppercase text-white ${buttonStyling}`}
            >
              attend event
            </button>
            <button
              className={`text-left md:text-center mb-4 underline ${buttonStyling}`}
            >
              directions
            </button>
          </div>
        </div>
        <div id="main-event-asset">
          <Image
            alt="Main Event Photo"
            src={eventPhoto.url}
            width={eventPhoto.details.image.width}
            height={eventPhoto.details.image.height}
            className="mt-10 object-cover"
          />
        </div>
      </div>

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
