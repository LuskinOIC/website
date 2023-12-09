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
  image:
    "rounded-xl object-cover h-28 w-28 p-1.5 md:rounded-sm object-cover md:h-5/6 md:w-11/12 md:mx-auto md:px-4 md:pt-6",
  wrapperDiv:
    "md:rounded-lg md:w-1/5 md:border md:bg-white flex md:flex-col flex-reverse flex mb-3 md:h-full h-28 w-full rounded-lg bg-[#0076AD] md:mb-8",
  header:
    " md:text-center md:text-black md:pt-4 md:pb-6 md:text-2xl my-auto ml-6 text-3xl font-semibold tracking-wider text-white",
  summary: "",
};

// const eventMinimalCardStyleProps = {
//   image:
//     "md:rounded-sm object-cover md:h-5/6 md:w-11/12 md:mx-auto md:px-4 md:pt-6",
//   wrapperDiv: "md:rounded-lg md:w-1/5 md:border md:bg-white flex md:flex-col ",
//   header: "md:text-center md:text-black md:pt-4 md:pb-6 md:text-2xl",
//   summary: "",
// };

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
            orgEvent.eventSummary as unknown as Document
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
      <div className="mx-6 grid grid-cols-1 place-items-center md:mx-auto md:flex md:justify-center md:gap-8">
        {hasPatientAmbassadors &&
          orgEvent.patientAmbassador.map(
            (patientObject: { fields: MinimalCardType }) => (
              <MinimalCard
                key={patientObject.fields.title}
                cardContent={patientObject.fields}
                styleProps={eventMinimalCardStyleProps}
              />
            )
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
