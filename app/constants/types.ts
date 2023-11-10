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
    title: string;
    description: string;
    actionText: string;
    actionUrl: string;
    image: ImageType;
    columnCount: number;
    reverseOrder: boolean;
    slides: CarouselSlideType[];
    backgroundColor: string;
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
  goalSection: PageSectionType;
  sections: PageSectionType[];
};

export type BioPageSectionType = {
  fields: {
   title: string;
   professionalHistory: string;
  }
 };
 
export type PhysicianBioType = {
  fields: {
    physicianName: string;
    specialties: string;
    physicianPortrait: ImageType;
    overview: string;
    asset: ImageType;
    appointmentNumber: string;
    physicianNumber: string;
    bioPageSection: BioPageSectionType[];
    slug: string;
  };
 };
