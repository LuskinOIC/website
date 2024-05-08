import { LocationType } from "../constants/types";
import { Card } from "@/app/components/ui/Card";
import Button from "../components/ui/Button";
import Image from "next/image";
import { Text } from "../components/ui/Typography/Text";
import { Title2 } from "../components/ui/Typography/Title";
import renderRichTextToReactComponent from "../utils/rich-text";

type LocationsCardType = { locations: LocationType[] };

export default function LocationsCard({ locations }: LocationsCardType) {
  return (
    <Card className="grid md:grid-cols-3 justify-items-center py-6 lg:py-12">
      {locations.map((location, index) => (
        <LocationContent
          key={index}
          location={location}
          lastLocation={index == locations.length - 1}
        />
      ))}
    </Card>
  );
}

type LocationContentType = { location: LocationType; lastLocation: boolean };

function LocationContent({ location, lastLocation }: LocationContentType) {
  let outerClassName =
    "h-full flex flex-col w-full lg:px-6 mb-6 py-6 md:py-0 items-center";
  if (!lastLocation) {
    outerClassName = `${outerClassName} border-b-[1px] md:border-b-0 md:border-r-[3px] border-luskin-green`;
  }
  return (
    <div className={outerClassName}>
      <Title2 className="md:h-[60px] md:leading-0 lg:text-lg font-bold font-arial pt-0 text-center">
        {location.fields.name}
      </Title2>
      <div className="flex flex-col items-center md:items-start md:px-2">
        {location.fields.hours && (
          <div>{renderRichTextToReactComponent(location.fields.hours)}</div>
        )}
        {location.fields.phoneNumber && (
          <div className="flex flex-row my-4">
            <Image
              src="/phone.svg"
              width={26}
              height={26}
              alt="Phone number"
              className="mr-5"
            />
            <Text size="small">{location.fields.phoneNumber}</Text>
          </div>
        )}
        {location.fields.streetAddress && location.fields.cityStateZipcode && (
          <div className="flex flex-row mb-5">
            <Image
              src="/map-pin.svg"
              width={26}
              height={26}
              alt="Address"
              className="mr-5"
            />
            <span>
              <Text size="small">{location.fields.streetAddress}</Text>
              <Text size="small">{location.fields.cityStateZipcode}</Text>
            </span>
          </div>
        )}
        {location.fields.button && (
          <Button
            text={location.fields.button.fields.text}
            href={location.fields.button.fields.buttonUrl}
            className="place-self-center w-2/3 lg:w-10/12 uppercase mb-6 md:text-center lg:mb-0"
            variant={location.fields.button.fields.type}
            isExternal={location.fields.button.fields.externalLink}
          />
        )}
      </div>
    </div>
  );
}
