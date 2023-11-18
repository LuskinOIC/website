// NOTE: We will probably want to move these into separate
// files as the app grows.

export type SocialMediaSectionType = {
  title: string;
  subtitle: string;
};

export type SocialMediaSectionPropsType = {
  section: SocialMediaSectionType;
};

export type SpecialtyType = {
  name: string;
  description: string;
};

export type CarouselSlideType = {
  fields: {
    title: string;
    image: ImageType;
  };
};

export type CarouselType = {
  fields: {
    name: string;
    slides?: CarouselSlideType[];
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
  };
};

export type EventType = {
  eventName: string;
  slug: string;
};

export type ImageType = {
  fields: {
    title: string;
    description: string;
    file: FileDetailsType;
  };
};

export type FileDetailsType = {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
};

export type LandingPageType = {
  metaData: string;
  goalSection: PageSectionType;
  sections: PageSectionType[];
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
