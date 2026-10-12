import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const offices = [
  {
    name: "United Kingdom",
    label: "Headquarters",
    title: "AFII Capital Partners Limited",
    image: "/images/office-uk.jpg",
    address: "124–128 City Road, London, England, EC1V 2NX",
    description: "AFII Capital Partners Limited is headquartered in London, United Kingdom.",
  },
  {
    name: "Germany",
    label: "Registered office",
    title: "AFII Structured Finance GmbH",
    image: "/images/office-germany.jpg",
    address: "Alfred-Herrhausen-Allee 3–5, 65760 Eschborn, Germany",
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
    title: "AFII — Infrastructure Advisory",
    image: "/images/office-mumbai.jpg",
    address: "The A-Club, Suite W4, One IndiaBulls, Tower 2A, 8th Floor, Lower Parel, Mumbai 400013, India",
    description: "Infrastructure advisory presence in Mumbai.",
    extra: "Contact: Abhijit K. Avarsekar — aka@afiicapital.com.",
  },
  {
    name: "United Arab Emirates",
    label: "Middle East",
    title: "AFII Middle East LLC FZ",
    image: "/images/office-uae.jpg",
    address: "Meydan Free Zone, United Arab Emirates",
    description: "AFII Middle East LLC FZ provides services to clients in the Middle East and to European and Far Eastern clients looking to raise capital from or invest in the UAE.",
    extra: "Led by Ms. Kirti Gulati. Contact: reachus@afiicapital.com.",
  },
];

export default function OfficesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="offices-hero">
        <div className="container">
          <div className="eyebrow"><span></span> OFFICES &amp; CONTACTS</div>
          <h1>Local presence.<br /><em>Cross-border perspective.</em></h1>
          <p>Official office and contact information published by AFII Capital. For local contact information or meeting arrangements, write to our team and we will connect you with the appropriate person.</p>
          <Link className="button button-dark" href="/contact">Contact AFII <span>↗</span></Link>
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
      <section className="contact-cta"><div className="container contact-inner"><div className="eyebrow eyebrow-light"><span></span> START A CONVERSATION</div><h2>Have a project<br />to <em>structure?</em></h2><p>Tell us about your mandate. We’ll connect you with the appropriate team.</p><Link className="button button-gold" href="/contact">Discuss a mandate <span>↗</span></Link></div></section>
      <SiteFooter />
    </main>
  );
}
