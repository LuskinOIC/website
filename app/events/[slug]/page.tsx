import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import link from "next/link";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { NestedAssetType, PatientCardType } from "@/app/constants/types";
import PatientAmbassadorCard from "@/app/components/EventCards/PatientAmbassador";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);
  const mainAssetAccess = orgEvent.eventMainAsset.fields.file;
  const moreEventInfoAssetAccess = orgEvent.moreEventInfoAsset.fields.file;
  // console.log("ORG EVENT", orgEvent);
  // console.log("event assets", orgEvent.eventAsset[0]);
  // console.log("TEST:", orgEvent.eventAsset[0].fields.file.details.image.width);

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
  const dateString = orgEvent.eventDate;
  const eventDate: Date = new Date(dateString);
  const formattedDateTime: string = formatDateTime(eventDate);

  return (
    <main>
      <div className="flex" id="main-event">
        <div id="main-event-info">
          <h1>{orgEvent.eventName}</h1>
          <p>
            {renderRichTextToReactComponent(
              orgEvent.eventSummary as unknown as Document
            )}
          </p>
          <p>Event Date: {formattedDateTime}</p>
          <button>Attend Event</button>
          <button>Directions</button>
        </div>
        <div id="main-event-asset">
          <Image
            alt="Main Event Photo"
            src={mainAssetAccess.url}
            width={mainAssetAccess.details.image.width}
            height={mainAssetAccess.details.image.height}
          />
        </div>
      </div>
      <div>
        <h2>{"patient ambassadors".toUpperCase()}</h2>
        <div className="flex">
          {orgEvent.patientAmbassador.map(
            (patientObject: { fields: PatientCardType }) => (
              <PatientAmbassadorCard patient={patientObject.fields} />
            )
          )}
        </div>
      </div>
      <div id="event-details" className="flex">
        <p>{orgEvent.moreEventInfo}</p>
        <Image
          alt="Event Photo"
          src={moreEventInfoAssetAccess.url}
          width={moreEventInfoAssetAccess.details.image.width}
          height={moreEventInfoAssetAccess.details.image.height}
        />
      </div>
      <div id="event-assets" className="flex">
        {orgEvent.eventAsset.map((asset: NestedAssetType) => (
          <Image
            alt="event-assets"
            src={asset.fields.file.url}
            width={asset.fields.file.details.image.width}
            height={asset.fields.file.details.image.height}
          />
        ))}
      </div>
      <div id="sponsor-assets" className="flex">
        {orgEvent.sponsor.map((asset: NestedAssetType) => (
          <Image
            alt="sponsors"
            src={asset.fields.file.url}
            width={asset.fields.file.details.image.width}
            height={asset.fields.file.details.image.height}
          />
        ))}
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
//   eventMainAsset: {
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
//   moreEventInfo: 'From the action-packed shamble format, friendly yet competitive camaraderie, to a succulent buffet, it is a day on the course unlike any other. Become a sponsor today, and know that every time you tee up, you are driving LuskinOIC forward, ensuring that children receive care and heal to keep on moving toward a thriving future.\n' +
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

// ORGEVENT --> PATIENT AMBASSADOR[0]
// {
//   metadata: { tags: [] },
//   sys: {
//     space: { sys: [Object] },
//     id: 'Xoohudkn1Fp8kPgiUQlz4',
//     type: 'Entry',
//     createdAt: '2023-11-29T23:03:00.660Z',
//     updatedAt: '2023-11-29T23:03:00.660Z',
//     environment: { sys: [Object] },
//     revision: 1,
//     contentType: { sys: [Object] },
//     locale: 'en-US'
//   },
//   fields: {
//     patientName: 'Ramses',
//     patientAsset: { metadata: [Object], sys: [Object], fields: [Object] }
//   }
// }

// ORGEVENT --> PATIENT AMBASSADOR[0].patientAsset --> fields
// {
//   patientName: 'Ramses',
//   patientAsset: {
//     metadata: { tags: [] },
//     sys: {
//       space: [Object],
//       id: '1c2dxX8OHrSlrKCiXzj54Y',
//       type: 'Asset',
//       createdAt: '2023-11-29T22:21:02.034Z',
//       updatedAt: '2023-11-29T22:21:02.034Z',
//       environment: [Object],
//       revision: 1,
//       locale: 'en-US'
//     },
//     fields: {
//       title: 'Ramses',
//       description: 'Patient ambassador',
//       file: [Object]
//     }
//   }
// }

// ORGEVENT --> PATIENT AMBASSADOR[0] --> fields --> file
