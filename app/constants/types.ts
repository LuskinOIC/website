// NOTE: We will probably want to move these into separate
// files as the app grows.
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
    richTextContent: Document;
    tabTitle: string;
  };
};

export type PageSectionType = {
  fields: {
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

export type TabsContentCardType = {
  header: string;
  body: string;
  buttonText: string;
  buttonLink: string;
};

export type TabsContentTextType = {
  header: string;
  richTextBody: Document;
};

export type TabsContentDataType = {
  cardContent?: TabsContentCardType[];
  textContent?: TabsContentTextType[];
};

export type SocialMediaSectionPropsType = {
  section: SocialMediaSectionType;
};

export type SocialMediaSectionType = {
  title: string;
  subtitle: string;
};

export type SpecialtyType = {
  id: string;
  name: string;
  description: string;
  image: ImageType;
};
