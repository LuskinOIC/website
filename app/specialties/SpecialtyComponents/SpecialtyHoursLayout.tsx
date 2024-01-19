// Next components
import Image from "next/image";
// Custom components
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { Text } from "@/app/components/ui/Typography/Text";
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
      {hoursContent && (
        <div className="flex place-items-center gap-5">
          <div className="relative hidden md:block ">
            <Image
              src={clock}
              alt="clock"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="flex flex-col text-base md:text-lg font-arial">
            {hoursContent}
          </div>
        </div>
      )}
      {phoneNumber && (
        <div className="flex place-items-center gap-5">
          <div className="relative">
            <Image
              src={phone}
              alt="phone"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Text>{phoneNumber}</Text>
        </div>
      )}
      {streetAddress && (
        <div className="flex place-items-center gap-5">
          <div className="relative">
            <Image
              src={mapPin}
              alt="mapPin"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Text>
            {streetAddress}
            <br />
            {cityStateZipcode}
          </Text>
        </div>
      )}
    </div>
  );
}
