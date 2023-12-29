// Next components
import Image from "next/image";
// Custom components
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { Text2 } from "@/app/components/ui/Typography/Text";
//Icons
import phone from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";
import clock from "@/public/clock.svg";
import { LocationType } from "@/app/constants/types";

type LocationContentProps = {
  locationContent: LocationType;
};

export default function SpecialtyHoursLayout({
  locationContent,
}: LocationContentProps) {
  const { hours, phoneNumber, streetAddress, cityStateZipcode } =
    locationContent.fields;
  const hoursContent = hours && renderRichTextToReactComponent(hours);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex place-items-center gap-5">
        <div className="relative hidden md:block ">
          <Image
            src={clock}
            alt="clock"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col text-base md:text-xl font-arial leading-150">
          {hoursContent}
        </div>
      </div>
      <div className="flex place-items-center gap-5">
        <div className="relative">
          <Image
            src={phone}
            alt="phone"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Text2>{phoneNumber}</Text2>
      </div>
      <div className="flex place-items-center gap-5">
        <div className="relative">
          <Image
            src={mapPin}
            alt="mapPin"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Text2>
          {streetAddress}
          <br />
          {cityStateZipcode}
        </Text2>
      </div>
    </div>
  );
}
