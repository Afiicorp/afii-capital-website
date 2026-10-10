import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

type PageContent = { title: string; accent: string; kicker: string; intro: string; image: string; sections: { heading: string; body: string; bullets?: string[] }[]; cta?: string };

const pages: Record<string, PageContent> = {
  "project-finance": {
    title: "Project", accent: "finance.", kicker: "PROJECT & STRUCTURED FINANCE",
    intro: "Financial, legal and business structuring for greenfield and brownfield projects across sectors. AFII's published experience spans more than two decades of project finance advisory.", image: "/images/stock-exchange.jpg",
    sections: [
      { heading: "A structure built around the project", body: "Project finance begins with the project's commercial fundamentals, capital requirements, risk profile and long-term objectives. AFII works across financial, legal and business structuring considerations to help sponsors assess possible routes to capital.", bullets: ["Greenfield and brownfield project structuring", "Capitalisation-stage and post-commissioning considerations", "Leverage optimisation and cost-of-capital perspectives", "Sovereign, sub-sovereign and market-offtake risk contexts"] },
      { heading: "Infrastructure experience", body: "AFII's published project finance focus includes energy, telecom and transportation, alongside other infrastructure and industrial projects. Each mandate is assessed on its individual merits, including viability, sponsor profile and the project's financing requirements." },
      { heading: "Discuss a project", body: "For an initial discussion about a project, write to the AFII team with a short description of the asset, stage, funding requirement and proposed timeline." }
    ], cta: "Discuss project finance"
  },
  "equipment-finance": {
    title: "Equipment", accent: "finance.", kicker: "CAPITAL GOODS & ASSET FINANCE",
    intro: "Financing approaches for capital equipment across industrial sectors, infrastructure, energy, aviation and marine applications.", image: "/images/equipment-powerlines.jpg",
    sections: [
      { heading: "Financing capital equipment", body: "AFII describes financing models that can include wet-lease and dry-lease structures, arranged around the asset, transaction size, operating context and the project's commercial requirements.", bullets: ["Renewable energy and power equipment", "Industrial machinery and manufacturing assets", "Aircraft and marine equipment", "Oil and gas, pulp and paper, material handling, steel, mining and telecom assets"] },
      { heading: "Export credit-supported structures", body: "For eligible capital goods imports, export credit support may help align financing with project lifecycle and procurement needs. Eligibility, terms, local-content requirements and risk allocation depend on the specific transaction." },
      { heading: "Start a conversation", body: "Share the equipment type, supplier country, import content, project sponsor and approximate financing requirement to begin a discussion." }
    ], cta: "Discuss equipment finance"
  },
  "eca-financing": {
    title: "Export credit", accent: "financing.", kicker: "EXPORT CREDIT AGENCY (ECA) STRUCTURES",
    intro: "AFII structures and arranges export credit-supported financing facilities for capital goods, including renewables, industrial machinery, aircraft and marine equipment.", image: "/images/energy-reactor.jpg",
    sections: [
      { heading: "Institutional financing solutions", body: "Export credit-supported structures can be considered for eligible projects importing capital goods. The final structure depends on project viability, sponsor strength, export content, applicable local-content rules and the requirements of participating institutions.", bullets: ["Capital goods imports and associated services", "Potential EUR- or USD-denominated facilities", "Financing tenor aligned with the asset and project lifecycle", "Risk mitigation and institutional underwriting considerations"] },
      { heading: "Project eligibility matters", body: "Each opportunity requires case-specific review. Any indicative pricing or financing terms are subject to market conditions, lender requirements, due diligence and formal approval; no terms are guaranteed by this website." },
      { heading: "Explore eligibility", body: "Contact AFII with an outline of the project, the proposed equipment, exporting country, supplier and project sponsor." }
    ], cta: "Discuss export credit financing"
  },
  "trade-finance": {
    title: "Trade", accent: "finance.", kicker: "TRADE, RECEIVABLES & WORKING CAPITAL",
    intro: "Structured financing perspectives designed around trade flows, receivables and the commercial requirements of businesses.", image: "/images/hero-finance.jpg",
    sections: [
      { heading: "Structure around commercial flows", body: "Trade and working-capital requirements vary with counterparties, payment cycles, receivables quality and the underlying business model. AFII's work includes structured finance approaches and trade receivables securitisation.", bullets: ["Trade receivables and cash-flow analysis", "Securitisation and off-balance-sheet structures, where appropriate", "Liquidity and capital structure considerations", "Cross-border transaction coordination"] },
      { heading: "A transaction-specific approach", body: "A suitable structure depends on legal enforceability, obligor quality, concentration, currency, jurisdiction and the availability of reliable transaction data." },
      { heading: "Discuss a mandate", body: "For an initial conversation, share the business model, transaction flow, counterparties, receivables profile and the outcome you are seeking." }
    ], cta: "Discuss trade finance"
  },
  "equity": {
    title: "Equity &", accent: "structuring.", kicker: "CAPITALISATION & INVESTOR STRUCTURES",
    intro: "Transaction structuring and financial modelling to help projects assess capital availability, investor participation and possible funding pathways.", image: "/images/hero-finance.jpg",
    sections: [
      { heading: "Capital availability and structure", body: "AFII's published approach builds on transaction structuring and financial modelling, with the aim of assessing the capital requirements of projects and the possible roles of different funding sources.", bullets: ["Capital structure and leverage optimisation", "Investor participation and project-level funding pools", "Infrastructure, transportation and renewables", "Alternative market and listing-structure considerations where appropriate"] },
      { heading: "Project-specific assessment", body: "Equity and financing outcomes depend on the project's fundamentals, governance, valuation, risk allocation and investor requirements. No investment offer or outcome is implied by this overview." }
    ], cta: "Discuss capital structuring"
  },
  "aviation-business": {
    title: "Aviation", accent: "finance.", kicker: "AIRCRAFT & AVIATION ASSETS",
    intro: "Financing perspectives for new and pre-owned aircraft, aviation businesses and related asset opportunities, with a focus that includes the Indian market.", image: "/images/hero-building-alt.jpg",
    sections: [
      { heading: "Aircraft and aviation requirements", body: "AFII's aviation business describes financing approaches for aircraft acquisition and a network spanning operators, charter companies, resellers, financiers, airports and aviation consultants.", bullets: ["New and pre-owned aircraft acquisition", "Business aviation and selected operator requirements", "Airport and aviation-related infrastructure", "Aircraft and marine asset investment concepts"] },
      { heading: "Assessing an aviation mandate", body: "Potential structures depend on asset age and type, operator profile, cash flows, collateral, jurisdiction and transaction size." }
    ], cta: "Discuss aviation finance"
  },
  "sectors": {
    title: "Industries &", accent: "sectors.", kicker: "WHERE WE WORK",
    intro: "AFII's published sector coverage spans aviation, infrastructure, energy, railways, roads, ports, commodities and industrial activity.", image: "/images/energy-reactor.jpg",
    sections: [
      { heading: "Aviation", body: "Aircraft acquisition finance, airport project finance or refinancing, and maintenance, repair and overhaul (MRO) project requirements." },
      { heading: "Infrastructure & energy", body: "Energy project finance and refinancing, including renewable, hydro and fossil energy; railway projects and equipment such as station redevelopment, rolling stock and capital expenditure; roads, highways and ports." },
      { heading: "Commodities & industry", body: "Trade receivables securitisation and financing perspectives for industrial and commercial requirements. AFII's wider published experience includes water, healthcare, industrial assets and financial services." }
    ], cta: "Talk to our team"
  },
  "transactions": {
    title: "Selected", accent: "transactions.", kicker: "TRACK RECORD & EXPERIENCE",
    intro: "AFII's published track record describes advisory and investment-related transactions across infrastructure, energy, aviation, healthcare, water and financial services, including joint ventures, development projects and structured financing.", image: "/images/stock-exchange.jpg",
    sections: [
      { heading: "Examples from published references", body: "The examples below are drawn from AFII's public transaction references. Descriptions and values are reproduced as published and should not be interpreted as a representation of current project status." },
      { heading: "Infrastructure & transport", body: "Published references include railway and metro projects, station redevelopment, road projects and infrastructure joint ventures in India and internationally." },
      { heading: "Energy, water & industry", body: "Published references include solar and wind energy, thermal power, water supply and wastewater projects, industrial expansion, healthcare equipment and asset leasing." },
      { heading: "Confidentiality", body: "Some client and transaction details are confidential or not specified. For further information about AFII's experience relevant to a proposed mandate, contact the team." }
    ], cta: "Discuss a mandate"
  },
  "investments": {
    title: "Long-term", accent: "investments.", kicker: "AFII VENTURES & ESG",
    intro: "AFII Capital Partners advises AFII Ventures, which has described an interest in renewables, ESG-related areas and logistics assets in Europe.", image: "/images/hero-infrastructure.jpg",
    sections: [
      { heading: "Renewables and real assets", body: "Published investment interests include photovoltaic and wind assets, alongside potential diversification into electric-vehicle infrastructure and waste-to-hydrogen opportunities." },
      { heading: "Partnership opportunities", body: "AFII has stated an interest in considering partnerships in project special-purpose vehicles, including at incubation stage or where an existing promoter is considering equity release. Proposals are assessed individually." },
      { heading: "Important information", body: "This page is informational and is not a solicitation, offer or recommendation to invest, nor a promise that any proposal will be selected, funded or managed." }
    ], cta: "Contact the investment team"
  },
  "group": {
    title: "An international", accent: "network.", kicker: "AFII GROUP",
    intro: "AFII Capital Partners works within a network of independent advisory firms and affiliated businesses across Europe, the Middle East and Asia.", image: "/images/hero-building-alt.jpg",
    sections: [
      { heading: "Independent firms, connected experience", body: "AFII's published group information identifies firms and partners in Germany, India and other markets. Each member firm is legally separate and independently managed; responsibilities depend on the contracting entity and mandate." },
      { heading: "Group network", body: "Published group references include AFII Corporate Advisors Limited in New Delhi, AFII Capital Partners, AFII Structured Finance UG and K3M in Munich. The wider network includes partner relationships in multiple regions." },
      { heading: "Find the right contact", body: "Contact AFII Capital Partners and the team can help direct your enquiry to the relevant office or specialist." }
    ], cta: "Contact AFII"
  },
  "team": {
    title: "People &", accent: "perspective.", kicker: "LEADERSHIP",
    intro: "AFII's published leadership overview includes senior partners and advisors based across Frankfurt, Munich, New Delhi, Mumbai, Tel Aviv and Helsinki.", image: "/images/infrastructure-building.jpg",
    sections: [
      { heading: "Leadership and advisory experience", body: "The published team overview lists Dr. Mahesh M. Gandhi, Johann Mair, Lt. Gen. (Retired) Rafi Peled, Kirti Gulati, Abhijit Avarsekar, Vinit Vidyarthi and other senior partners and advisors across the AFII network." },
      { heading: "Specialist capabilities", body: "AFII also describes capabilities spanning research, legal, credit, financial modelling, insurance and infrastructure incubation. Team composition for a mandate depends on the subject matter and geography." },
      { heading: "Connect with the team", body: "For specific contact details or to identify the appropriate specialist, write to the central AFII Capital contact address." }
    ], cta: "Contact the team"
  },
  "about-afii": {
    title: "AFII Capital", accent: "Partners.", kicker: "ABOUT AFII",
    intro: "Structured project and trade finance solutions across infrastructure, industrial, financial services and agribusiness sectors.", image: "/images/hero-building-alt.jpg",
    sections: [
      { heading: "Advisory built on experience", body: "Building on the legacy of AFII Corp, which has delivered corporate advisory services for over two decades, AFII Capital Partners brings financial structuring and cross-border execution perspectives to complex mandates." },
      { heading: "Core areas of work", body: "AFII's published offerings include export credit agency-backed project and equipment financing, securitised and off-balance-sheet instruments, government borrowing and public funding solutions, REIT and asset trust structures, and dry-lease and wet-lease financing for marine, industrial and aviation applications." },
      { heading: "Geographic perspective", body: "AFII's public website describes teams and network coverage in Frankfurt, Delhi, the UAE and Luxembourg, with additional partner and affiliate relationships in other markets." }
    ], cta: "Start a conversation"
  },
  "contact": {
    title: "Let's start a", accent: "conversation.", kicker: "CONTACT AFII CAPITAL",
    intro: "For information about a financing or advisory mandate, write to AFII Capital Partners and your enquiry can be directed to the appropriate team.", image: "/images/hero-building-alt.jpg",
    sections: [
      { heading: "General enquiries", body: "Email: reachus@afiicapital.com. Please include your organisation, country, project or asset type, expected funding requirement and a suitable way to contact you." },
      { heading: "Regional context", body: "AFII's published contact page lists offices and representatives in Germany, India, the UK and the UAE, alongside a wider international partner network. The relevant contracting entity depends on the mandate." },
      { heading: "Confidential information", body: "Please do not send sensitive, confidential or personal documents in an initial email unless the AFII team has agreed a suitable method for sharing them." }
    ], cta: "Email AFII Capital"
  },
  "trust": {
    title: "Trust, transparency", accent: "& governance.", kicker: "RESPONSIBLE STRUCTURING",
    intro: "AFII Group has published principles for public-public cooperation structures, with emphasis on transparent governance, clearly separated roles and accountable project frameworks.", image: "/images/infrastructure-building.jpg",
    sections: [
      { heading: "Clear roles and responsibilities", body: "AFII describes its role in public-public cooperation as a strategic integrator and institutional investor, not a contractor or controller. The structure of any engagement is specific to the project and agreements in place." },
      { heading: "Governance and oversight", body: "Published principles discuss public-sector governance, transparent and competitive partner selection, auditability, independent statutory audits and appropriate oversight." },
      { heading: "Transparency in practice", body: "Project disclosures and partner details can be constrained by legal obligations, confidentiality and counterpart-government authorisation. Specific commitments are defined by the relevant project documents." }
    ], cta: "Governance enquiries"
  },
  "vdr": {
    title: "Virtual data", accent: "room.", kicker: "CONFIDENTIAL DOCUMENT COORDINATION",
    intro: "AFII's existing website describes a virtual data room for documents related to capital raising, infrastructure appraisals and strategic mandates.", image: "/images/hero-finance.jpg",
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

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const isTransactions = slug === "transactions";
  return <main><SiteHeader /><section className="page-hero"><div className="page-hero-image"><Image src={page.image} alt="" fill priority sizes="100vw" /></div><div className="page-hero-shade" /><div className="container page-hero-content"><div className="eyebrow eyebrow-light"><span />{page.kicker}</div><h1>{page.title}<br /><em>{page.accent}</em></h1><p>{page.intro}</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.kicker}</span></div></div></section>
    <section className="content-main section-pad"><div className="container content-layout"><aside className="content-sidebar"><span className="sidebar-label">EXPLORE AFII</span><Link href="/project-finance">Project finance</Link><Link href="/equipment-finance">Equipment finance</Link><Link href="/eca-financing">Export credit financing</Link><Link href="/trade-finance">Trade finance</Link><Link href="/sectors">Industries &amp; sectors</Link><Link href="/transactions">Transactions</Link><Link href="/investments">Investments</Link><Link href="/contact">Contact</Link></aside><div className="content-article">{page.sections.map((section, i) => <section className="content-section" key={section.heading}><div className="content-section-number">{String(i + 1).padStart(2, "0")}</div><div><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{isTransactions && i === 1 && <div className="transaction-table-wrap"><table className="transaction-table"><thead><tr><th>Area</th><th>Published example</th><th>Region</th></tr></thead><tbody><tr><td>Railways &amp; metro</td><td>Station redevelopment and rail infrastructure projects</td><td>India / Europe</td></tr><tr><td>Roads &amp; highways</td><td>Ring road projects and infrastructure joint ventures</td><td>India</td></tr><tr><td>Water</td><td>Water supply, desalination and wastewater treatment</td><td>India / Israel / international</td></tr><tr><td>Renewable energy</td><td>Solar, wind and refinancing-related projects</td><td>Europe / Asia</td></tr><tr><td>Aviation &amp; healthcare</td><td>Aircraft and medical-equipment leasing references</td><td>India / Europe</td></tr></tbody></table><p className="table-note">This is a thematic summary of published references, not an exhaustive transaction list. Some details are confidential or not specified.</p></div>}</div></section>)}<div className="content-callout"><div className="eyebrow"><span /> NEXT STEP</div><h2>{page.cta ?? "Talk to AFII"}</h2><p>Share a short outline of your project or enquiry and the team can direct it to the appropriate specialist.</p><a className="button button-dark" href={`mailto:${slug === "investments" ? "invest@afii.eu" : slug === "vdr" ? "deals@afiicapital.com" : "reachus@afiicapital.com"}?subject=${encodeURIComponent(page.cta ?? "AFII Capital enquiry")}`}>Contact AFII <span>↗</span></a></div></div></div></section><SiteFooter /></main>;
}
