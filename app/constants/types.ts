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
    bioCards: CardsRowType[];
    cardType: string;
    title: string;
    subTitle: string;
    content: string;
    cardContent?: TextType;
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
  summary?: string;
};

export type CardsRowPropsType = {
  title: string;
  cards: CardsRowType[];
};

export type CardsRowType = {
  fields: {
    name: string;
    portrait: NestedAssetType;
  };
  sys: {
    id: string;
  };
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
  eventPageSections: PageSectionType;
  eventDetails: string;
  eventDetailsPhoto: ImageType;
  eventCards: Array<{ fields: MinimalCardType }>;
  sponsor: NestedAssetType[];
  eventAsset: NestedAssetType[];
  triImage: MultiImageType;
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

export type ImagesLayoutType = {
  fields: {
    type: string;
    images: MultiImageType[];
  };
};

export type MultiImageType = {
  fields: {
    file: FileDetailsType;
    type: string;
    title: string;
    images: Array<{
      sys?: {
        id: string;
      };
      fields: {
        title: string;
        file: FileDetailsType;
      };
    }>;
  };
};

// export type CarouselImageType = {
//   fields: {
//     file: FileDetailsType;
//     type: string;
//     title: string;
//     images: Array<{
//       sys?: {
//         id: string;
//       };
//       fields: {
//         title: string;
//         file: FileDetailsType;
//       };
//     }>;
//   };
// };

export type PageType = {
  metaData: string;
  pageType: string;
  pageSections: PageSectionType;
  slug: string;
};

export type LocationType = {
  fields: {
    name: string;
    hours: Document;
    phoneNumber: string;
    emailAddress: string;
    streetAddress: string;
    cityStateZipcode: string;
    button: ButtonType;
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
  map: any;
  fields: {
    columnLayout: ColumnType;
    type: string;
    title: string;
    dividerText?: string;
    infoCards: CardType[];
    quadCards: CardType[];
    specialty: SpecialtyType[];
    tabs?: TabType[];
    locations?: LocationType[];
    cardsLayout: CardType[];
    imagesLayout: ImagesLayoutType;
  };
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
  sys: any;
  fields: {
    externalLink?: boolean;
    type: string;
    text: string;
    buttonUrl: string;
    logoImage: ImageType;
    columns: ColumnType[];
    variant: string;
  };
};
export type ButtonVariant = "blue" | "yellow" | "text" | "none" | undefined;
export type ColumnType = {
  fields: {
    video?: string;
    socialMedia?: SocialMediaSectionType;
    title: string;
    showTitle?: boolean;
    titleSize: string;
    bold: boolean;
    subHeader: string;
    luskinHeader: boolean;
    image: ImageType;
    description: Document;
    descriptionFontSize: keyof FontSizeMap;
    buttons: any[];
    reverseOrder: boolean;
    backgroundColor: string;
    columnType: string;
  };
};

export type PhysicianBioType = {
  name: string;
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
  portrait: ImageType;
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
  fields: {
    title?: string;
    facebook?: string;
    instagram?: string;
    linkedIn?: string;
    x?: string;
    yelp?: string;
    youTube?: string;
  };
};

export type SocialMediaKey =
  | "facebook"
  | "instagram"
  | "linkedIn"
  | "x"
  | "yelp"
  | "youTube";

export type SpecialtyTypeProps = {
  name: string;
  fields: SpecialtyType;
};

export type SpecialtyType = {
  fields: {
    twoColumn: ColumnType;
    name: string;
    slug: string;
    description: Document;
    topSection: PageSectionType;
    specialistsTitle?: string;
    buttonText?: string;
    buttonUrl?: string;
    location: LocationType;
    physicians: Array<{
      fields: PhysicianBioType;
    }>;
    image: ImageType;
    tabs: TabType[];
    englishFormUrl: string;
    spanishFormUrl: string;
  };
};

export type OptionType = {
  value: string;
  label: string;
  targetID: string;
};

export type MemberType = {
  name: string;
  portrait: ImageType;
  slug: string;
  topSection: ColumnType;
};

export type PatientType = {
  name: string;
  portrait: NestedAssetType;
  slug: string;
  summary: string;
  topSection: ColumnType;
  pageSections: PageSectionType[];
};

export type NewsPostType = {
  fields: {
    slug: string;
    title: string;
    profileImage: string;
    subTitle: Document;
    published: Date;
    writtenBy: string;
    followOurStory: SocialMediaSectionType;
    mainImage: ImageType;
    pageSections: PageSectionType;
  };
};

export type NewsPostCardType = {
  title: string;
  slug: string;
  profileImage: NestedAssetType;
  subTitle: string;
};
