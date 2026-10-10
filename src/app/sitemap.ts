import type { MetadataRoute } from "next";
const routes = ["", "project-finance", "equipment-finance", "eca-financing", "trade-finance", "equity", "aviation-business", "sectors", "transactions", "investments", "group", "team", "about-afii", "trust", "vdr", "contact"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://afiicapital.com/${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : ["project-finance", "sectors", "transactions", "contact"].includes(route) ? 0.8 : 0.6 })); }
