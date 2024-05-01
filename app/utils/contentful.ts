import { createClient } from "contentful";
import {
  EventType,
  MemberType,
  NavigationBarType,
  BlogPostType,
  PageType,
  PatientType,
  PhysicianBioType,
  SpecialtyType,
} from "@/app/constants/types";

// Create the Contentful clients for production and preview.
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: process.env.CONTENTFUL_PREVIEW_HOST,
});

/* PAGE */

export async function getPageByType(
  pageType: string,
  include: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4,
) {
  const entry = await client.getEntries({
    content_type: "page",
    "fields.pageType": pageType,
    locale: "en-US",
    include: include,
  });

  return entry.items[0].fields as unknown as PageType;
}

/* EVENTS */

export async function getEvents(numberOfEntries: number | "all" = "all") {
  let query = {
    content_type: "event",
    order: "-fields.eventDate",
    locale: "en-US",
    ...(numberOfEntries !== "all" && { limit: numberOfEntries }),
  };

  const entries = await client.getEntries(query);

  return entries.items.map((entry) => entry.fields);
}

export async function getEventBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "event",
    "fields.slug": slug,
    locale: "en-US",
    include: 10,
  });

  return entry.items[0].fields as unknown as EventType;
}

export async function getPageBySlug(slug: string, preview = false) {
  if (preview) {
    return await getPagePreviewBySlug(slug);
  } else {
    return await getProductionPageBySlug(slug);
  }
}

export async function getProductionPageBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    locale: "en-US",
    include: 10,
  });

  if (entry.items.length === 0) {
    return null;
  }

  return entry.items[0].fields as unknown as PageType;
}

export async function getPagePreviewBySlug(slug: string) {
  const entry = await previewClient.getEntries({
    content_type: "page",
    "fields.slug": slug,
    locale: "en-US",
    include: 10,
  });

  if (entry.items.length === 0) {
    return null;
  }

  return entry.items[0].fields as unknown as PageType;
}

/* SPECIALTIES */

export async function getSpecialties(): Promise<SpecialtyType[]> {
  const entries = await client.getEntries({
    content_type: "specialty",
    order: ["fields.order"],
    locale: "en-US",
  });

  return entries.items as unknown as SpecialtyType[];
}

export async function getSpecialty(): Promise<SpecialtyType> {
  const entry = await client.getEntry("sMgfuWhT7qUqMKUwRcsD2");
  return entry.fields as unknown as SpecialtyType;
}

export async function getSpecialtyBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "specialty",
    "fields.slug": slug,
    include: 10, // TODO: Change
    locale: "en-US",
  });

  return entry.items[0] as unknown as SpecialtyType;
}

/* PHYSICIANS */

export async function getPhysicians() {
  const entries = await client.getEntries({
    content_type: "physicianBio",
    order: ["sys.createdAt"],
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields);
}

export async function getPhysicianBioBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "physicianBio",
    "fields.slug": slug,
    locale: "en-US",
    include: 3,
  });

  return entry.items[0].fields as unknown as PhysicianBioType;
}

/* LEADERSHIP MEMBERS */
export async function getMembers(
  memberType: "leadership" | "researcher" = "leadership",
) {
  const entries = await client.getEntries({
    content_type: "memberBio",
    "fields.memberType": memberType,
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields);
}

export async function getMemberBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: "memberBio",
    "fields.slug": slug,
    locale: "en-US",
    include: 2,
  });

  return entries.items[0].fields as unknown as MemberType;
}

/* PATIENT BIOS */
export async function getPatientStories(
  numberOfEntries: number | "all" = "all",
) {
  let query = {
    content_type: "patientBio",
    locale: "en-US",
    ...(numberOfEntries !== "all" && { limit: numberOfEntries }),
  };

  const entries = await client.getEntries(query);

  return entries.items.map((entry) => entry.fields);
}

export async function getPatientStoryBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "patientBio",
    "fields.slug": slug,
    locale: "en-US",
    include: 4,
  });

  return entry.items[0].fields as unknown as PatientType;
}

/* News Posts */

export async function getNewsPosts(numberOfEntries: number | "all" = "all") {
  let query = {
    content_type: "newsPost",
    order: "-fields.date",
    locale: "en-US",
    ...(numberOfEntries !== "all" && { limit: numberOfEntries }),
  };

  const entries = await client.getEntries(query);

  return entries.items.map((entry) => entry.fields);
}

export async function getNewsPostBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "newsPost",
    "fields.slug": slug,
    include: 4,
    locale: "en-US",
  });

  return entry.items[0] as unknown as BlogPostType;
}

export async function getInsightsPosts(
  numberOfEntries: number | "all" = "all",
) {
  let query = {
    content_type: "insightsPost",
    order: "-fields.date",
    locale: "en-US",
    ...(numberOfEntries !== "all" && { limit: numberOfEntries }),
  };

  const entries = await client.getEntries(query);

  return entries.items.map((entry) => entry.fields);
}

export async function getInsightsPostBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "insightsPost",
    "fields.slug": slug,
    include: 4,
    locale: "en-US",
  });

  return entry.items[0] as unknown as BlogPostType;
}

export async function getPages(): Promise<PageType[]> {
  const entries = await client.getEntries({
    content_type: "page",
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields as unknown as PageType);
}

export async function getNavigationBar(): Promise<NavigationBarType> {
  const entry = await client.getEntries({
    content_type: "navigationBar",
    include: 2,
    locale: "en-US",
  });

  return entry.items[0].fields as NavigationBarType;
}

/* CONDITIONS */
export async function getConditionTerms() {
  let query = {
    content_type: "condition",
    limit: 300,
    order: "fields.term",
    locale: "en-US",
    include: 5,
  };

  const entries = await client.getEntries(query);

  return entries.items.map((entry) => entry.fields);
}

export async function getConditionBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "condition",
    "fields.slug": slug,
    include: 4,
    locale: "en-US",
  });

  return entry.items[0] as unknown as any;
}
