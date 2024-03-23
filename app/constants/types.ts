// NOTE: We will probably want to move these into separate
// files as the app grows.
import { Document } from "@contentful/rich-text-types";
export interface About {
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

export type ButtonProps = {
  href: string;
  text: string;
  className?: string;
};

export type SEOMetaTagFields = {
  fields: {
    title: string;
    description: string;
    keywords: string;
    searchResultPreview: string;
  };
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
    bold: boolean | undefined;
    fontSize: string;
    titleSize: string;
    bioCards: CardsRowType[];
    cardType: string;
    title: string;
    subTitle: string;
    content: string;
    richContent?: Document;
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
    image: ImageType;
    overlayTitle?: string;
    overlayAlignment: string;
    overlayButton?: ButtonType;
  };
};

export type GridSectionType = {
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
  cardPhoto: NestedAssetType | ImageType;
  summary?: string;
};

export type BioCardType = {
  name: string;
  portrait: NestedAssetType;
  classNames?: string;
  leadershipRole: string;
};

export type BioCardsRowPropsType = {
  title: string;
  cards: CardsRowType[];
};

export type CardsRowType = {
  fields: {
    topSummary: ColumnType;
    leadershipRole: string;
    name: string;
    portrait: NestedAssetType;
    slug: string;
    topSection?: MemberType | PhysicianBioType | PatientType;
  };
  sys: {
    contentType: any;
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
  pageSections: PageSectionType;
  eventName: string;
  slug: string;
  eventPhoto: ImageType;
};

export type FileDetailsType = {
  sys: any;
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
  sys?: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: FileDetailsType;
  };
};

export type ImagesLayoutType = {
  fields: {
    carouselSlides: CarouselSlideType[];
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

export type PageType = {
  metaData: string;
  pageSections: PageSectionType;
  pageType: string;
  seoDescription: string;
  seoTitle: string;
  slug: string;
  seoMetaTagFields: SEOMetaTagFields;
};

export type LocationType = {
  fields: {
    name: string;
    hours?: Document;
    phoneNumber?: string;
    emailAddress?: string;
    streetAddress?: string;
    cityStateZipcode?: string;
    button?: ButtonType;
  };
};

export type TabType = {
  fields: {
    type: string;
    tabTitle: string;
    richTextContent?: Document;
    cardContent?: TextType[];
    richContent?: Document;
  };
};

export type FontSizeMap = {
  large: string;
  medium: string;
  small: string;
};

export type PageSectionType = {
  filter: any;
  map: any;
  fields: {
    columnLayout: ColumnType;
    type: string;
    title: string;
    dividerText?: string;
    infoCards: CardType[];
    quadCards: CardType[];
    specialty: SpecialtyType[];
    tabs: TabType[];
    locations?: LocationType[];
    cardsLayout: CardType[];
    imagesLayout: ImagesLayoutType;
    eventBanner: EventBannerType;
  };
};

export type TextType = {
  fields: {
    title: string;
    subTitle?: string;
    content?: Document;
    location?: LocationType;
    button?: ButtonType;
    richContent?: Document;
  };
};

export type ButtonType = {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    externalLink?: boolean;
    type: ButtonVariant;
    text: string;
    buttonUrl: string;
    logoImage: ImageType;
  };
};

export type ButtonVariant =
  | "bluePrimary"
  | "yellowPrimary"
  | "blueSecondary"
  | "text"
  | "none"
  | "physicians"
  | undefined;

export type ColumnType = {
  imageOrientation: string | undefined;
  fields: {
    sponsorships: ButtonType[];
    backgroundColor: string;
    bold: boolean;
    buttons: any[];
    columnType: string;
    description: Document;
    descriptionFontSize: keyof FontSizeMap;
    image: ImageType;
    imageOrientation: string;
    luskinHeader: boolean;
    reverseOrder: boolean;
    showTitle?: boolean;
    socialMedia?: SocialMediaSectionType;
    subHeader: string;
    title: string;
    titleSize: string;
    video?: string;
  };
};

export type PhysicianBioType = {
  pageSections: PageSectionType;
  topSummary: ColumnType;
  name: string;
  slug: string;
  specialties: Document;
  portrait: ImageType;
  providerType?: string;
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

export type NavigationLinkType = {
  fields: {
    text: string;
    url: string;
    isExternal: boolean;
  };
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
};

export type NavigationDropdownType = {
  fields: {
    text: string;
    navigationLinks: NavigationLinkType[];
  };
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
};

export type NavigationItemType =
  | NavigationDropdownType
  | NavigationLinkType
  | ButtonType;

export type NavigationBarType = {
  logo: ImageType;
  dropdowns: NavigationDropdownType[];
  navigationItems: NavigationItemType[];
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
    patientPage: {
      fields: PageType;
    };
    seoTitle: string;
    medicalProfessionalPage: {
      fields: PageType;
    };
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
  topSection: ColumnType;
  slug: string;
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
    date: Date;
    writtenBy: string;
    followOurStory: SocialMediaSectionType;
    mainImage: ImageType;
    pageSections: PageSectionType;
  };
};

export type BlogCardsRowType = {
  blogCard: CardType;
  date: string;
  title: string;
  slug: string;
  profileImage: NestedAssetType;
  subTitle: string;
};

export type TriCardContent = {
  title: string;
  titleSize: string;
  bold: boolean;
  richContent: Document;
};

export type EventBannerType = {
  fields: {
    title: string;
    content: Document;
    image: ImageType;
    colorVariant: string;
    buttonLink: string;
  };
};

export type ConditionsType = {
  slug: string;
  term: string;
  definition: string;
  relatedSpecialties: SpecialtyType[];
  learnMore: PageSectionType[];
};

export interface PagePropsType {
  params: { slug: string };
}
