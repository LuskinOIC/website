import { createClient } from "contentful";
import {
  LandingPageType,
  SocialMediaSectionType,
  SpecialtyType,
  PageSectionType,
  EventType,
} from "@/app/constants/types";
import { LANDING_PAGE_ID } from "@/app/constants/entries";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getEntryById(id: string) {
  const entry = await client.getEntry(id);
  return entry.fields as PageSectionType;
}

export async function getPage() {
  const entry = await client.getEntry(LANDING_PAGE_ID, {
    include: 2,
    locale: "en-US",
  });
  return entry.fields as LandingPageType;
}

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

export async function getSpecialty(): Promise<SpecialtyType> {
  const entry = await client.getEntry("sMgfuWhT7qUqMKUwRcsD2");
  return entry.fields as SpecialtyType;
}

export async function getSocialMediaSection(): Promise<SocialMediaSectionType> {
  const entry = await client.getEntry("6Mg6c3R91lEllwDWkYSkde");
  return entry.fields as SocialMediaSectionType;
}

export async function get 