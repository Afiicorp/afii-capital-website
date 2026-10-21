import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const offices = [
  {
    name: "United Kingdom",
    label: "Headquarters",
    title: "AFII Capital Partners Limited",
    image: "/images/uk-london.jpg",
    address: "124â€“128 City Road, London, England, EC1V 2NX",
    description: "AFII Capital Partners Limited is headquartered in London, United Kingdom.",
  },
  {
    name: "Germany",
    label: "Registered office",
    title: "AFII Structured Finance GmbH",
    image: "/images/office-germany.jpg",
    address: "Alfred-Herrhausen-Allee 3â€“5, 65760 Eschborn, Germany",
    description: "Registered office of AFII Structured Finance GmbH. Amtsgericht Frankfurt am Main, HRB 140747.",
    extra: "Managing Directors: Dr. Mahesh Pal Singh Gandhi and Ms. Kirti Gulati.",
  },
  {
    name: "New Delhi, India",
    label: "India back office",
    title: "AFII Corporate Advisors Limited",
    image: "/images/office-delhi.jpg",
    address: "Madan Sara Mathew Lane, B1/14 Safdarjung Enclave, New Delhi 110029, India",
    description: "India back office and office of the India representative.",
    extra: "Rep Director: Mr. Kumar Aakash (k.aakash@afiicapital.com). India Senior Advisor: Mr. Vinit Vidyarthi (vinit.vidyarthi@afiicorp.com).",
  },
  {
    name: "Mumbai, India",
    label: "Infrastructure advisory",
    title: "AFII â€” Infrastructure Advisory",
    image: "/images/office-mumbai.jpg",
    address: "The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013, India",
    description: "Infrastructure advisory presence in Mumbai.",
    extra: "Contact: Abhijit K. Avarsekar â€” aka@afiicapital.com.",
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
    label: "Regional coverage",
    title: "Partner and mandate coverage",
    image: "/images/about-afii-feature.jpg",
    address: "Israel",
    description: "AFIIâ€™s cross-border network supports relevant mandates through local relationships. Contact AFII for current regional coverage and introductions.",
  },
  ...[
    ["Singapore", "/images/office-singapore.jpg"],
    ["Switzerland", "/images/office-switzerland.jpg"],
    ["Vietnam", "/images/office-vietnam.jpg"],
    ["Romania", "/images/office-romania.jpg"],
  ].map(([name, image]) => ({
    name,
    label: "Regional coverage",
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
            <svg className="office-world-map" viewBox="0 0 800 430" role="img" aria-labelledby="office-map-title">
              <title id="office-map-title">AFII office locations across the United Kingdom, Germany, India, United Arab Emirates and Israel</title>
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d8e0e8" strokeWidth="1"/></pattern>
              </defs>
              <rect width="800" height="430" rx="12" fill="#f7f9fb"/>
              <rect width="800" height="430" rx="12" fill="url(#map-grid)"/>
              <g className="map-land" fill="#dbe4e9" stroke="#c4d0d8" strokeWidth="1.5">
                <path d="M75 102 L105 69 151 55 187 66 211 88 200 112 174 122 158 151 132 158 115 142 91 139 72 121Z"/>
                <path d="M165 164 L190 173 204 204 193 236 207 261 192 295 176 278 170 244 153 218 150 189Z"/>
                <path d="M315 82 L344 65 374 74 390 93 378 109 356 111 344 128 325 116Z"/>
                <path d="M365 129 L400 112 440 117 465 135 492 136 515 157 501 177 470 182 452 202 429 211 412 236 390 229 380 200 360 185 345 156Z"/>
                <path d="M410 239 L438 247 452 273 445 307 423 339 405 318 398 285Z"/>
                <path d="M480 121 L526 99 576 106 618 127 650 147 637 169 602 171 582 190 552 182 531 164 500 162Z"/>
                <path d="M594 244 L630 231 666 244 682 268 661 287 628 279 606 263Z"/>
                <path d="M693 318 L720 307 739 322 726 339 703 338Z"/>
              </g>
              <g className="office-map-links" fill="none" stroke="#b68a45" strokeWidth="2" strokeDasharray="5 5">
                <path d="M414 114 Q452 155 489 202"/>
                <path d="M414 114 Q444 165 477 216"/>
                <path d="M414 114 Q454 180 506 225"/>
                <path d="M414 114 Q474 159 519 206"/>
              </g>
              <g className="office-map-marker"><circle cx="414" cy="114" r="8"/><circle cx="430" cy="119" r="5"/><circle cx="489" cy="202" r="8"/><circle cx="477" cy="216" r="8"/><circle cx="506" cy="225" r="8"/><circle cx="519" cy="206" r="8"/></g>
              <g className="office-map-labels">
                <text x="385" y="99">UK</text><text x="440" y="112">Germany</text><text x="501" y="195">New Delhi</text><text x="489" y="239">Mumbai</text><text x="527" y="238">UAE</text><text x="529" y="197">Israel</text>
              </g>
            </svg>
            <div className="office-map-legend"><span><i/> Office / representative location</span><span>AFII cross-border network</span></div>
          </div>
        </div>
      </section>
      <section className="offices-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span></span> OFFICE DETAILS</div><h2>Our offices &amp;<br /><em>regional contacts.</em></h2></div>
            <p>Locations, entities and contact details below are based on information shown on AFII Capitalâ€™s published website.</p>
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
      <section className="contact-cta"><div className="container contact-inner"><div className="eyebrow eyebrow-light"><span></span> START A CONVERSATION</div><h2>Have a project<br />to <em>structure?</em></h2><p>Tell us about your mandate. Weâ€™ll connect you with the appropriate team.</p><Link className="button button-gold" href="/contact">Discuss a mandate</Link></div></section>
      <SiteFooter />
    </main>
  );
}

