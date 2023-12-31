import { createClient } from "contentful";
import {
  EventType,
  MemberType,
  PageType,
  PatientType,
  PhysicianBioType,
  SpecialtyType,
  NewsPostType,
} from "@/app/constants/types";

// Create the Contentful Client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
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

/* SPECIALTIES */

export async function getSpecialties(): Promise<SpecialtyType[]> {
  const entries = await client.getEntries({
    content_type: "specialty",
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
export async function getMembers() {
  const entries = await client.getEntries({
    content_type: "memberBio",
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields);
}

export async function getLeadershipBioBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "memberBio",
    "fields.slug": slug,
    locale: "en-US",
    include: 4,
  });

  return entry.items[0].fields as unknown as MemberType;
}

/* PATIENT BIOS */
export async function getPatientStories() {
  const entries = await client.getEntries({
    content_type: "patientBio",
    locale: "en-US",
  });

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

  return entry.items[0] as unknown as NewsPostType;
}
