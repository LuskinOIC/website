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
  //TYPE needs change w/ specialty
  longText: Document;
  specialty: SpecialtyType[];
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

export type EventType = {
  eventName: string;
  slug: string;
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
    longText: Document;
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
  tabSection: TabSectionType;
};

export type TabSectionType = {
  fields: {
    tabs: TabType[];
  };
};

export type TabType = {
  fields: {
    richTextContent?: Document;
    cardContent?: TabCardType[];
    tabTitle: string;
  };
};

export type TabCardType = {
  header: string;
  body: string;
  buttonText: string;
  buttonLink: string;
};

export type PageSectionType = {
  fields: {
    longText: Document;
    actionText: string;
    actionUrl: string;
    backgroundColor: string;
    bold: boolean;
    columnCount: number;
    description: string;
    image: ImageType;
    reverseOrder: boolean;
    secondaryActionText: string;
    secondaryActionUrl: string;
    title: string;
    titleSize: string;
    type: string;
    infoCards: CardType[];
    //TO DO: SPECIFY TYPE
    urgentCareCard: any;
  };
};

export type PhysicianBioType = {
  physicianName: string;
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
  slug: string;
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
  type?: string;
  urgentCareCard?: any;
  specialty?: any;
  id?: string;
};
export type SpecialtyType = {
  type: string;
  description: string;
  id: string;
  image: ImageType;
  longText: Document;
  name: string;
  title: string;
  bold: boolean;
  titleSize: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  //TYPE needs change w/ specialty
  urgentCareCard: any;
  specialty?: any;
};
