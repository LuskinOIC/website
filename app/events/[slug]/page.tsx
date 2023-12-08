import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import {
  // EventType,
  NestedAssetType,
  MinimalCardType,
} from "@/app/constants/types";
import MinimalCard from "@/app/components/MinimalCard";

// export async function generateStaticParams() {
//   const events = await getEvents();
//   return events.map((evt) => ({ slug: evt.slug }));
// }

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

export default async function Event({ params }: { params: { slug: string } }) {
  // fetches all event fields from content model
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
      <div className="flex">
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
        {/* {orgEvent.map((eventCard: EventType) => (
          <EventCard key={orgEvent.sys.id} patient={patientObject.fields} />
        ))} */}
      </div>
    </main>
  );
}
// orgEvent.eventAsset.map((asset: NestedAssetType) => {
//   console.log("ASSET", asset.fields.file.url);
// });
// console.log("ORG EVENT MORE ASSETS FIELDS", orgEvent.eventAsset[0]);

// JSON OBJECT (Reference for proper typing and data parsing)
// ORG EVENT {
//   eventName: 'Swing For Kids Golf Classic',
//   slug: 'swing-for-kids-golf-classic',
//   eventSummary: { nodeType: 'document', data: {}, content: [ [Object] ] },
//   eventDate: '2023-10-09T10:30-08:00',
//   eventPhoto: {
//     metadata: { tags: [] },
//     sys: {
//       space: [Object],
//       id: '1RZid99QqiN9gMABY2Xl84',
//       type: 'Asset',
//       createdAt: '2023-11-29T22:38:50.068Z',
//       updatedAt: '2023-11-29T22:39:18.302Z',
//       environment: [Object],
//       revision: 2,
//       locale: 'en-US'
//     },
//     fields: { title: 'Main', description: 'Event main photo', file: [Object] }
//   },
//   patientAmbassador: [
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] }
//   ],
//   eventDetails: 'From the action-packed shamble format, friendly yet competitive camaraderie, to a succulent buffet, it is a day on the course unlike any other. Become a sponsor today, and know that every time you tee up, you are driving LuskinOIC forward, ensuring that children receive care and heal to keep on moving toward a thriving future.\n' +
//     'All contributions raised serve to support LuskinOICare for Kids.',
//   eventCard: [
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] }
//   ],
//   sponsor: [
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] }
//   ],
//   eventAsset: [
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] }
//   ]
// }
