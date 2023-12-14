import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
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

const eventSummaryClassNames: ClassNames = {
  paragraph: "text-base mb-4 mr-8 ml-1",
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

  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row" id="main-event">
        <div className="mx-10" id="main-event-info">
          <h1 className="my-6 text-2xl font-bold">{orgEvent.eventName}</h1>
          {renderRichTextToReactComponent(
            orgEvent.eventSummary as unknown as Document,
            eventSummaryClassNames
          )}
          <p>Event Date: {formattedDateTime}</p>
          <div className="flex flex-col">
            <button className="my-5 w-44 rounded-md bg-[#0076AD] py-1 text-lg text-white">
              ATTEND EVENT
            </button>
            <button className="mb-8 text-left underline">DIRECTIONS</button>
          </div>
        </div>
        <div id="main-event-asset">
          <Image
            alt="Main Event Photo"
            src={eventPhoto.url}
            width={eventPhoto.details.image.width}
            height={eventPhoto.details.image.height}
            className="h-64 object-cover"
          />
        </div>
      </div>
      <h2 className="mx-6 mb-4 text-lg font-semibold text-[#32B8DE]">
        PATIENT AMBASSADORS
      </h2>
      <div className="mx-6 grid grid-cols-1 place-items-center md:mx-auto md:flex md:justify-center md:gap-8">
        {hasPatientAmbassadors &&
          orgEvent.patientAmbassador.map(
            (patientObject: { fields: MinimalCardType }) => (
              <MinimalCard
                key={patientObject.fields.title}
                cardContent={patientObject.fields}
              />
            )
          )}
      </div>
      <div id="event-details" className="flex flex-col-reverse">
        <p className="mx-6 mb-6">{orgEvent.eventDetails}</p>
        <DynamicImage
          alt="Event Photo"
          src={eventDetails?.fields?.file.url}
          width={eventDetails?.fields?.file.details.image.width}
          height={eventDetails?.fields?.file.details.image.height}
          className="my-8 h-52 object-cover"
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
              className="mb-8"
            />
          ))}
      </div>
      <p className="ml-36 w-44 text-lg font-semibold">
        {`THANK YOU TO OUR ${dateString.slice(0, 4)} SPONSORS`}
      </p>
      <div id="sponsor-assets" className="my-6 flex flex-wrap border">
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
      <div className="mx-6 flex flex-col items-center">
        <h3 className="mb-3 ml-14 w-48 text-xl font-normal">
          Interested in becoming a sponsor?
        </h3>
        <button className="mb-8 rounded-md bg-[#0076AD] px-3 py-1 text-sm font-medium text-white">
          SPONSOR EVENT
        </button>
      </div>
      <div id="event-cards" className="mx-6">
        <div className="mx-6 flex justify-between">
          <h3 className="text-lg font-semibold text-[#FF7548]">EVENTS</h3>
          <p className="text-sm underline">
            <a className="">SEE ALL</a>
          </p>
        </div>
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
