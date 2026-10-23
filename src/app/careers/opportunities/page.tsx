import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import CareersExplorer from "@/components/careers/CareersExplorer";

export const metadata: Metadata = { title: "Search Opportunities | AFII Group Careers", description: "Explore the AFII group careers interface with company, country, department and experience filters. Demonstration roles only." , robots: { index: false, follow: true }};
export default function OpportunitiesPage() {
  return <main className="afii-careers"><SiteHeader /><div className="ac-page-title"><div className="container"><div className="ac-breadcrumb"><a href="/careers">Careers</a><span>/</span><span>Search opportunities</span></div><div className="ac-page-title-grid"><div><p className="ac-eyebrow ac-eyebrow-on-dark">AFII GROUP · OPPORTUNITIES</p><h1>Find where your<br /><em>next chapter begins.</em></h1></div><p>Explore illustrative roles across companies, functions and geographies. Refine your search to see how AFII group recruitment will work when connected to HRMS.</p></div></div></div><section className="ac-directory-section"><div className="container"><CareersExplorer /></div></section><SiteFooter /></main>;
}
