import { createClient } from "contentful";
import {
  LandingPageType,
  SocialMediaSectionType,
  SpecialtyType,
  EventType,
  PhysicianBioType,
} from "@/app/constants/types";
import { LANDING_PAGE_ID } from "@/app/constants/entries";

// Create the Contentful Client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

/* LANDING PAGE */

export async function getLandingPage() {
  const entry = await client.getEntry(LANDING_PAGE_ID, {
    include: 2,
    locale: "en-US",
  });

  return entry.fields as LandingPageType;
}

/* EVENTS */

export async function getEvents() {
  const entries = await client.getEntries({
    content_type: "event",
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields);
}

export async function getEventBySlug(slug: string) {
  const entry = await client.getEntries({
    content_type: "event",
    "fields.slug": slug,
    locale: "en-US",
  });

  return entry.items[0].fields as EventType;
}

/* SPECIALTIES */

export async function getSpecialties(): Promise<SpecialtyType[]> {
  const entries = await client.getEntries({
    content_type: "specialty",
    locale: "en-US",
  });

  return entries.items.map((entry) => entry.fields) as SpecialtyType[];
}

export async function getSpecialty(): Promise<SpecialtyType> {
  const entry = await client.getEntry("sMgfuWhT7qUqMKUwRcsD2");
  return entry.fields as SpecialtyType;
}

/* SOCAL MEDIA */

export async function getSocialMediaSection(): Promise<SocialMediaSectionType> {
  const entry = await client.getEntry("6Mg6c3R91lEllwDWkYSkde");
  return entry.fields as SocialMediaSectionType;
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
  });

  return entry.items[0].fields as PhysicianBioType;
}
