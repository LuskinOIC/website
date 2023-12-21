// NOTE: We will probably want to move these into separate
// files as the app grows.
import { Document } from "@contentful/rich-text-types";

export interface AboutPageType {
  pageSections: PageSectionType[];
}

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

export type PatientAssetDetails = {
  size: number;
  image: {
    width: number;
    height: number;
  };
};
export type NestedAssetType = {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      details: PatientAssetDetails;
      fileName: string;
      contentType: string;
    };
  };
};

export type MinimalCardType = {
  sys?: {
    id: string;
  };
  title: string;
  cardPhoto: NestedAssetType;
  summary: string;
};

export type EventCardType = {
  eventName: string;
  slug: string;
  eventPhoto: NestedAssetType;
  eventSummary: string;
};

export type EventType = {
  eventName: string;
  slug: string;
  eventSummary: object;
  eventDate: string;
  eventPhoto: ImageType;
  patientAmbassador: Array<{
    fields: MinimalCardType;
  }>;
  eventDetails: string;
  eventDetailsPhoto: ImageType;
  eventCards: Array<{ fields: MinimalCardType }>;
  sponsor: NestedAssetType[];
  eventAsset: NestedAssetType[];
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

export type PageType = {
  metaData: string;
  pageType: string;
  pageSections: PageSectionType[];
  slug: string;
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

export type TabType = {
  fields: {
    type: string;
    tabTitle: string;
    richTextContent?: Document;
    cardContent?: TextType[];
  };
};

export type FontSizeMap = {
  large: string;
  medium: string;
  small: string;
};

export type PageSectionType = {
  fields: {
    type: string;
    title: string;
    titleSize?: string;
    bold?: boolean;
    titleStyle?: boolean;
    description?: Document;
    descriptionFontSize?: keyof FontSizeMap;
    backgroundColor?: string;
    reverseOrder?: boolean;
    image?: ImageType;
    buttonStyle?: "blue" | "yellow" | "text";
    actionUrl?: string;
    actionText?: string;
    secondaryActionText?: string;
    secondaryActionUrl?: string;
    dividerText?: string;
    infoCards?: CardType[];
    specialty?: SpecialtyType[];
    column?: ColumnType[];
    tabs?: TabType[];
    locations?: LocationType[];
    cardsLayout?: CardType[];
  };
};

export type ColumnType = {
  title: string; // Short text
  titleSize: string; // Short text
  bold: boolean; // Boolean
  subHeader: string; // Short text
  luskinHeader: boolean; // Boolean
  columnImage: any; // Media (type can vary based on implementation)
  content: string; // Long text
  imageColumnSection: ImageType; // Media (type can vary based on implementation)
  button: any[]; // References, many (type can vary based on implementation)
};

export type TextType = {
  fields: {
    title: string;
    content?: Document;
    location?: LocationType;
    button?: ButtonType;
  };
};

export type ButtonType = {
  fields: {
    type: string;
    text: string;
    buttonUrl: string;
    logoImage: ImageType;
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
