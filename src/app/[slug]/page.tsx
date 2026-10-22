import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import TransactionTable from "@/components/TransactionTable";

type PageContent = { title: string; accent: string; kicker: string; intro: string; image: string; sections: { heading: string; body: string; bullets?: string[] }[]; cta?: string };

const pages: Record<string, PageContent> = {
  "expertise": {
    title: "Our", accent: "expertise.", kicker: "FIVE CONNECTED BUSINESS PLATFORMS",
    intro: "AFII brings together five complementary business platforms spanning capital raising, public-sector infrastructure, SME lending distribution, investment platforms and proprietary opportunities. These activities are connected by transaction discipline, institutional relationships and an emphasis on commercially viable structures. The scope of each engagement is determined by its mandate, applicable regulation and the participating institutions.", image: "/images/hero-architecture.jpg",
    sections: [
      { heading: "Investment Banking & Capital Raising", body: "AFII supports sponsors and businesses in evaluating financing strategies for infrastructure, industrial and corporate transactions. Work can span early financial assessment, capital structure design, financial modelling and preparation of lender and investor materials. The aim is to align project economics with realistic sources of debt, equity and structured capital.", bullets: ["Project finance and corporate balance-sheet funding", "Debt and equity raising, mezzanine and private credit", "Structured finance, securitisation and financial engineering", "Export credit, aviation and trade-related structures", "Financial close and negotiation support"] },
      { heading: "Government Advisory & Infrastructure Development", body: "Infrastructure projects require more than capital: they need an executable concept, the right institutions, a credible delivery structure and transparent allocation of responsibilities. AFII approaches public-sector mandates through feasibility coordination, partner identification, procurement context and development planning, while maintaining a clear separation between advisory and implementation roles.", bullets: ["Government advisory, PPP and concession strategy", "Project origination and concept development", "Public-public cooperation and institutional partnerships", "Bid and consortium advisory", "Roads, railways, airports, ports, water and power"] },
      { heading: "SME Finance & Banking Distribution", body: "The SME platform is designed around relationships with banks, NBFCs, fintech lenders and distribution partners. Its proposed operating model brings together borrower origination, eligibility screening, documentation support and lender matching. Actual financing remains the decision of the relevant lending institution.", bullets: ["Working capital and term loans", "Equipment and supply-chain finance", "Channel-partner acquisition and lender relationships", "Credit packaging, CMA and application support", "Loan pipeline and disbursement tracking"] },
      { heading: "Asset Management & Investment Platforms", body: "AFII evaluates investment platforms that can combine institutional capital, sector-specific operators and long-term asset ownership. Potential themes include infrastructure, renewable energy, warehousing and transition assets. Platform creation and any fund or asset-management mandate depend on governance, investment approvals and applicable licensing.", bullets: ["Infrastructure and private-credit platform concepts", "Asset acquisition, aggregation and refinancing", "Renewables, energy transition and warehousing", "Institutional investor engagement", "Fund documentation and governance design"] },
      { heading: "Principal Investments", body: "Proprietary capital may be considered selectively where a project or platform has a compelling commercial rationale and a defined governance framework. Potential co-investments and incubation stakes are evaluated for valuation, risk, liquidity, exit options and strategic relevance. No opportunity is an investment commitment until formally approved.", bullets: ["Proprietary and co-investment screening", "Project and platform incubation stakes", "Investment memoranda and approvals", "Portfolio performance and risk monitoring", "Coordination with financing and platform teams"] },
    ], cta: "Discuss our expertise"
  },
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
      { heading: "Commodities & industry", body: "Receivables securitisation and financing perspectives for industrial and commercial requirements. AFII's wider published experience includes water, healthcare, industrial assets and financial services." },
      { heading: "Project-specific finance", body: "Financing perspectives tailored to project stage, cash flows, procurement, risk allocation and long-term commercial objectives." },
      { heading: "Government & business", body: "Advisory perspectives for institutional cooperation, government-linked infrastructure and accountable project frameworks." }
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
      { heading: "General enquiries", body: "Email: reachus@afii.eu. Please include your organisation, country, project or asset type, expected funding requirement and a suitable way to contact you." },
      { heading: "Regional context", body: "AFII's published contact page lists offices and representatives in Germany, India, the UK and the UAE, alongside a wider international partner network. The relevant contracting entity depends on the mandate." },
      { heading: "Confidential information", body: "Please do not send sensitive, confidential or personal documents in an initial email unless the AFII team has agreed a suitable method for sharing them." }
    ], cta: "Email AFII Capital"
  },
  "sector-infrastructure-energy": {
    title: "Infrastructure", accent: "& energy.", kicker: "SECTOR FOCUS · INFRASTRUCTURE & ENERGY",
    intro: "Project finance and refinancing perspectives for energy, railways, roads, ports and essential infrastructure assets.", image: "/images/infrastructure-building.jpg",
    sections: [{ heading: "Infrastructure and energy assets", body: "AFII's advisory experience spans renewable, hydro and conventional energy, railway projects and equipment, station redevelopment, rolling stock, roads, highways and ports." }, { heading: "Financing perspective", body: "The appropriate financing structure depends on project stage, cash flows, procurement, counterparties, jurisdiction and lender requirements." }], cta: "Discuss infrastructure & energy"
  },
  "sector-commodities-industry": {
    title: "Commodities", accent: "& industry.", kicker: "SECTOR FOCUS · COMMODITIES & INDUSTRY",
    intro: "Financing perspectives for industrial assets, capital goods, manufacturing and commercial receivables.", image: "/images/equipment-finance-feature.jpg",
    sections: [{ heading: "Industrial and commercial requirements", body: "AFII's published experience includes industrial assets, capital goods, manufacturing projects and receivables-based structures. Each mandate requires assessment of the operating model, counterparties and asset or cash-flow profile." }, { heading: "Capital goods finance", body: "Equipment finance and export credit-supported structures may be relevant where eligible equipment is imported for industrial or infrastructure use." }], cta: "Discuss industry & commodities"
  },
  "sector-project-specific-finance": {
    title: "Project-specific", accent: "finance.", kicker: "SECTOR FOCUS · PROJECT-SPECIFIC FINANCE",
    intro: "Financing and advisory structures tailored to a project's stage, risk allocation, procurement and long-term commercial objectives.", image: "/images/project-finance-feature.jpg",
    sections: [{ heading: "Start with the project", body: "Project-specific financing may bring together project finance, equipment finance, export credit, refinancing or capital structuring, depending on the requirements and eligibility of the mandate." }, { heading: "A tailored approach", body: "AFII reviews project fundamentals, sponsor capability, cash flows, counterparties and jurisdiction before considering a potential financing pathway." }], cta: "Discuss project-specific finance"
  },
  "sector-government-business": {
    title: "Government", accent: "& business.", kicker: "SECTOR FOCUS · GOVERNMENT & BUSINESS",
    intro: "Advisory perspectives for public-sector cooperation, government-linked infrastructure and institutional business initiatives.", image: "/images/governance-feature.jpg",
    sections: [{ heading: "Government and institutional advisory", body: "AFII's published principles emphasise transparent governance, clearly defined responsibilities and accountable project frameworks for public-public cooperation and infrastructure development." }, { heading: "Business and delivery context", body: "Potential approaches depend on the relevant public institutions, procurement framework, legal environment, project scope and agreed roles of participating parties." }], cta: "Discuss government & business advisory"
  },
  "government-advisory": {
    title: "Government", accent: "advisory.", kicker: "GOVERNMENT ADVISORY & INFRASTRUCTURE DEVELOPMENT",
    intro: "AFII works at the intersection of public institutions, infrastructure sponsors and strategic delivery partners. Its government advisory proposition covers project origination, institutional cooperation and the structuring of credible implementation pathways. Where a dedicated Indian SPV is contemplated, its activities remain prospective until that vehicle is established.", image: "/images/governance-feature.jpg",
    sections: [
      { heading: "From policy objective to investable project", body: "Public-sector initiatives often begin with a development objective rather than a financing-ready transaction. AFII can assist with project concept development, feasibility coordination, stakeholder mapping and a practical roadmap that identifies the approvals, commercial agreements and delivery capabilities required.", bullets: ["Government advisory, PPP and concession strategy", "Infrastructure origination and project incubation", "Government-to-government and public-private cooperation"] },
      { heading: "Consortiums, technology and implementation", body: "The advisory process can include identifying technical partners, EPC and OEM relationships, suppliers and technology providers. Procurement, bid strategy and consortium formation must reflect the applicable government rules and project-specific requirements.", bullets: ["Bid advisory and consortium formation", "EPC, OEM and strategic-supplier relationships", "Commercial structuring and implementation roadmaps"] },
      { heading: "Infrastructure sector breadth", body: "Relevant sectors include roads, railways, airports, ports, water, power, urban development, mining, industrial infrastructure and green infrastructure. Each opportunity requires its own assessment of feasibility, risk allocation, procurement and delivery responsibilities.", bullets: ["Sector and technical partner coordination", "Feasibility and project implementation planning", "Capital raising handover to Investment Banking"] },
    ], cta: "Discuss government advisory"
  },
  "sme-finance": {
    title: "SME finance", accent: "& banking distribution.", kicker: "SME FINANCE & BANKING DISTRIBUTION",
    intro: "AFII envisages a partner-led SME finance and banking distribution business connecting enterprises with eligible institutional lending products. The focus is on disciplined origination, complete documentation and efficient coordination with lenders rather than promising approvals or presenting AFII as a licensed lender.", image: "/images/equipment-finance-feature.jpg",
    sections: [
      { heading: "Banking and distribution relationships", body: "The platform seeks to develop relationships with public-sector banks, private banks, small finance banks, NBFCs, fintech lenders and private-credit providers. A national acquisition and channel-partner network can help identify appropriate financing opportunities while maintaining consistent customer onboarding standards.", bullets: ["PSU and private-bank partnerships", "NBFC and fintech-lender relationships", "SME acquisition and channel network"] },
      { heading: "From borrower enquiry to lender decision", body: "Working capital, term loans, equipment finance, supply-chain facilities and government-scheme-linked opportunities have different eligibility and documentation requirements. The process therefore includes initial screening, credit packaging, CMA preparation where relevant, lender matching and application coordination.", bullets: ["Borrower onboarding and credit documentation", "CMA and loan application support", "Lender-wise eligibility and product matrix"] },
      { heading: "Operating discipline and future roadmap", body: "A scalable distribution business requires transparent application tracking, lender turnaround expectations and records of sanctions, disbursements and fee income. Any future NBFC or proprietary credit platform would be a separate development subject to regulatory requirements and formal approvals.", bullets: ["Loan pipeline and disbursement monitoring", "Standard operating procedures and deal tracking", "Future credit-platform feasibility assessment"] },
    ], cta: "Discuss SME finance"
  },
  "asset-management": {
    title: "Asset management", accent: "& investment platforms.", kicker: "ASSET MANAGEMENT & INVESTMENT PLATFORMS",
    intro: "AFII evaluates the creation and development of investment platforms around infrastructure and other real assets. The objective is to combine sector expertise, suitable operators and institutional investment structures where commercial economics and governance justify a platform approach. Any actual fund management or investment service depends on the relevant legal entity, permissions and agreements.", image: "/images/investments-feature.jpg",
    sections: [
      { heading: "Building investable platforms", body: "Potential platform themes include infrastructure funds, private-credit funds, climate-transition strategies, renewables, warehousing and related investment vehicles. AFII can assess investment thesis, asset pipeline, partner responsibilities and platform economics before deciding whether a dedicated vehicle is appropriate.", bullets: ["Infrastructure and private-credit funds", "Renewable energy and warehousing platforms", "Investment thesis and pipeline development"] },
      { heading: "Acquisition and asset aggregation", body: "An example under evaluation is a highway-asset acquisition platform, potentially involving acquisition, aggregation, refinancing and monetisation of operational or near-operational assets. Other opportunities may involve LNG/SNG and energy-transition assets when the purpose is platform creation rather than a standalone advisory assignment.", bullets: ["Highway asset acquisition concepts", "LNG/SNG and transition platforms", "Refinancing and asset aggregation analysis"] },
      { heading: "Institutional readiness and governance", body: "Platform development requires investor materials, appropriate fund documentation, a clear operating model and asset-management processes. AFII can coordinate with institutional investors, operating partners and advisors while evaluating whether each initiative belongs within the group or a dedicated vehicle.", bullets: ["Institutional investor engagement", "Fund documentation and governance", "Operating-partner and asset-management coordination"] },
    ], cta: "Discuss asset management"
  },
  "family-office": {
    title: "Family office", accent: "partnerships.", kicker: "INVESTMENT PLATFORMS",
    intro: "AFII may consider project-level partnership opportunities with family offices and other qualified counterparties where mandate, fit and governance align.", image: "/images/investments-feature.jpg",
    sections: [{ heading: "Partnership opportunities", body: "Potential opportunities can include renewable energy, logistics and other real assets. Each proposal is considered individually and may be accepted or declined without obligation." }, { heading: "Important information", body: "This page is informational only and does not solicit investments or offer investment management or advice to any family office or individual." }], cta: "Contact the investment team"
  },
  "principal-investments": {
    title: "Principal", accent: "investments.", kicker: "PRINCIPAL INVESTMENTS",
    intro: "AFII considers selected proprietary investment and co-investment opportunities where strategic relevance and investment fundamentals align. The principal-investment function is distinct from advisory mandates: it involves a potential deployment of capital or incubation stake and therefore requires explicit investment governance and approval.", image: "/images/investments-feature.jpg",
    sections: [
      { heading: "Investment selection and underwriting", body: "Opportunities are evaluated for commercial fundamentals, strategic fit, valuation, financing structure and downside risk. AFII may review co-investments alongside clients, funds or strategic partners, but participation depends on diligence, the relevant entity and formal investment decisions.", bullets: ["Proprietary investment screening", "Co-investment alongside qualified partners", "Valuation, risk and return assessment"] },
      { heading: "Incubation and portfolio stewardship", body: "Projects or platforms developed by AFII may, where appropriate, involve incubation stakes. The process requires investment memoranda, approval notes and periodic portfolio reporting covering performance, risk, valuation, exit options and strategic relevance.", bullets: ["Incubation stakes in new platforms", "Investment memoranda and approvals", "Portfolio monitoring and exit analysis"] },
      { heading: "Connecting investments with group expertise", body: "Where a proprietary holding could seed a broader investment platform, the principal-investment function coordinates with asset-management specialists. Where investee companies require financing, it may coordinate with the investment-banking team. These interactions do not imply guaranteed financing or an obligation to invest.", bullets: ["Coordination with asset-management platforms", "Financing support for investee businesses", "Case-by-case governance and approvals"] },
    ], cta: "Discuss an investment opportunity"
  },
  "project-specific-finance": {
    title: "Project-specific", accent: "finance.", kicker: "INVESTMENT BANKING & CAPITAL RAISING",
    intro: "Capital raising and structuring perspectives shaped around the specific commercial and financial requirements of a project.", image: "/images/project-finance-feature.jpg",
    sections: [{ heading: "Capital raising strategy", body: "The process can consider project fundamentals, capital structure, sponsor capacity, financing requirements and potential investor or lender profiles." }, { heading: "Mandate-led execution", body: "Potential structures and outcomes depend on due diligence, market conditions, investor requirements and formal approvals." }], cta: "Discuss project-specific finance"
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
      { heading: "Request access or support", body: "For access requests or technical support, contact deals@afii.eu and include the project reference supplied to you, if applicable." }
    ], cta: "Request VDR access"
  },
  "offices": { title: "Local", accent: "presence.", kicker: "OFFICES & CONTACTS", intro: "Official office and contact information published by AFII Capital. For local contact information or meeting arrangements, write to our team and we will connect you with the appropriate person.", image: "/images/office-london.jpg", sections: [ { heading: "United Kingdom", body: "AFII Capital Partners Limited — City Road, London, England. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, { heading: "Germany", body: "AFII Structured Finance GmbH — Eschborn, Germany. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, { heading: "New Delhi, India", body: "AFII Corporate Advisors Limited — Safdarjung Enclave, New Delhi, India. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, { heading: "Mumbai, India", body: "AFII Infrastructure Advisory — Lower Parel, Mumbai, India. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, { heading: "Israel", body: "AFII partner and advisory presence in Israel. Lorem ipsum dolor sit amet, consectetur adipiscing elit." } ], cta: "Contact AFII" },
};

const sectorDetailLinks: Record<string, { href: string; label: string }> = {
  "Aviation": { href: "/aviation-business", label: "Explore sector ↗" },
  "Infrastructure & energy": { href: "/sector-infrastructure-energy", label: "Explore sector ↗" },
  "Commodities & industry": { href: "/sector-commodities-industry", label: "Explore sector ↗" },
  "Project-specific finance": { href: "/sector-project-specific-finance", label: "Explore sector ↗" },
  "Government & business": { href: "/sector-government-business", label: "Explore sector ↗" },
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
  return <main><SiteHeader /><section className={`page-hero${slug === "offices" ? " page-hero-offices" : ""}`}><div className="page-hero-image"><Image src={page.image} alt="" fill priority sizes="100vw" /></div><div className="page-hero-shade" /><div className="container page-hero-content">{slug === "offices" ? <div className="office-hero-layout"><div><div className="eyebrow eyebrow-light"><span />{page.kicker}</div><h1>{page.title}<br /><em>Cross-border perspective.</em></h1><p>{page.intro}</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.kicker}</span></div></div><div className="office-globe" role="img" aria-label="Animated globe highlighting AFII office locations"><div className="office-globe-grid"><div className="office-globe-equator" /></div><i className="office-pin office-pin-uk"><span>UK</span></i><i className="office-pin office-pin-germany"><span>Germany</span></i><i className="office-pin office-pin-india"><span>New Delhi</span></i><i className="office-pin office-pin-mumbai"><span>Mumbai</span></i><i className="office-pin office-pin-israel"><span>Israel</span></i><i className="office-pin office-pin-uae"><span>UAE</span></i></div></div> : <><div className="eyebrow eyebrow-light"><span />{page.kicker}</div><h1>{page.title}<br /><em>{page.accent}</em></h1><p>{page.intro}</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.kicker}</span></div></>}</div></section>
    <section className="content-main section-pad"><div className="container content-layout"><aside className="content-sidebar"><span className="sidebar-label">EXPLORE AFII</span><div className="sidebar-directory">
  <span className="sidebar-directory-heading">Expertise</span><Link className={slug === "expertise" ? "is-active" : ""} href="/expertise">All expertise</Link><Link href="/project-finance">Project finance</Link><Link href="/equity">Equity &amp; structuring</Link><Link href="/mezzanine">Mezzanine finance</Link><Link href="/securitizations">Securitizations</Link><Link href="/infrastructure-debt-refinancing">Infrastructure debt refinancing</Link><Link href="/project-specific-finance">Project-specific finance</Link><Link href="/government-advisory">Government advisory</Link><Link href="/equipment-finance">Equipment finance</Link><Link href="/eca-financing">Export credit financing</Link><Link href="/aviation-business">Aviation finance</Link><Link href="/sme-finance">SME finance</Link><Link href="/asset-management">Asset management</Link><Link href="/family-office">Family office</Link><Link href="/principal-investments">Principal investments</Link>
  <span className="sidebar-directory-heading">Sectors</span><Link href="/sectors">All sectors</Link><Link href="/aviation-business">Aviation</Link><Link href="/sector-infrastructure-energy">Infrastructure &amp; energy</Link><Link href="/sector-commodities-industry">Commodities &amp; industry</Link><Link href="/sector-project-specific-finance">Project-specific finance</Link><Link href="/sector-government-business">Government &amp; business</Link>
  <span className="sidebar-directory-heading">Transactions &amp; offices</span><Link href="/transactions">Transactions</Link><Link href="/offices">Offices</Link>
  <span className="sidebar-directory-heading">About AFII</span><Link href="/about-afii">About AFII</Link><Link href="/team">Leadership</Link><Link href="/group">Group network</Link><Link href="/investments">Investments</Link><Link href="/trust">Trust &amp; governance</Link><Link href="/vdr">Virtual data room</Link><Link href="/contact">Contact</Link>
