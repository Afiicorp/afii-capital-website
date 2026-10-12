"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const expertiseLinks = [
  ["Project finance", "/project-finance"],
  ["Equipment finance", "/equipment-finance"],
  ["Export credit financing", "/eca-financing"],
  ["Equity & structuring", "/equity"],
  ["Aviation finance", "/aviation-business"],
];
const aboutLinks = [
  ["About AFII", "/about-afii"],
  ["Leadership", "/team"],
  ["Group network", "/group"],
  ["Investments", "/investments"],
  ["Offices", "/offices"],
  ["Trust & governance", "/trust"],
  ["Virtual data room", "/vdr"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const close = () => { setMenuOpen(false); setExpertiseOpen(false); setAboutOpen(false); };
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>STRUCTURED FINANCE &amp; INFRASTRUCTURE INVESTMENTS</span>
          <a href="mailto:reachus@afiicapital.com">reachus@afiicapital.com <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="AFII Capital Partners home" onClick={close}>
            <Image src="/images/afii-logo.png" alt="AFII logo" width={60} height={60} priority className="brand-mark" />
            <span className="brand-wordmark"><strong>AFII CAPITAL</strong><small>PARTNERS</small></span>
          </Link>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <Link href="/#approach" onClick={close}>Our approach</Link>
            <div className={`nav-group ${expertiseOpen ? "is-expanded" : ""}`}>
              <div className="nav-group-top"><Link href="/project-finance" onClick={close}>Expertise</Link><button className="nav-disclosure" type="button" aria-label="Toggle expertise menu" aria-expanded={expertiseOpen} onClick={() => setExpertiseOpen(!expertiseOpen)}>⌄</button><span className="nav-caret" aria-hidden="true">⌄</span></div>
              <div className="nav-dropdown">{expertiseLinks.map(([label, href]) => <Link href={href} key={href} onClick={close}>{label}</Link>)}</div>
            </div>
            <Link href="/sectors" onClick={close}>Sectors</Link>
            <Link href="/transactions" onClick={close}>Transactions</Link>
            <Link href="/offices" onClick={close}>Offices</Link>
            <div className={`nav-group ${aboutOpen ? "is-expanded" : ""}`}>
              <div className="nav-group-top"><Link href="/about-afii" onClick={close}>About AFII</Link><button className="nav-disclosure" type="button" aria-label="Toggle About AFII menu" aria-expanded={aboutOpen} onClick={() => setAboutOpen(!aboutOpen)}>⌄</button><span className="nav-caret" aria-hidden="true">⌄</span></div>
              <div className="nav-dropdown nav-dropdown-about">{aboutLinks.map(([label, href]) => <Link href={href} key={href} onClick={close}>{label}</Link>)}</div>
            </div>
            <Link className="nav-cta" href="/contact" onClick={close}>Discuss a mandate <span>↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Link className="brand footer-brand" href="/">
          <Image src="/images/afii-logo.png" alt="AFII logo" width={48} height={48} className="brand-mark" />
          <span className="brand-wordmark"><strong>AFII CAPITAL</strong><small>PARTNERS</small></span>
        </Link>
        <p>Structured Finance &amp;<br />Infrastructure Investments</p>
        <div className="footer-links">
          <Link href="/project-finance">Project finance</Link><Link href="/equipment-finance">Equipment finance</Link><Link href="/eca-financing">Export credit financing</Link><Link href="/sectors">Sectors</Link><Link href="/transactions">Transactions</Link><Link href="/investments">Investments</Link><Link href="/offices">Offices</Link><Link href="/team">Leadership</Link><Link href="/group">Group network</Link><Link href="/contact">Contact</Link>
        </div>
        <a className="footer-email" href="mailto:reachus@afiicapital.com">reachus@afiicapital.com <span>↗</span></a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 AFII Capital Partners. All rights reserved.</span>
        <span>Information is provided for general informational purposes only.</span>
        <Link href="/trust">Trust &amp; governance</Link>
      </div>
    </footer>
  );
}
