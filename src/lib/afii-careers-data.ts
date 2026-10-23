/** AFII group career showcase — ALL roles are fictional examples, never real vacancies. */
export type CareerJob = {
  id: string;
  slug: string;
  title: string;
  company: string;
  country: string;
  city: string;
  department: string;
  type: string;
  level: string;
  mode: string;
  category: "Experienced" | "Early careers" | "Internships";
  summary: string;
  introduction: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  experienceMin: number; // Example minimum relevant years
  experienceMax: number; // Example maximum range for demo search
};

const group = {
  india: "AFII Corporate Advisors Limited",
  uk: "AFII Capital Partners Limited",
  germany: "AFII Structured Finance GmbH",
  uae: "AFII Middle East LLC FZ",
  switzerland: "AGENOVA (Switzerland)",
  singapore: "AFII group - Singapore network",
  israel: "AFII group - Israel network",
};

export const careerJobs: CareerJob[] = [
  {
    id: "AFII-DEM-001", experienceMin: 0, experienceMax: 2, slug: "financial-analyst-new-delhi", title: "Financial Analyst", company: group.india, country: "India", city: "New Delhi", department: "Corporate Finance", type: "Full-time", level: "Associate", mode: "On-site", category: "Early careers",
    summary: "Support commercial analysis, financial models and presentation materials for advisory mandates.",
    introduction: "This illustrative role demonstrates how AFII could describe an analyst position supporting cross-border financing and investment advisory engagements.",
    responsibilities: ["Build and maintain financial models, sensitivity analyses and project assumptions.", "Prepare business research, sector materials and investment presentations.", "Coordinate data requests and maintain orderly document records.", "Assist senior advisers with reporting and transaction execution activities."],
    requirements: ["Degree in finance, commerce, economics, engineering or a relevant discipline.", "Comfort with Excel, structured research and quantitative reasoning.", "Strong written communication and attention to detail.", "0-2 years of relevant experience for this illustrative position."],
    skills: ["Financial modelling", "Research", "Excel", "Presentations"],
  },
  {
    id: "AFII-DEM-002", experienceMin: 2, experienceMax: 6, slug: "investment-associate-london", title: "Investment Associate", company: group.uk, country: "United Kingdom", city: "London", department: "Investment Advisory", type: "Full-time", level: "Mid-level", mode: "Hybrid", category: "Experienced",
    summary: "Evaluate capital structures and coordinate investment opportunity assessment across sectors.",
    introduction: "An illustrative London-based opportunity focused on financial appraisal, counterparties and transaction materials.",
    responsibilities: ["Assess opportunities and prepare investment committee-style analyses.", "Review assumptions in valuation and project finance models.", "Coordinate with advisers, counterparties and regional teams.", "Track due diligence, deliverables and commercial workstreams."],
    requirements: ["Relevant degree and 3-6 years of transaction, finance or investment experience.", "Understanding of valuation, project economics and investment risks.", "Ability to communicate clearly with international stakeholders."],
    skills: ["Valuation", "Due diligence", "Investment analysis", "Stakeholder coordination"],
  },
  {
    id: "AFII-DEM-003", experienceMin: 3, experienceMax: 8, slug: "structured-finance-specialist-eschborn", title: "Structured Finance Specialist", company: group.germany, country: "Germany", city: "Eschborn", department: "Structured Finance", type: "Full-time", level: "Mid-level", mode: "Hybrid", category: "Experienced",
    summary: "Support financing structures and cross-border documentation for complex asset-based projects.",
    introduction: "An illustrative specialist position based near Frankfurt, requiring disciplined financial and documentation work.",
    responsibilities: ["Coordinate financing analyses across project stakeholders.", "Prepare credit and financing summaries for review.", "Support cross-border execution documentation.", "Review financial covenants and transaction milestones."],
    requirements: ["Experience in banking, structured finance or infrastructure finance.", "Ability to prepare financial analysis and professional written materials.", "German and English working proficiency would be advantageous."],
    skills: ["Structured finance", "Credit analysis", "Documentation", "Risk"],
  },
  {
    id: "AFII-DEM-004", experienceMin: 1, experienceMax: 5, slug: "business-development-associate-dubai", title: "Business Development Associate", company: group.uae, country: "United Arab Emirates", city: "Dubai", department: "Business Development", type: "Full-time", level: "Associate", mode: "On-site", category: "Experienced",
    summary: "Support relationship development and qualified cross-border advisory opportunities.",
    introduction: "This sample role illustrates client development activities for a Middle East advisory team.",
    responsibilities: ["Research sectors, counterparties and market activity.", "Maintain structured business development records and meeting notes.", "Prepare introductory materials and opportunity briefs.", "Coordinate across legal entities and locations when appropriate."],
    requirements: ["Relevant commercial or financial services experience.", "Clear professional communication and CRM discipline.", "Comfort working with international teams."],
    skills: ["Business development", "CRM", "Client research", "Communication"],
  },
  {
    id: "AFII-DEM-005", experienceMin: 3, experienceMax: 8, slug: "epcm-project-coordinator-zug", title: "EPCM Project Coordinator", company: group.switzerland, country: "Switzerland", city: "Zug", department: "Engineering & EPCM", type: "Full-time", level: "Mid-level", mode: "Hybrid", category: "Experienced",
    summary: "Coordinate multidisciplinary engineering deliverables and procurement interfaces on behalf of project owners.",
    introduction: "An illustrative AGENOVA career path in engineering, procurement and construction management services.",
    responsibilities: ["Support design-discipline coordination and document control.", "Track procurement packages, interfaces and project deliverables.", "Assist in construction progress reporting and risk registers.", "Prepare reliable progress communications for project owners."],
    requirements: ["Background in engineering, project controls or EPCM delivery.", "Experience using project schedules and technical documentation.", "Strong stakeholder coordination skills."],
    skills: ["EPCM", "Project coordination", "Procurement", "Engineering"],
  },
  {
    id: "AFII-DEM-006", experienceMin: 0, experienceMax: 1, slug: "hr-operations-intern-new-delhi", title: "HR Operations Intern", company: group.india, country: "India", city: "New Delhi", department: "People & Operations", type: "Internship", level: "Intern", mode: "On-site", category: "Internships",
    summary: "Explore recruitment coordination, employee records and process improvement in a supervised learning role.",
    introduction: "A sample structured internship, intended to illustrate transparent responsibilities and learning objectives.",
    responsibilities: ["Coordinate interview calendars and candidate communications.", "Maintain supervised HR documentation and checklists.", "Assist in preparing process improvement notes.", "Learn responsible handling of candidate personal information."],
    requirements: ["Current student or recent graduate in a relevant field.", "Organised communication and willingness to learn.", "Careful treatment of confidential information."],
    skills: ["Recruitment", "HR operations", "Documentation", "Communication"],
  },
  {
    id: "AFII-DEM-007", experienceMin: 1, experienceMax: 4, slug: "risk-compliance-analyst-london", title: "Risk & Compliance Analyst", company: group.uk, country: "United Kingdom", city: "London", department: "Risk & Compliance", type: "Full-time", level: "Associate", mode: "Hybrid", category: "Experienced",
    summary: "Contribute to onboarding checks, control documentation and disciplined risk reporting.",
    introduction: "An illustrative role showing the scope of risk operations in an international corporate advisory group.",
    responsibilities: ["Support client onboarding checklists and record controls.", "Coordinate escalation of incomplete or inconsistent documentation.", "Maintain audit-ready internal process evidence.", "Assist with periodic policy and risk reporting."],
    requirements: ["Experience or education related to compliance, legal operations or finance.", "Good documentation and analytical ability.", "Respect for privacy and confidential information."],
    skills: ["KYC", "Risk controls", "Audit trail", "Documentation"],
  },
  {
    id: "AFII-DEM-008", experienceMin: 0, experienceMax: 1, slug: "corporate-research-intern-mumbai", title: "Corporate Research Intern", company: group.india, country: "India", city: "Mumbai", department: "Research & Strategy", type: "Internship", level: "Intern", mode: "Hybrid", category: "Internships",
    summary: "Learn how to research sectors, summarise market information and communicate findings.",
    introduction: "A sample learning assignment within the research function of an advisory organisation.",
    responsibilities: ["Prepare sector snapshots using appropriately cited sources.", "Maintain data tables and research notes.", "Help translate research into clear presentation materials."],
    requirements: ["Interest in economics, finance, business or research.", "Comfort working with spreadsheets and web research.", "Strong writing and source-validation habits."],
    skills: ["Research", "Market analysis", "Data", "Presentations"],
  },
  {
    id: "AFII-DEM-009", experienceMin: 5, experienceMax: 12, slug: "trade-finance-manager-dubai", title: "Trade Finance Manager", company: group.uae, country: "United Arab Emirates", city: "Dubai", department: "Trade Finance", type: "Full-time", level: "Manager", mode: "On-site", category: "Experienced",
    summary: "Evaluate trade financing needs and coordinate instruments, stakeholders and documentation.",
    introduction: "An illustrative managerial role in a cross-border trade finance context.",
    responsibilities: ["Review trade flows and proposed transaction structures.", "Coordinate requirements among banks and business counterparties.", "Prepare risk summaries, financing options and transaction progress records."],
    requirements: ["Relevant trade finance or banking experience.", "Familiarity with common trade finance documentation and risks.", "Strong external stakeholder management skills."],
    skills: ["Trade finance", "Banking", "Risk", "Transaction management"],
  },
  {
    id: "AFII-DEM-010", experienceMin: 10, experienceMax: 25, slug: "infrastructure-advisory-director-new-delhi", title: "Infrastructure Advisory Director", company: group.india, country: "India", city: "New Delhi", department: "Infrastructure Advisory", type: "Full-time", level: "Leadership", mode: "On-site", category: "Experienced",
    summary: "Lead advisory strategy and cross-functional delivery on complex infrastructure mandates.",
    introduction: "An illustrative leadership-level mandate spanning advisory execution, stakeholders and governance.",
    responsibilities: ["Lead transaction strategy and client advisory engagements.", "Review project finance viability and programme risks.", "Coordinate execution across commercial and technical teams.", "Provide governance and quality oversight for deliverables."],
    requirements: ["Substantial infrastructure, advisory or project financing experience.", "Strong leadership, finance and stakeholder capabilities.", "Track record of complex transaction coordination."],
    skills: ["Infrastructure", "Leadership", "Project finance", "Strategy"],
  },
  {
    id: "AFII-DEM-011", experienceMin: 0, experienceMax: 3, slug: "operations-analyst-singapore", title: "Regional Operations Analyst", company: group.singapore, country: "Singapore", city: "Singapore", department: "People & Operations", type: "Full-time", level: "Associate", mode: "Hybrid", category: "Early careers",
    summary: "Illustrative regional operations and reporting role for cross-border coordination.",
    introduction: "A sample job for demonstrating location-specific career discovery; employer entity must be verified before real publication.",
    responsibilities: ["Maintain operating reports and key follow-up lists.", "Support document and stakeholder coordination.", "Analyse service metrics and improvement opportunities."],
    requirements: ["Ability to work carefully with process data.", "Strong spreadsheet and written reporting skills.", "Experience with distributed teams would be useful."],
    skills: ["Operations", "Reporting", "Excel", "Coordination"],
  },
  {
    id: "AFII-DEM-012", experienceMin: 1, experienceMax: 5, slug: "project-analyst-tel-aviv", title: "Project Analyst", company: group.israel, country: "Israel", city: "Tel Aviv", department: "Infrastructure Advisory", type: "Contract", level: "Associate", mode: "Remote", category: "Experienced",
    summary: "Example analytical project support across investment and infrastructure topics.",
    introduction: "Illustrative network-related listing only; no recruiting employer is asserted or implied.",
    responsibilities: ["Prepare project summaries and research briefs.", "Track milestones, information requests and deliverables.", "Assist in commercial feasibility review."],
    requirements: ["Strong financial or analytical capabilities.", "Experience handling project documents and research.", "High standard of professional communication."],
    skills: ["Project analysis", "Research", "Excel", "Documentation"],
  },
];

export const countries = Array.from(new Set(careerJobs.map(job => job.country))).sort();
export const companies = Array.from(new Set(careerJobs.map(job => job.company))).sort();
export const departments = Array.from(new Set(careerJobs.map(job => job.department))).sort();
export const workModes = Array.from(new Set(careerJobs.map(job => job.mode))).sort();
export const levels = Array.from(new Set(careerJobs.map(job => job.level))).sort();
export const jobTypes = Array.from(new Set(careerJobs.map(job => job.type))).sort();
export function getCareerJob(slug: string) { return careerJobs.find(job => job.slug === slug); }
