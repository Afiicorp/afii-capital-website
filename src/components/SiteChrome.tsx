"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const expertiseLinks = [
  ["Project finance", "/project-finance"],
  ["Equipment finance", "/equipment-finance"],
  ["Export credit financing", "/eca-financing"],
  ["Equity & structuring", "/equity"],
  ["Mezzanine finance", "/mezzanine"],
  ["Securitizations", "/securitizations"],
  ["Infrastructure debt refinancing", "/infrastructure-debt-refinancing"],
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
  const headerRef = useRef<HTMLElement | null>(null);
  const close = () => { setMenuOpen(false); setExpertiseOpen(false); setAboutOpen(false); };
  const isMobileMenu = () => typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches;
  const handleGroupLink = (event: React.MouseEvent<HTMLAnchorElement>, group: "expertise" | "about") => {
    if (!isMobileMenu()) { close(); return; }
    event.preventDefault();
    if (group === "expertise") setExpertiseOpen((value) => !value);
    else setAboutOpen((value) => !value);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const updateMenuTop = () => {
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 132;
      document.documentElement.style.setProperty("--afii-mobile-nav-top", `${Math.max(0, headerBottom)}px`);
    };
    updateMenuTop();
    window.addEventListener("resize", updateMenuTop);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", updateMenuTop);
      document.documentElement.style.removeProperty("--afii-mobile-nav-top");
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>STRUCTURED FINANCE &amp; INFRASTRUCTURE INVESTMENTS</span>
          <a href="mailto:reachus@afiicapital.com">reachus@afiicapital.com <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <header className="site-header" ref={headerRef}>
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
              <div className="nav-group-top" onClick={(event) => { if (isMobileMenu() && !(event.target as HTMLElement).closest("a, button")) setExpertiseOpen((value) => !value); }}><Link href="/project-finance" onClick={(event) => handleGroupLink(event, "expertise")}>Expertise</Link></div>
              <div className="nav-dropdown">{expertiseLinks.map(([label, href]) => <Link href={href} key={href} onClick={close}>{label}</Link>)}</div>
            </div>
            <Link href="/sectors" onClick={close}>Sectors</Link>
            <Link href="/transactions" onClick={close}>Transactions</Link>
            <Link href="/offices" onClick={close}>Offices</Link>
            <div className={`nav-group ${aboutOpen ? "is-expanded" : ""}`}>
              <div className="nav-group-top" onClick={(event) => { if (isMobileMenu() && !(event.target as HTMLElement).closest("a, button")) setAboutOpen((value) => !value); }}><Link href="/about-afii" onClick={(event) => handleGroupLink(event, "about")}>About AFII</Link></div>
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
