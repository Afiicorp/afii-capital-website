import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import TransactionTable from "@/components/TransactionTable";

type PageContent = { title: string; accent: string; kicker: string; intro: string; image: string; sections: { heading: string; body: string; bullets?: string[] }[]; cta?: string };

const pages: Record<string, PageContent> = {
  "project-finance": {
    title: "Project", accent: "finance.", kicker: "PROJECT & STRUCTURED FINANCE",
    intro: "Financial, legal and business structuring for greenfield and brownfield projects across sectors. AFII's published experience spans more than two decades of project finance advisory.", image: "/images/project-finance-feature.jpg",
    sections: [
      { heading: "A structure built around the project", body: "Project finance begins with the project's commercial fundamentals, capital requirements, risk profile and long-term objectives. AFII works across financial, legal and business structuring considerations to help sponsors assess possible routes to capital.", bullets: ["Greenfield and brownfield project structuring", "Capitalisation-stage and post-commissioning considerations", "Leverage optimisation and cost-of-capital perspectives", "Sovereign, sub-sovereign and market-offtake risk contexts"] },
      { heading: "Infrastructure experience", body: "AFII's published project finance focus includes energy, telecom and transportation, alongside other infrastructure and industrial projects. Each mandate is assessed on its individual merits, including viability, sponsor profile and the project's financing requirements." },
      { heading: "Discuss a project", body: "For an initial discussion about a project, write to the AFII team with a short description of the asset, stage, funding requirement and proposed timeline." }
    ], cta: "Discuss project finance"
  },
  "equipment-finance": {
    title: "Equipment", accent: "finance.", kicker: "CAPITAL GOODS & ASSET FINANCE",
    intro: "Financing approaches for capital equipment across industrial sectors, infrastructure, energy, aviation and marine applications.", image: "/images/equipment-finance-feature.jpg",
    sections: [
      { heading: "Financing capital equipment", body: "AFII describes financing models that can include wet-lease and dry-lease structures, arranged around the asset, transaction size, operating context and the project's commercial requirements.", bullets: ["Renewable energy and power equipment", "Industrial machinery and manufacturing assets", "Aircraft and marine equipment", "Oil and gas, pulp and paper, material handling, steel, mining and telecom assets"] },
      { heading: "Export credit-supported structures", body: "For eligible capital goods imports, export credit support may help align financing with project lifecycle and procurement needs. Eligibility, terms, local-content requirements and risk allocation depend on the specific transaction." },
      { heading: "Start a conversation", body: "Share the equipment type, supplier country, import content, project sponsor and approximate financing requirement to begin a discussion." }
    ], cta: "Discuss equipment finance"
  },
  "eca-financing": {
    title: "Export credit", accent: "financing.", kicker: "EXPORT CREDIT AGENCY (ECA) STRUCTURES",
    intro: "AFII structures and arranges export credit-supported financing facilities for capital goods, including renewables, industrial machinery, aircraft and marine equipment.", image: "/images/eca-financing-feature.webp",
    sections: [
      { heading: "Institutional financing solutions", body: "Export credit-supported structures can be considered for eligible projects importing capital goods. The final structure depends on project viability, sponsor strength, export content, applicable local-content rules and the requirements of participating institutions.", bullets: ["Capital goods imports and associated services", "Potential EUR- or USD-denominated facilities", "Financing tenor aligned with the asset and project lifecycle", "Risk mitigation and institutional underwriting considerations"] },
      { heading: "Project eligibility matters", body: "Each opportunity requires case-specific review. Any indicative pricing or financing terms are subject to market conditions, lender requirements, due diligence and formal approval; no terms are guaranteed by this website." },
      { heading: "Explore eligibility", body: "Contact AFII with an outline of the project, the proposed equipment, exporting country, supplier and project sponsor." }
    ], cta: "Discuss export credit financing"
  },
  "mezzanine": {
    title: "Mezzanine", accent: "finance.", kicker: "SUBORDINATED CAPITAL & GROWTH",
    intro: "Mezzanine financing can support promoter equity in profitable projects and businesses that need additional capital to sustain growth.",
    image: "/images/equity-structuring-feature.jpg",
    sections: [
      { heading: "Capital between senior debt and equity", body: "AFII has described mezzanine financing as a niche activity since 2004, supporting projects and profitable companies that need more equity to support growth. Relevant sectors have included infrastructure, automotive, pharmaceuticals, power and renewables." },
      { heading: "Assessing the right funding mix", body: "Where appropriate, mezzanine capital can provide a second-round financing option. It is generally more expensive than senior debt and less expensive than equity, with suitability depending on cash flow, risk, terms and the company's capital structure." },
      { heading: "Discuss your requirement", body: "AFII can review the business and its financing requirement to help assess possible options. Any review or mandate is subject to further discussion and agreement." }
    ], cta: "Discuss mezzanine finance"
  },
  "securitizations": {
    title: "Securitizations", accent: "and cash flows.", kicker: "STRUCTURED FINANCE",
    intro: "Structuring future cash flows into financing instruments can help eligible infrastructure businesses access capital against defined revenue streams.",
    image: "/images/governance-feature.jpg",
    sections: [
      { heading: "Securitization of future cash flows", body: "In infrastructure, future earnings from assets such as toll roads, bridges and energy plants may be assessed as part of a securitization structure. Depending on the transaction, this can provide access to capital and may help reduce reliance on conventional borrowing." },
      { heading: "Structuring and placement", body: "AFII can advise on structuring, placement and fundraising considerations, taking into account the asset, revenue profile, contractual framework and investor requirements." },
      { heading: "Risk and due diligence", body: "Future revenues can be affected by economic conditions, regulation, demand and operational disruption. Due diligence and risk management are essential; any structure depends on transaction-specific analysis and investor approval." }
    ], cta: "Discuss securitization"
  },
  "infrastructure-debt-refinancing": {
    title: "Infrastructure debt", accent: "refinancing.", kicker: "PROJECT DEBT & CAPITAL COST",
    intro: "AFII advises on refinancing existing project debt with the aim of improving financing efficiency and supporting long-term shareholder value.",
    image: "/images/infrastructure-building.jpg",
    sections: [
      { heading: "Reviewing existing project debt", body: "AFII advises, structures and places instruments with qualified investors to assess whether existing, expensive project debt can be refinanced with more efficient funding and a potential interest or cost-of-capital advantage." },
      { heading: "A project-specific approach", body: "The potential benefit depends on existing loan terms, project performance, market conditions, lender requirements and due diligence. No savings or refinancing outcome is guaranteed." },
      { heading: "Discuss refinancing", body: "Contact AFII with an outline of the project, current financing and refinancing objectives to begin an initial discussion." }
    ], cta: "Discuss infrastructure debt refinancing"
  },
  "equity": {
    title: "Equity &", accent: "structuring.", kicker: "CAPITALISATION & INVESTOR STRUCTURES",
    intro: "Transaction structuring and financial modelling to help projects assess capital availability, investor participation and possible funding pathways.", image: "/images/equity-structuring-feature.jpg",
    sections: [
      { heading: "Capital availability and structure", body: "AFII's published approach builds on transaction structuring and financial modelling, with the aim of assessing the capital requirements of projects and the possible roles of different funding sources.", bullets: ["Capital structure and leverage optimisation", "Investor participation and project-level funding pools", "Infrastructure, transportation and renewables", "Alternative market and listing-structure considerations where appropriate"] },
      { heading: "Project-specific assessment", body: "Equity and financing outcomes depend on the project's fundamentals, governance, valuation, risk allocation and investor requirements. No investment offer or outcome is implied by this overview." }
    ], cta: "Discuss capital structuring"
  },
  "aviation-business": {
    title: "Aviation", accent: "finance.", kicker: "AIRCRAFT & AVIATION ASSETS",
    intro: "Financing perspectives for new and pre-owned aircraft, aviation businesses and related asset opportunities, with a focus that includes the Indian market.", image: "/images/aviation-finance-feature.jpg",
    sections: [
      { heading: "Aircraft and aviation requirements", body: "AFII's aviation business describes financing approaches for aircraft acquisition and a network spanning operators, charter companies, resellers, financiers, airports and aviation consultants.", bullets: ["New and pre-owned aircraft acquisition", "Business aviation and selected operator requirements", "Airport and aviation-related infrastructure", "Aircraft and marine asset investment concepts"] },
      { heading: "Assessing an aviation mandate", body: "Potential structures depend on asset age and type, operator profile, cash flows, collateral, jurisdiction and transaction size." }
    ], cta: "Discuss aviation finance"
  },
  "sectors": {
    title: "Industries &", accent: "sectors.", kicker: "WHERE WE WORK",
    intro: "AFII's published sector coverage spans aviation, infrastructure, energy, railways, roads, ports, commodities and industrial activity.", image: "/images/sectors-feature.jpg",
    sections: [
      { heading: "Aviation", body: "Aircraft acquisition finance, airport project finance or refinancing, and maintenance, repair and overhaul (MRO) project requirements." },
      { heading: "Infrastructure & energy", body: "Energy project finance and refinancing, including renewable, hydro and fossil energy; railway projects and equipment such as station redevelopment, rolling stock and capital expenditure; roads, highways and ports." },
      { heading: "Commodities & industry", body: "Receivables securitisation and financing perspectives for industrial and commercial requirements. AFII's wider published experience includes water, healthcare, industrial assets and financial services." }
    ], cta: "Talk to our team"
  },
  "transactions": {
    title: "Selected", accent: "transactions.", kicker: "TRACK RECORD & EXPERIENCE",
    intro: "AFII's published track record describes advisory and investment-related transactions across infrastructure, energy, aviation, healthcare, water and financial services, including joint ventures, development projects and structured financing.", image: "/images/transactions-feature.jpg",
    sections: [
      { heading: "Examples from published references", body: "The examples below are drawn from AFII's public transaction references. Descriptions and values are reproduced as published and should not be interpreted as a representation of current project status." },
      { heading: "Infrastructure & transport", body: "Published references include railway and metro projects, station redevelopment, road projects and infrastructure joint ventures in India and internationally." },
      { heading: "Energy, water & industry", body: "Published references include solar and wind energy, thermal power, water supply and wastewater projects, industrial expansion, healthcare equipment and asset leasing." },
      { heading: "Confidentiality", body: "Some client and transaction details are confidential or not specified. For further information about AFII's experience relevant to a proposed mandate, contact the team." }
    ], cta: "Discuss a mandate"
  },
  "investments": {
    title: "Long-term", accent: "investments.", kicker: "AFII VENTURES & ESG",
    intro: "AFII Capital Partners advises AFII Ventures, which has described an interest in renewables, ESG-related areas and logistics assets in Europe.", image: "/images/investments-feature.jpg",
    sections: [
      { heading: "Renewables and real assets", body: "Published investment interests include photovoltaic and wind assets, alongside potential diversification into electric-vehicle infrastructure and waste-to-hydrogen opportunities." },
      { heading: "Partnership opportunities", body: "AFII has stated an interest in considering partnerships in project special-purpose vehicles, including at incubation stage or where an existing promoter is considering equity release. Proposals are assessed individually." },
      { heading: "Important information", body: "This page is informational and is not a solicitation, offer or recommendation to invest, nor a promise that any proposal will be selected, funded or managed." }
    ], cta: "Contact the investment team"
  },
  "group": {
    title: "An international", accent: "network.", kicker: "AFII GROUP",
    intro: "AFII Capital Partners works within a network of independent advisory firms and affiliated businesses across Europe, the Middle East and Asia.", image: "/images/group-network-feature.jpg",
    sections: [
      { heading: "Independent firms, connected experience", body: "AFII's published group information identifies firms and partners in Germany, India and other markets. Each member firm is legally separate and independently managed; responsibilities depend on the contracting entity and mandate." },
      { heading: "Group network", body: "Published group references include AFII Corporate Advisors Limited in New Delhi, AFII Capital Partners, AFII Structured Finance UG and K3M in Munich. The wider network includes partner relationships in multiple regions." },
      { heading: "Find the right contact", body: "Contact AFII Capital Partners and the team can help direct your enquiry to the relevant office or specialist." }
    ], cta: "Contact AFII"
  },
  "team": {
    title: "People &", accent: "perspective.", kicker: "LEADERSHIP",
    intro: "AFII's published leadership overview includes senior partners and advisors based across Frankfurt, Munich, New Delhi, Mumbai, Tel Aviv and Helsinki.", image: "/images/team-feature.jpg",
    sections: [
      { heading: "Leadership and advisory experience", body: "The published team overview lists Dr. Mahesh M. Gandhi, Johann Mair, Lt. Gen. (Retired) Rafi Peled, Kirti Gulati, Abhijit Avarsekar, Vinit Vidyarthi and other senior partners and advisors across the AFII network." },
      { heading: "Specialist capabilities", body: "AFII also describes capabilities spanning research, legal, credit, financial modelling, insurance and infrastructure incubation. Team composition for a mandate depends on the subject matter and geography." },
      { heading: "Connect with the team", body: "For specific contact details or to identify the appropriate specialist, write to the central AFII Capital contact address." }
    ], cta: "Contact the team"
  },
  "about-afii": {
    title: "AFII Capital", accent: "Partners.", kicker: "ABOUT AFII",
    intro: "Structured project finance solutions across infrastructure, industrial, financial services and agribusiness sectors.", image: "/images/about-afii-feature.jpg",
    sections: [
      { heading: "Advisory built on experience", body: "Building on the legacy of AFII Corp, which has delivered corporate advisory services for over two decades, AFII Capital Partners brings financial structuring and cross-border execution perspectives to complex mandates." },
      { heading: "Core areas of work", body: "AFII's published offerings include export credit agency-backed project and equipment financing, securitised and off-balance-sheet instruments, government borrowing and public funding solutions, REIT and asset trust structures, and dry-lease and wet-lease financing for marine, industrial and aviation applications." },
      { heading: "Geographic perspective", body: "AFII's public website describes teams and network coverage in Frankfurt, Delhi, the UAE and Luxembourg, with additional partner and affiliate relationships in other markets." }
    ], cta: "Start a conversation"
  },
  "contact": {
    title: "Let's start a", accent: "conversation.", kicker: "CONTACT AFII CAPITAL",
    intro: "For information about a financing or advisory mandate, write to AFII Capital Partners and your enquiry can be directed to the appropriate team.", image: "/images/contact-feature.jpg",
    sections: [
      { heading: "General enquiries", body: "Email: reachus@afiicapital.com. Please include your organisation, country, project or asset type, expected funding requirement and a suitable way to contact you." },
      { heading: "Regional context", body: "AFII's published contact page lists offices and representatives in Germany, India, the UK and the UAE, alongside a wider international partner network. The relevant contracting entity depends on the mandate." },
      { heading: "Confidential information", body: "Please do not send sensitive, confidential or personal documents in an initial email unless the AFII team has agreed a suitable method for sharing them." }
    ], cta: "Email AFII Capital"
  },
  "trust": {
    title: "Trust, transparency", accent: "& governance.", kicker: "RESPONSIBLE STRUCTURING",
    intro: "AFII Group has published principles for public-public cooperation structures, with emphasis on transparent governance, clearly separated roles and accountable project frameworks.", image: "/images/governance-feature.jpg",
    sections: [
      { heading: "Clear roles and responsibilities", body: "AFII describes its role in public-public cooperation as a strategic integrator and institutional investor, not a contractor or controller. The structure of any engagement is specific to the project and agreements in place." },
      { heading: "Governance and oversight", body: "Published principles discuss public-sector governance, transparent and competitive partner selection, auditability, independent statutory audits and appropriate oversight." },
      { heading: "Transparency in practice", body: "Project disclosures and partner details can be constrained by legal obligations, confidentiality and counterpart-government authorisation. Specific commitments are defined by the relevant project documents." }
    ], cta: "Governance enquiries"
  },
  "vdr": {
    title: "Virtual data", accent: "room.", kicker: "CONFIDENTIAL DOCUMENT COORDINATION",
    intro: "AFII's existing website describes a virtual data room for documents related to capital raising, infrastructure appraisals and strategic mandates.", image: "/images/virtual-data-room-feature.jpg",
    sections: [
      { heading: "Access by project reference", body: "Access to confidential project documents should only be arranged through the process and reference code provided directly by AFII. This redesigned information page does not itself accept or store confidential uploads." },
      { heading: "Request access or support", body: "For access requests or technical support, contact deals@afiicapital.com and include the project reference supplied to you, if applicable." }
    ], cta: "Request VDR access"
  },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: "AFII Capital Partners", description: "Structured Finance & Infrastructure Investments." };
  const title = `${page.title} ${page.accent}`.replace(/\s+/g, " ").trim();
  const description = page.intro.slice(0, 158);
  const canonical = `/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: `${title} | AFII Capital Partners`, description, url: `https://afiicapital.com${canonical}`, siteName: "AFII Capital Partners", type: "website", images: [{ url: page.image, width: 1600, height: 900, alt: `${title} — AFII Capital Partners` }] },
    twitter: { card: "summary_large_image", title: `${title} | AFII Capital Partners`, description, images: [page.image] },
  };
}

