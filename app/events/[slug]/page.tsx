import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import {
  EventCardType,
  NestedAssetType,
  MinimalCardType,
} from "@/app/constants/types";
import MinimalCard from "@/app/components/MinimalCard";
import { adaptEventToMinimalCardType } from "../page";

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

const eventMinimalCardStyleProps = {
  image: "p-1 object-cover md:rounded-sm md:mt-4 rounded-xl",
  wrapperDiv:
    "md:mr-2 md:border md:border-black md:border-8 flex flex-reverse md:items-center bg-[#0076AD] md:bg-white md:w-64 w-full rounded-lg mb-5 md:mb-10 md:flex-col ",
  header:
    "tracking-wider md:text-center text-white md:text-black font-normal text-xl md:py-1 py-6 ml-4",
  summary: "",
};

export default async function Event({ params }: { params: { slug: string } }) {
  const allEvents = (await getEvents()) as unknown as EventCardType[];
  const orgEvent = await getEventBySlug(params.slug);

  const eventPhoto = orgEvent.eventPhoto.fields.file;
  const eventDetails = orgEvent?.eventDetailsPhoto;
  const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

  const dateString = orgEvent.eventDate;
  const eventDate: Date = new Date(dateString);
  const formattedDateTime: string = formatDateTime(eventDate);

  const hasPatientAmbassadors: boolean =
    Array.isArray(orgEvent.patientAmbassador) &&
    orgEvent.patientAmbassador.length > 0;
  const hasSponsors: boolean =
    Array.isArray(orgEvent.sponsor) && orgEvent.sponsor.length > 0;
  const hasEventAssets: boolean =
    Array.isArray(orgEvent.sponsor) && orgEvent.sponsor.length > 0;

  return (
    <main>
      <div className="flex" id="main-event">
        <div id="main-event-info">
          <h1>{orgEvent.eventName}</h1>
          {renderRichTextToReactComponent(
            orgEvent.eventSummary as unknown as Document,
          )}
          <p>Event Date: {formattedDateTime}</p>
          <button>Attend Event</button>
          <button>Directions</button>
        </div>
        <div id="main-event-asset">
          <Image
            alt="Main Event Photo"
            src={eventPhoto.url}
            width={eventPhoto.details.image.width}
            height={eventPhoto.details.image.height}
          />
        </div>
      </div>
      <h2>PATIENT AMBASSADORS</h2>
      <div className="md:flex grid grid-cols-1 place-items-center px-10">
        {hasPatientAmbassadors &&
          orgEvent.patientAmbassador.map(
            (patientObject: { fields: MinimalCardType }) => (
              <MinimalCard
                key={patientObject.fields.title}
                cardContent={patientObject.fields}
                styleProps={eventMinimalCardStyleProps}
              />
            ),
          )}
      </div>
      <div id="event-details" className="flex">
        <p>{orgEvent.eventDetails}</p>
        <DynamicImage
          alt="Event Photo"
          src={eventDetails?.fields?.file.url}
          width={eventDetails?.fields?.file.details.image.width}
          height={eventDetails?.fields?.file.details.image.height}
        />
      </div>
      <div id="event-assets" className="flex">
        {hasEventAssets &&
          orgEvent.eventAsset.map((asset: NestedAssetType) => (
            <DynamicImage
              alt="event-assets"
              key={asset.sys.id}
              src={asset.fields.file.url}
              width={asset.fields.file.details.image.width}
              height={asset.fields.file.details.image.height}
            />
          ))}
      </div>
      <div id="sponsor-assets" className="flex">
        {hasSponsors &&
          orgEvent.sponsor.map((asset: NestedAssetType) => (
            <DynamicImage
              alt="sponsors"
              key={asset.sys.id}
              src={asset.fields.file.url}
              width={asset.fields.file.details.image.width}
              height={asset.fields.file.details.image.height}
            />
          ))}
      </div>
      <div id="event-cards">
        {allEvents.map((soleEvent) => (
          <MinimalCard
            key={soleEvent.slug}
            cardContent={adaptEventToMinimalCardType(soleEvent)}
          />
        ))}
      </div>
    </main>
  );
}
