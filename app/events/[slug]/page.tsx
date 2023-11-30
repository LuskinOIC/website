import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import link from "next/link";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { EventType, PatientCardType } from "@/app/constants/types";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);
  const mainAssetAccess = orgEvent.eventMainAsset.fields.file;
  console.log("ORG EVENT", orgEvent);

  const dateString = orgEvent;
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
          {/* reformat date */}
          <p>Event Date: {orgEvent.eventDate}</p>
          <button>Attend Event</button>
          <button>Directions</button>
        </div>
        <div id="main-event-asset">
          {/* <Image
            alt="Main Event Photo"
            src={mainAssetAccess.url}
            width={mainAssetAccess.details.image.width}
            height={mainAssetAccess.details.image.height}
          /> */}
        </div>
      </div>
      <div>{/* <h2>{"patient ambassadors".toUpperCase()}</h2> */}</div>
    </main>
  );
}

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