export default function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<main className="page-shell"><div className="content-wrap"><p>Loading page…</p></div></main>}>
      <ContentPageContent params={params} />
    </Suspense>
  );
}

async function ContentPageContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const isTransactions = slug === "transactions";
  return <main><SiteHeader /><section className="page-hero"><div className="page-hero-image"><Image src={page.image} alt="" fill priority sizes="100vw" /></div><div className="page-hero-shade" /><div className="container page-hero-content"><div className="eyebrow eyebrow-light"><span />{page.kicker}</div><h1>{page.title}<br /><em>{page.accent}</em></h1><p>{page.intro}</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.kicker}</span></div></div></section>
    <section className="content-main section-pad"><div className="container content-layout"><aside className="content-sidebar"><span className="sidebar-label">EXPLORE AFII</span><Link href="/project-finance">Project finance</Link><Link href="/equipment-finance">Equipment finance</Link><Link href="/eca-financing">Export credit financing</Link><Link href="/sectors">Industries &amp; sectors</Link><Link href="/transactions">Transactions</Link><Link href="/investments">Investments</Link><Link href="/contact">Contact</Link></aside><div className="content-article">{slug === "team" && <section className="leadership-directory-grid" aria-label="AFII Capital leadership team">
  {[
    { name: "Dr. Mahesh M. Gandhi", role: "Managing Director & President", location: "Frankfurt", image: "/images/team-mahesh-gandhi.png" },
    { name: "Johann Mair", role: "Senior Partner", location: "Munich · K3M", image: "/images/team-johann-mair.png" },
    { name: "Lt. Gen. (Retired) Rafi Peled", role: "Senior Partner · Israel Business", location: "Tel Aviv", image: "/images/team-rafi-peled.jpg" },
    { name: "Kirti Gulati", role: "Managing Director & Vice President", location: "Frankfurt", image: "/images/team-kirti-gulati.jpg" },
    { name: "Abhijit Avarsekar", role: "Senior Advisor · Infrastructure Business", location: "Mumbai", image: "/images/team-abhijit-avar-sekar.png" },
    { name: "Vinit Vidyarthi", role: "Senior Partner · Insurance & Investment Banking", location: "New Delhi", image: "/images/team-vinit-vidyarthi.jpeg" },
    { name: "Punam Bhasin", role: "Director · AFII Corp (India)", location: "India", image: "/images/team-punam-bhasin.jpg" },
    { name: "Ralph Ketelhut", role: "Senior Partner", location: "Munich · K3M", image: "/images/team-ralph-ketelhut.jpg" },
    { name: "Sidhartha Gandhi", role: "AFII Group", location: "Leadership", image: "/images/team-sidhartha-gandhi.jpg" },
    { name: "R. P. Gupta", role: "Senior Advisor · Railways", location: "India", image: "/images/team-rp-gupta.png" },
    { name: "K. Aakash", role: "Director · AFII Corp", location: "New Delhi", image: "/images/team-kumar-aakash.jpg" },
    { name: "Jonathan Pallares", role: "Business Partner", location: "Helsinki", image: "/images/team-jonathan-pallares.jpg" },
    { name: "Arun Lohiya", role: "Senior Advisor · Aviation Business", location: "Ahmedabad", image: "/images/team-arun-lohiya.jpg" },
    { name: "Nguyen Thi Thanh Nga", role: "Head · Vietnam Business", location: "Vietnam", image: "/images/team-nguyen-thi-thanh-nga.jpg" },
    { name: "Matthias Lohmann", role: "Senior Partner · K3M", location: "Munich", image: "/images/team-matthias-lohmann.png" }
  ].map((person) => <article className="leadership-profile-card" key={person.name}>
    <div className={`leadership-profile-photo${person.image ? "" : " leadership-profile-photo-placeholder"}`}>
      {person.image
        ? <Image src={person.image} alt={person.name} fill sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 28vw" />
        : <div className="leadership-profile-initials" aria-label={`Portrait for ${person.name} not added yet`}>{person.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase()}</div>}
    </div>
    <div className="leadership-profile-info">
      <h2>{person.name}</h2>
      <p className="leadership-profile-role">{person.role}</p>
      <p className="leadership-profile-location">{person.location}</p>
    </div>
  </article>)}
</section>}
{page.sections.map((section, i) => <section className={`content-section${isTransactions ? " content-section-transactions" : ""}`} key={section.heading}>{!isTransactions && <div className="content-section-number">{String(i + 1).padStart(2, "0")}</div>}<div><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{isTransactions && i === 1 && <TransactionTable />}</div></section>)}{slug === "vdr" && <section className="vdr-application-panel" aria-labelledby="vdr-application-title">
  <div className="vdr-panel-heading">
    <span className="vdr-panel-kicker">AFII CAPITAL · CONFIDENTIAL PROCESS</span>
    <h2 id="vdr-application-title">Virtual Data Room Application</h2>
    <p>Use the secure application form below to request access or submit an application relating to a capital raising, infrastructure appraisal or strategic mandate. Please do not send confidential project documents until access instructions have been provided by AFII.</p>
  </div>
  <div className="vdr-form-actions">
    <span>Complete every applicable field in the form.</span>
    <a className="button button-dark" href="https://docs.google.com/forms/d/e/1FAIpQLSdXT3q_G6Zi20YyobFEfmLqXiiBZ_8uczxvsRxoADPyRViL4w/viewform?usp=send_form" target="_blank" rel="noreferrer">Open application form <span>↗</span></a>
  </div>
  <div className="vdr-form-frame">
    <iframe
      title="AFII Capital Virtual Data Room application form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdXT3q_G6Zi20YyobFEfmLqXiiBZ_8uczxvsRxoADPyRViL4w/viewform?embedded=true"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
  <p className="vdr-form-footnote">If the form does not load in your browser, use “Open application form” above. For access support, contact <a href="mailto:deals@afiicapital.com">deals@afiicapital.com</a>.</p>
</section>}
<div className="content-callout"><div className="eyebrow"><span /> NEXT STEP</div><h2>{page.cta ?? "Talk to AFII"}</h2><p>Share a short outline of your project or enquiry and the team can direct it to the appropriate specialist.</p><a className="button button-dark" href={`mailto:${slug === "investments" ? "invest@afii.eu" : slug === "vdr" ? "deals@afiicapital.com" : "reachus@afiicapital.com"}?subject=${encodeURIComponent(page.cta ?? "AFII Capital enquiry")}`}>Contact AFII <span aria-hidden="true">↗</span></a></div></div></div></section><SiteFooter /></main>;
}

