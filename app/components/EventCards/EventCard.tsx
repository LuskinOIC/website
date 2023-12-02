import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import Link from "next/link";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { EventCardType, EventType } from "@/app/constants/types";
import Event from "@/app/events/page";

// EVENTCARD data model
// import event asset
// import event header
// import event info
// iterate through events in event model, only take main event asset, event title, and event summary...(ask where to get it first)
// { event }: { event: EventCardType }
const eventCardClassNames: ClassNames = {
  paragraph: "text-xs",
};
export default function EventCard({ event }: { event: EventType }) {
  // pass in event, create event card type
  // console.log("EVENT CARD:", event);
  console.log("EVENT SUMMARY:", event.eventSummary);
  const eventCardAsset = event.eventMainAsset;
  // console.log("EVENTCARDASSET:", eventCardAsset);
  const eventAssetSource = eventCardAsset.fields.file.url;
  const eventAssetWidth = eventCardAsset.fields.file.details.image.width;
  const eventAssetHeight = eventCardAsset.fields.file.details.image.height;
  // console.log("EVENT ASSET SOURCE:", eventAssetSource);
  return (
    <div className="w-44">
      <Image
        alt=""
        src={eventAssetSource}
        width={eventAssetWidth}
        height={eventAssetHeight}
        className="rounded"
      />
      <h3>{event.eventName}</h3>
      <p>
        {renderRichTextToReactComponent(
          event.eventSummary as unknown as Document,
          eventCardClassNames
        )}
      </p>
    </div>
  );
}