</div></aside><div className="content-article">{slug === "team" && <section className="leadership-directory-grid" aria-label="AFII Capital leadership team">
  {[
    { name: "Dr. Mahesh M. Gandhi", role: "Managing Director & President", location: "Frankfurt", image: "/images/team-mahesh-gandhi.png" },
    { name: "Kirti Gulati", role: "Managing Director & Vice President", location: "Frankfurt", image: "/images/team-kirti-gulati.jpg" },
    { name: "Sidhartha S. Gandhi", role: "Government Advisory & Infrastructure Development", location: "India", image: "/images/team-sidhartha-gandhi.jpeg" },
    { name: "Vinit Vidyarthi", role: "Senior Partner · Insurance & Investment Banking", location: "New Delhi", image: "/images/team-vinit-vidyarthi.jpeg" },
    { name: "Abhijit Avarsekar", role: "Senior Advisor · Infrastructure Business", location: "Mumbai", image: "/images/team-abhijit-avar-sekar.png" },
    { name: "Lt. Gen. (Retired) Rafi Peled", role: "Senior Partner · Israel Business", location: "Tel Aviv", image: "/images/team-rafi-peled.jpg" },
    { name: "Nguyen Thi Thanh Nga", role: "Head · Vietnam Business", location: "Vietnam", image: "/images/team-nguyen-thi-thanh-nga.jpg" },
    { name: "K. Aakash", role: "Director · AFII Corp", location: "New Delhi", image: "/images/team-kumar-aakash.png" },
    { name: "Swapnil Gandhi", role: "Government Advisory & Infrastructure Development", location: "India", image: "/images/team-swapnil-gandhi.jfif" },
    { name: "Michel Buffat", role: "Strategic Partner · AGENOVA", location: "Switzerland · Europe", image: "/images/team-michel-buffat.JPG" },
    { name: "Vikram Kaushal", role: "Asset Management & Investment Platforms", location: "India", image: "/images/team-vikram-kaushal.jpg" },
    { name: "Johann Mair", role: "Senior Partner", location: "Munich · K3M", image: "/images/team-johann-mair.png" },
    { name: "Arun Lohiya", role: "Senior Advisor · Aviation Business", location: "Ahmedabad", image: "/images/team-arun-lohiya.jpg" },
    { name: "Punam Bhasin", role: "Director · AFII Corp (India)", location: "India", image: "/images/team-punam-bhasin.jpg" },
    { name: "Ralph Ketelhut", role: "Senior Partner", location: "Munich · K3M", image: "/images/team-ralph-ketelhut.jpg" },
    { name: "Jonathan Pallares", role: "Business Partner", location: "Helsinki", image: "/images/team-jonathan-pallares.jpg" },
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

{slug === "offices" ? <div className="office-cards-grid">{[{name:"United Kingdom",type:"Headquarters",entity:"AFII Capital Partners Limited",address:"City Road, London, England",image:"/images/office-london.jpg"},{name:"Germany",type:"Registered office",entity:"AFII Structured Finance GmbH",address:"Eschborn, Germany",image:"/images/office-germany.jpg"},{name:"New Delhi, India",type:"India back office",entity:"AFII Corporate Advisors Limited",address:"Safdarjung Enclave, New Delhi, India",image:"/images/office-delhi.jpg"},{name:"Mumbai, India",type:"Infrastructure advisory",entity:"AFII Infrastructure Advisory",address:"Lower Parel, Mumbai, India",image:"/images/office-mumbai.jpg"},{name:"Israel",type:"Partner network",entity:"AFII partner and advisory presence",address:"Further details to be confirmed",image:""}].map((office)=><article className="office-card" key={office.name}><div className="office-preview-image">{office.image?<Image src={office.image} alt={`${office.name} office`} width={700} height={420} style={{width:"100%",height:"175px",objectFit:"cover"}}/>:<div className="office-placeholder">Office image placeholder</div>}</div><div className="office-card-info"><span className="eyebrow">{office.type}</span><h2>{office.name}</h2><p>{office.entity}</p><address>{office.address}</address><p className="office-location-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Further local information will be added.</p></div></article>)}</div> : page.sections.map((section, i) => <section className={`content-section${isTransactions ? " content-section-transactions" : ""}`} key={section.heading}>{!isTransactions && <div className="content-section-number">{String(i + 1).padStart(2, "0")}</div>}<div><h2>{section.heading}</h2><p>{section.body}</p>{slug === "sectors" && sectorDetailLinks[section.heading] && <Link className="sector-inline-link" href={sectorDetailLinks[section.heading].href}>{sectorDetailLinks[section.heading].label}</Link>}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{isTransactions && i === 1 && <TransactionTable />}</div></section>)}{slug === "vdr" && <section className="vdr-application-panel" aria-labelledby="vdr-application-title">
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
  <p className="vdr-form-footnote">If the form does not load in your browser, use “Open application form” above. For access support, contact <a href="mailto:deals@afii.eu">deals@afii.eu</a>.</p>
</section>}
<div className="content-callout"><div className="eyebrow"><span /> NEXT STEP</div><h2>{page.cta ?? "Talk to AFII"}</h2><p>Share a short outline of your project or enquiry and the team can direct it to the appropriate specialist.</p><a className="button button-dark" href={`mailto:${slug === "investments" ? "invest@afii.eu" : slug === "vdr" ? "deals@afii.eu" : "reachus@afii.eu"}?subject=${encodeURIComponent(page.cta ?? "AFII Capital enquiry")}`}>Contact AFII <span aria-hidden="true">↗</span></a></div></div></div></section><SiteFooter /></main>;
}
