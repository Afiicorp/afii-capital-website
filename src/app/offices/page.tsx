import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const offices = [
  {
    name: "Germany",
    label: "Group Headquarters",
    title: "AFII Structured Finance GmbH",
    image: "/images/office-germany.jpg",
    address: "Alfred-Herrhausen-Allee 3—“5, 65760 Eschborn, Germany",
    description: "Registered office of AFII Structured Finance GmbH. Amtsgericht Frankfurt am Main, HRB 140747.",
    extra: "Managing Directors: Dr. Mahesh Pal Singh Gandhi and Ms. Kirti Gulati.",
  },
  {
    name: "United Kingdom",
    label: "Registered Office",
    title: "AFII Capital Partners Limited",
    image: "/images/uk-london.jpg",
    address: "124—“128 City Road, London, England, EC1V 2NX",
    description: "AFII Capital Partners Limited is headquartered in London, United Kingdom.",
  },
  
  {
    name: "New Delhi, India",
    label: "India Office",
    title: "AFII Corporate Advisors Limited",
    image: "/images/office-delhi.jpg",
    address: "Madan Sara Mathew Lane, B1/14 Safdarjung Enclave, New Delhi 110029, India",
    description: "India office and office of the India representative.",
    extra: "Rep Director: Mr. Kumar Aakash (k.aakash@afiicapital.com). India Senior Advisor: Mr. Vinit Vidyarthi (vinit.vidyarthi@afiicorp.com).",
  },
  {
    name: "Mumbai, India",
    label: "Infrastructure advisory",
    title: "AFII — Infrastructure Advisory",
    image: "/images/office-mumbai.jpg",
    address: "The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013, India",
    description: "Infrastructure advisory presence in Mumbai.",
    extra: "Contact: Abhijit K. Avarsekar — aka@afiicapital.com.",
  },
  {
    name: "United Arab Emirates",
    label: "Middle East office",
    title: "AFII Middle East LLC FZ",
    image: "/images/office-uae.jpg",
    address: "Meydan Free Zone, United Arab Emirates",
    description: "AFII Middle East LLC FZ provides services to clients in the Middle East and to European and Far Eastern clients looking to raise capital from or invest in the UAE.",
    extra: "Led by Ms. Kirti Gulati. Contact: reachus@afiicapital.com.",
  },
  {
    name: "Israel",
    label: "Partner network",
    title: "Partner and mandate coverage",
    image: "/images/office-israel.jpg",
    address: "Israel",
    description: "AFII’s cross-border network supports relevant mandates through local relationships. Contact AFII for current regional coverage and introductions.",
  },
  ...[
    ["Singapore", "/images/office-singapore.jpg"],
    ["Switzerland", "/images/office-switzerland.jpg"],
    ["Vietnam", "/images/office-vietnam.jpg"],
    ["Romania", "/images/office-romania.jpg"],
  ].map(([name, image]) => ({
    name,
    label: "Partner network",
    title: "Partner and mandate coverage",
    image,
    address: name,
    description: `Partner and mandate coverage in ${name}, subject to local relationships and project requirements. Contact AFII for current regional coverage and introductions.`,
  })),
];

export default function OfficesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="offices-hero">
        <div className="container office-hero-layout">
          <div className="office-hero-copy">
            <div className="eyebrow"><span></span> OFFICES &amp; CONTACTS</div>
            <h1>Local presence.<br /><em>Cross-border perspective.</em></h1>
            <p>Official office and contact information published by AFII Capital. For local contact information or meeting arrangements, write to our team and we will connect you with the appropriate person.</p>
            <Link className="button button-dark" href="/contact">Contact AFII</Link>
          </div>
          <div className="office-map-panel" aria-label="Map showing AFII office locations">
            <img className="office-world-map" src="/images/afii-world-map.svg" alt="World map showing AFII offices and partner locations" />
            <div className="office-map-legend"><span><i/> Office / representative location</span><span>AFII cross-border network</span></div>
          </div>
        </div>
      </section>
      <section className="offices-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span></span> OFFICE DETAILS</div><h2>Our offices &amp;<br /><em>regional contacts.</em></h2></div>
            <p>Locations, entities and contact details below are based on information shown on AFII Capital’s published website.</p>
          </div>
          <div className="offices-grid">
            {offices.map((office) => (
              <article className="office-card" key={office.name}>
                <div className="office-card-image"><Image src={office.image} alt={`Representative city and infrastructure imagery for ${office.name}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
                <div className="office-card-body">
                  <span className="office-region">{office.label}</span>
                  <h2>{office.name}</h2>
                  <h3>{office.title}</h3>
                  <address>{office.address}</address>
                  <p>{office.description}</p>
                  {office.extra && <p className="office-extra">{office.extra}</p>}
                </div>
              </article>
            ))}
          </div>
          <p className="offices-note">For general enquiries, contact <a href="mailto:reachus@afiicapital.com">reachus@afiicapital.com</a>.</p>
        </div>
      </section>
      <section className="contact-cta"><div className="container contact-inner"><div className="eyebrow eyebrow-light"><span></span> START A CONVERSATION</div><h2>Have a project<br />to <em>structure?</em></h2><p>Tell us about your mandate. We’ll connect you with the appropriate team.</p><Link className="button button-gold" href="/contact">Discuss a mandate</Link></div></section>
      <SiteFooter />
    </main>
  );
}

