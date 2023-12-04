import { getPatientCarePage } from "@/app/utils/contentful";
import TabSection from "../components/TabSection";
import { LocationType } from "../constants/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Button from "../components/ui/Button";
import Image from "next/image";
import { Text4 } from "../components/ui/Typography/Text";
import { Title2 } from "../components/ui/Typography/Title";
import renderRichTextToReactComponent from "../utils/rich-text";

/* Here to next comment can be removed once values are in Contentful */
const placeholderCard = {
  header: "Header",
  body: "Considerate and respectful care, and to be made comfortable. You have the right to respect for your cultural, psychosocial, spiritual, and personal values, beliefs and preferences. Have family (or other representative of your choosing) be involved in care, treatment, or services decisions to the extent permitted by you or your surrogate decision maker, in accordance with laws and regulations.   Know the name of the licensed health care practitioner acting within the scope of his or her professional licensure who has primary relationship for coordinating you",
  buttonLink: "/",
  buttonText: "Button",
};

const placeholderCardContent = [
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
];
/* */

export default async function PatientCare() {
  const patientCarePage = await getPatientCarePage();

  console.dir(patientCarePage.locations);

  /* Here to next comment can be removed once values are in Contentful */
  if (patientCarePage.tabSection.fields.tabs.length == 2) {
    patientCarePage.tabSection.fields.tabs.push(
      {
        fields: {
          tabTitle: "Patient Rights & Responsibilities",
          cardContent: placeholderCardContent,
        },
      },
      {
        fields: {
          tabTitle: "Appointment Preparation",
          cardContent: placeholderCardContent,
        },
      },
      {
        fields: {
          tabTitle: "Patient Forms",
          cardContent: placeholderCardContent,
        },
      },
    );
  }
  /* */

  return (
    <main>
      <LocationsCard locations={patientCarePage.locations} />
      <TabSection fields={patientCarePage.tabSection.fields} />
    </main>
  );
}

type LocationsCardType = { locations: LocationType[] };

function LocationsCard({ locations }: LocationsCardType) {
  console.dir(locations);
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <Card className="flex flex-row w-9/12 h-96 my-10 py-10">
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
  let outerClassName = "flex flex-col h-full px-6";
  if (!lastLocation) {
    outerClassName =
      outerClassName + " border-r-[3px] border-luskin-green mr-1";
  }

  return (
    <div className={outerClassName}>
      <Title2 className="md:text-xl font-bold font-arial pt-0">
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
      {location.fields.buttonTitle ? (
        <Button
          text={location.fields.buttonTitle}
          href={location.fields.buttonLink ? location.fields.buttonLink : ""}
          className="uppercase"
        />
      ) : (
        <div />
      )}
    </div>
  );
}
