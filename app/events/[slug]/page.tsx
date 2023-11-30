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
  const patientAmbassadorCard = orgEvent.patientAmbassador.map((pt: any) => {
    console.log("PATIENT:", pt.fields);
  });
  // console.log("GETTING PATIENT CARDS:", orgEvent.patientAmbassador.);
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
      </div>
    </main>
  );
}
