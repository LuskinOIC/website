import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import {
  NestedAssetType,
  MinimalCardType,
  BlogCardsRowType,
} from "@/app/constants/types";
// Import components
import MinimalCard from "@/app/components/MinimalCard";
import Slider from "@/app/components/Slider";
import PageSection from "@/app/components/PageSection/PageSection";
import TriImageLayout from "@/app/components/PageSection/TriImageLayout";
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
  const DynamicImage = dynamic(() => import("next/image"), { ssr: false });
  const dateString = orgEvent.eventDate;
  const eventDate: Date = new Date(dateString);
  const formattedDateTime: string = formatDateTime(eventDate);
  const hasPatientAmbassadors: boolean =
    Array.isArray(orgEvent.patientAmbassador) &&
    orgEvent.patientAmbassador.length > 0;
  const hasSponsors: boolean =
    Array.isArray(orgEvent.sponsor) && orgEvent.sponsor.length > 0;

  const sponsorsArray: object[] = [];
  const sponsors = orgEvent.sponsor;

  sponsors.map((sponsor: NestedAssetType) => {
    sponsorsArray.push({
      src: sponsor.fields.file.url,
      width: sponsor.fields.file.details.image.width,
      height: sponsor.fields.file.details.image.height,
    });
  });

  const imagesPerSlide = 3;
  const groupedImages: any[] = [];
  for (let i = 0; i < sponsorsArray.length; i += imagesPerSlide) {
    const slide = sponsorsArray.slice(i, i + imagesPerSlide);
    groupedImages.push(slide);
  }

  const sliderSlides = groupedImages.map((groupedImage: any, index: number) => (
    <div key={index} className="mb-4 flex justify-center">
      {groupedImage.map((asset: any, assetIndex: number) => (
        <DynamicImage
          key={assetIndex}
          alt={`sponsor-${assetIndex}`}
          src={asset.src}
          width={asset.width}
          height={asset.height}
          className="mx-4 my-4 h-20 w-20 object-contain"
        />
      ))}
    </div>
  ));

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
      <h2 className="mx-6 mb-4 text-lg font-semibold text-[#32B8DE] md:ml-40 md:text-2xl md:font-normal md:text-[#0076AD]">
        PATIENT AMBASSADORS
      </h2>
      <div className="mx-6 grid grid-cols-1 place-items-center md:mx-auto md:flex md:justify-center md:gap-8">
        {hasPatientAmbassadors &&
          orgEvent.patientAmbassador.map(
            (patientObject: { fields: MinimalCardType }) => (
              <div key={patientObject.fields.title}>
                <MinimalCard cardContent={patientObject.fields} />
              </div>
            ),
          )}
      </div>
      <div>
        {orgEvent.eventPageSections && (
          <PageSection section={orgEvent.eventPageSections} />
        )}
      </div>
      {/* TRI-IMAGE LAYOUT */}
      <div id="event-triImage" className="">
        {orgEvent.triImage?.fields?.images && (
          <TriImageLayout section={orgEvent.triImage.fields.images} />
        )}
      </div>
      {/* Sponsors: MOBILE */}
      <div className="md:hidden">
        <p className="ml-36 w-44 text-lg font-semibold">
          {`THANK YOU TO OUR ${dateString.slice(0, 4)} SPONSORS`}
        </p>
        <div
          id="sponsor-assets"
          className="my-6 flex flex-wrap border md:border-0"
        >
          {hasSponsors && <Slider slides={sliderSlides as any} />}
        </div>

        <div className="mx-6 flex flex-col items-center">
          <h3 className="mb-3 ml-14 w-48 text-xl font-normal">
            Interested in becoming a sponsor?
          </h3>
          <button className="mb-8 rounded-md bg-[#0076AD] px-3 py-1 text-sm font-medium text-white">
            SPONSOR EVENT
          </button>
        </div>
      </div>
      {/* Sponsors: DESKTOP */}
      <div className="mt-10 hidden md:block md:flex">
        <div id="sponsor-assets" className="flex px-36 md:flex-wrap">
          {hasSponsors &&
            orgEvent.sponsor.map((asset: NestedAssetType) => (
              <DynamicImage
                alt="sponsors"
                key={asset.sys.id}
                src={asset.fields.file.url}
                width={asset.fields.file.details.image.width}
                height={asset.fields.file.details.image.height}
                className="mx-6 my-6 flex object-contain"
              />
            ))}
        </div>
        <div className="">
          <p className="mb-8 text-4xl">
            {`THANK YOU TO OUR ${dateString.slice(0, 4)} SPONSORS`}
          </p>
          <h3 className="mb-8 text-2xl font-normal">
            Interested in becoming a sponsor?
          </h3>
          <button className="rounded-md bg-[#0076AD] px-6 py-3 text-2xl font-medium text-white">
            SPONSOR EVENT
          </button>
        </div>
      </div>
      <div id="event-cards" className="grid justify-center">
        <BlogCardsRow type="events" cards={allEvents} />
      </div>
    </main>
  );
}
