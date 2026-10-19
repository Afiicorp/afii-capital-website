import type { MetadataRoute } from "next";
const routes = ["", "expertise", "project-finance", "equipment-finance", "eca-financing", "equity", "mezzanine", "securitizations", "infrastructure-debt-refinancing", "aviation-business", "sectors", "transactions", "investments", "group", "team", "about-afii", "trust", "vdr", "contact", "offices", "sector-infrastructure-energy", "sector-commodities-industry", "sector-project-specific-finance", "sector-government-business", "project-specific-finance", "government-advisory", "sme-finance", "asset-management", "family-office", "principal-investments"];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://afiicapital.com${route ? `/${route}` : ""}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["expertise", "project-finance", "sectors", "transactions", "contact"].includes(route) ? 0.8 : 0.6
  }));
}
