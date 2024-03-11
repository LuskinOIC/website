import { MetadataRoute } from "next";
import sitemapData from "./sitemap.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapData as MetadataRoute.Sitemap;
}
