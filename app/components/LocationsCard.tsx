import { LocationType } from "../constants/types";
import { Card } from "@/components/ui/card";
import Button from "../components/ui/Button";
import Image from "next/image";
import { Text4 } from "../components/ui/Typography/Text";
import { Title2 } from "../components/ui/Typography/Title";
import renderRichTextToReactComponent from "../utils/rich-text";

type LocationsCardType = { locations: LocationType[] };

export default function LocationsCard({ locations }: LocationsCardType) {
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <Card className="flex flex-col md:flex-row w-4/5 md:w-9/12 mt-10 mb-5 md:my-10 py-7 md:py-10">
        {locations.map((location, index) => (
          <LocationContent
            key={index}
            location={location}
            lastLocation={index == locations.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

type LocationContentType = { location: LocationType; lastLocation: boolean };

function LocationContent({ location, lastLocation }: LocationContentType) {
  let outerClassName = "flex flex-col h-full px-7 md:px-6";
  if (!lastLocation) {
    outerClassName =
      outerClassName +
      " border-b-[1px] md:border-b-0 md:border-r-[3px] border-luskin-green pb-7 mb-7 md:pb-[3.5rem] md:mb-0 md:mr-1";
  }
  return (
    <div className={outerClassName}>
      <Title2 className="md:text-xl leading-[30px] font-bold font-arial pt-0">
        {location.fields.name}
      </Title2>
      <div className="mt-1">
        {renderRichTextToReactComponent(location.fields.hours)}
      </div>
      <div className="flex flex-row my-4">
        <Image
          src="/phone.svg"
          width={26}
          height={26}
          alt="Phone number"
          className="mr-5"
        />
        <Text4>{location.fields.phoneNumber}</Text4>
      </div>
      <div className="flex flex-row mb-5">
        <Image
          src="/map-pin.svg"
          width={26}
          height={26}
          alt="Address"
          className="mr-5"
        />
        <span>
          <Text4>{location.fields.streetAddress}</Text4>
          <Text4>{location.fields.cityStateZipcode}</Text4>
        </span>
      </div>
      {location.fields.button && (
        <Button
          key={location.fields.button.sys.id}
          href={location.fields.button.fields.buttonUrl}
          isExternal={location.fields.button.fields.externalLink}
          text={location.fields.button.fields.text}
          variant="blue"
        />
      )}
    </div>
  );
}
