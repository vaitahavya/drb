import type { MetadataRoute } from "next";

const BASE_URL = "https://www.drbipl.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about/our-value-system",
    "/leadership",
    "/expertise",
    "/expertise/highway-road-construction",
    "/expertise/epc-projects",
    "/expertise/high-altitude-roads",
    "/expertise/irrigation",
    "/expertise/maintenance",
    "/projects",
    "/plant-machinery",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
