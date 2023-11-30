// NOTE: We will probably want to move these into separate
// files as the app grows.
import { Document } from "@contentful/rich-text-types";

export type AssetType = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: FileDetailsType;
  };
};

export type BioPageSectionType = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    content: {
      content: Array<{ content: Array<{ value: string }> }>;
    };
  };
};

export type ButtonProps = {
  href: string;
  text: string;
  className?: string;
};

export type CardLayoutProps = {
  title: string;
  bold: boolean;
  titleSize: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export type CardType = {
  fields: {
    title: string;
    subTitle: string;
    content: string;
    image: ImageType;
  };
};

export type CarouselType = {
  fields: {
    name: string;
    slides?: CarouselSlideType[];
  };
};

export type CarouselSlideType = {
  fields: {
    title: string;
    image: ImageType;
  };
};

export type PatientCardType = {
  fields: {
    patientName: string;
    patientAsset: Array<{
      nodeType: string;
      data: object;
      content: Array<{
        nodeType: string;
        data: object;
        content: Array<object>;
      }>;
    }>;
  };
};

export type EventCardType = {
  eventTitle: string;
  eventSummary: string;
  eventAsset: ImageType;
};

export type EventType = {
  eventName: string;
  slug: string;
  eventSummary: object;
  // eventSummary: Array<{
  //   nodeType: string;
  //   data: object;
  //   content: Array<{
  //     nodeType: string;
  //     data: object;
  //     content: Array<object>;
  //   }>;
  // }>;
  eventDate: string;
  // eventMainAsset: ImageType;
  eventMainAsset: object;
  patientAmbassador: Array<{
    metadata: object;
    sys: object; 
    fields: PatientCardType[];
  }>;
  moreEventInfo: string;
  eventCards: EventCardType[];
  sponsor: Array<{
    metadata: object;
    sys: object;
    fields: object;
  }>;
  eventAsset: Array<{
    metadata: object;
    sys: object;
    fields: object;
  }>;;
};

export type FileDetailsType = {
  url: string;
  details: {
    size?: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
};

export type ImageType = {
  fields: {
    title: string;
    description: string;
    file: FileDetailsType;
  };
};

export type LandingPageType = {
  metaData: string;
  goalSection: PageSectionType;
  sections: PageSectionType[];
};

export type PatientCarePageType = {
  title: string;
  locations: LocationType[];
  tabSection: TabSectionType;
};

export type LocationType = {
  fields: {
    name: string;
    hours: Document;
    phoneNumber: string;
    streetAddress: string;
    cityStateZipcode: string;
    buttonTitle?: string;
    buttonLink?: string;
  };
};

export type TabSectionType = {
  fields: {
    tabs: TabType[];
  };
};

export type TabType = {
  fields: {
    richTextContent?: Document;
    tabContent?: TabCardType[];
    tabTitle: string;
  };
};

export type TabCardType = {
  fields: {
    header: string;
    body: Document;
    buttonText: string;
    buttonLink: string;
  };
};

export type PageSectionType = {
  fields: {
    specialty: SpecialtyType[];
    longText: Document;
    buttonStyle: "blue" | "yellow" | "text";
    actionText: string;
    actionUrl: string;
    backgroundColor: string;
    bold: boolean;
    columnCount: number;
    description: string;
    descriptionTextSize: boolean;
    descriptionFontSize: string;
    image: ImageType;
    reverseOrder: boolean;
    secondaryActionText: string;
    secondaryActionUrl: string;
    title: string;
    titleSize: string;
    titleStyle: boolean;
    type: string;
    infoCards: CardType[];
    dividerText: string;
  };
};

export type PhysicianBioType = {
  physicianName: string;
  slug: string;
  specialties: Array<{
    nodeType: string;
    data: object;
    content: Array<{
      nodeType: string;
      data: object;
      content: Array<object>;
    }>;
  }>;
  physicianPortrait: ImageType;
  overview: object;
  asset: AssetType;
  appointmentNumber: string;
  physicianNumber: string;
  bioPageSection: BioPageSectionType[];
  affiliations: Document;
  awardsAndRecognition: PageSectionType;
  researchInsights: Document;
  publications: Document;
};

export type SocialMediaSectionPropsType = {
  section: SocialMediaSectionType;
};

export type SocialMediaSectionType = {
  title: string;
  subtitle: string;
};

// TODO: MAJOR TYPE REFACTOR

export type SpecialtyTypeProps = {
  name: string;
  fields: SpecialtyType;
};

export type SpecialtyType = {
  id: string;
  name: string;
  fields: SpecialtyTypeProps;
};

export type OptionType = {
  value: string;
  label: string;
  targetID: string;
};
