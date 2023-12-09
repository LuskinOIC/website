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

const patientMinimalCardStyleProps = {
  image:
    "rounded-xl h-28 w-28 p-1.5 md:rounded-sm object-cover md:h-5/6 md:w-11/12 md:mx-auto md:px-4 md:pt-6",
  wrapperDiv:
    "md:rounded-lg md:w-1/5 md:border md:bg-white flex md:flex-col flex-reverse flex mb-3 md:h-full h-28 w-full rounded-lg bg-[#0076AD] md:mb-8",
  header:
    " md:text-center md:text-black md:pt-4 md:pb-6 md:text-2xl my-auto ml-6 text-3xl font-semibold tracking-wider text-white",
  summary: "",
};

const eventMinimalCardStyleProps = {
  image: "object-cover w-72 h-56 mt-3 rounded-xl mx-auto",
  wrapperDiv: "mb-5 flex flex-col items-center h-3/5",
  header: "w-64 font-bold text-lg py-4",
  summary: "px-2 mb-4 w-72 overflow-hidden line-clamp-3 leading-tight",
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
    Array.isArray(orgEvent.eventAsset) && orgEvent.sponsor.length > 0;

  console.log("HASEVENTASSETS:", hasEventAssets);
  console.log("ORG EVENT:", orgEvent);
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
                styleProps={patientMinimalCardStyleProps}
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
      <div className="mx-6 flex flex-col items-center">
        <h3 className="mb-3 w-48 text-xl font-normal">
          Interested in becoming a sponsor?
        </h3>
        <button className="rounded-md bg-[#0076AD] px-3 py-1 text-sm font-medium text-white">
          SPONSOR EVENT
        </button>
      </div>
      <div id="sponsor-assets" className="flex flex-wrap">
        {hasSponsors &&
          orgEvent.sponsor.map((asset: NestedAssetType) => (
            <DynamicImage
              alt="sponsors"
              key={asset.sys.id}
              src={asset.fields.file.url}
              width={asset.fields.file.details.image.width}
              height={asset.fields.file.details.image.height}
              className="mx-6 my-6 w-20 object-contain"
            />
          ))}
      </div>
      <div id="event-cards" className="mx-6">
        {allEvents.map((soleEvent) => (
          <MinimalCard
            key={soleEvent.slug}
            cardContent={adaptEventToMinimalCardType(soleEvent)}
            styleProps={eventMinimalCardStyleProps}
          />
        ))}
      </div>
    </main>
  );
}
