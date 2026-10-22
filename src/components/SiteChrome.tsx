"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const expertiseGroups = [
  { title: "Investment Banking & Capital Raising", links: [["Project finance", "/project-finance"], ["Equity & structuring", "/equity"], ["Mezzanine finance", "/mezzanine"], ["Securitizations", "/securitizations"]] },
  { title: "Government Advisory & Infrastructure Development", links: [["Infrastructure debt refinancing", "/infrastructure-debt-refinancing"], ["Project-specific finance", "/project-specific-finance"], ["Government advisory", "/government-advisory"], ["Infrastructure & energy", "/sector-infrastructure-energy"]] },
  { title: "SME Finance & Banking Distribution", links: [["SME finance", "/sme-finance"], ["Equipment finance", "/equipment-finance"], ["Export credit financing", "/eca-financing"]] },
  { title: "Asset Management & Investment Platforms", links: [["Investments", "/investments"], ["Asset management", "/asset-management"], ["Family office", "/family-office"]] },
  { title: "Principal Investments", links: [["Principal investments", "/principal-investments"], ["Aviation finance", "/aviation-business"]] },
];
const footerGroups = [
  { title: "Investment Banking & Capital Raising", links: [["Project finance", "/project-finance"], ["Equity & structuring", "/equity"], ["Mezzanine finance", "/mezzanine"], ["Securitizations", "/securitizations"]] },
  { title: "Government Advisory & Infrastructure Development", links: [["Infrastructure debt refinancing", "/infrastructure-debt-refinancing"], ["Project-specific finance", "/project-specific-finance"], ["Government advisory", "/government-advisory"], ["Infrastructure & energy", "/sector-infrastructure-energy"]] },
  { title: "SME Finance & Banking Distribution", links: [["SME finance", "/sme-finance"], ["Equipment finance", "/equipment-finance"], ["Export credit financing", "/eca-financing"]] },
  { title: "Asset Management & Investment Platforms", links: [["Investments", "/investments"], ["Asset management", "/asset-management"], ["Family office", "/family-office"]] },
  { title: "Principal Investments", links: [["Principal investments", "/principal-investments"], ["Aviation finance", "/aviation-business"]] },
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
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const close = () => { setMenuOpen(false); setExpertiseOpen(false); setAboutOpen(false); };
  const isMobileMenu = () => typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches;
  const handleGroupLink = (event: React.MouseEvent<HTMLAnchorElement>, group: "expertise" | "about") => {
    if (!isMobileMenu()) { close(); return; }
    if (group === "expertise") { close(); return; }
    event.preventDefault();
    setAboutOpen((value) => !value);
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
          <Link className="brand" href="/" aria-label="AFII home" onClick={close}>
            <Image src="/images/afii-logo.png" alt="AFII logo" width={60} height={60} priority className="brand-mark" />
            
          </Link>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <div className={`nav-group ${aboutOpen ? "is-expanded" : ""}`}>
              <div className="nav-group-top" onClick={(event) => { if (isMobileMenu() && !(event.target as HTMLElement).closest("a, button")) setAboutOpen((value) => !value); }}><Link className={isActive("/about-afii") ? "is-active" : ""} href="/about-afii" onClick={(event) => handleGroupLink(event, "about")}>About AFII</Link></div>
              <div className="nav-dropdown nav-dropdown-about">{aboutLinks.filter(([label]) => label !== "Leadership").map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} href={href} key={href} onClick={close}>{label}</Link>)}</div>
            </div>
            
            <div className={`nav-group ${expertiseOpen ? "is-expanded" : ""}`}>
              <div className="nav-group-top" onClick={(event) => { if (isMobileMenu() && !(event.target as HTMLElement).closest("a, button")) setExpertiseOpen((value) => !value); }}><Link className={isActive("/expertise") || pathname.startsWith("/project-") || ["/equity","/mezzanine","/securitizations","/infrastructure-debt-refinancing","/equipment-finance","/eca-financing","/aviation-business","/sme-finance","/asset-management","/family-office","/principal-investments","/government-advisory"].some(isActive) ? "is-active" : ""} href="/expertise" onClick={(event) => handleGroupLink(event, "expertise")}>Expertise</Link></div>
              <div className="nav-dropdown nav-dropdown-expertise"><Link className="nav-mega-title" href="/expertise" onClick={close}>Explore all expertise</Link>{expertiseGroups.map((group) => <section className="nav-mega-group" key={group.title}><Link className="nav-mega-title" href="/expertise" onClick={close}>{group.title}</Link><div className="nav-mega-links">{group.links.map(([label, href]) => <Link className={isActive(href) ? "is-active" : ""} href={href} key={href} onClick={close}>{label}</Link>)}</div></section>)}</div>
            </div>
            <Link className={isActive("/sectors") || pathname.startsWith("/sector-") ? "is-active" : ""} href="/sectors" onClick={close}>Sectors</Link>
            <Link className={isActive("/transactions") ? "is-active" : ""} href="/transactions" onClick={close}>Transactions</Link>
            <Link className={isActive("/offices") ? "is-active" : ""} href="/offices" onClick={close}>Offices</Link>
            <Link className={isActive("/team") ? "is-active" : ""} href="/team" onClick={close}>Leadership</Link>
            
            <Link className="nav-cta" href="/contact" onClick={close}>Discuss a mandate <span>↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const socialLinks = [
    { label: "LinkedIn", mark: "in" },
    { label: "Facebook", mark: "f" },
    { label: "X", mark: "𝕏" },
  ];
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/">
            <Image src="/images/afii-logo.png" alt="AFII logo" width={48} height={48} className="brand-mark" />
            
          </Link>
          <p>Structured Finance &amp;<br />Infrastructure Investments</p>
        </div>
        <div className="footer-directory">
          <div className="footer-directory-group footer-expertise-group">
            <Link className="footer-directory-title" href="/expertise">Expertise</Link>
            {footerGroups.map((group) => (
              <Link className="footer-directory-sbu" href="/expertise" key={group.title}>{group.title}</Link>
            ))}
          </div>
          <div className="footer-directory-group footer-sectors-group">
            <Link className="footer-directory-title" href="/sectors">Sectors</Link>
            <Link href="/sectors">All sectors</Link>
            <Link href="/aviation-business">Aviation</Link>
            <Link href="/sector-infrastructure-energy">Infrastructure &amp; energy</Link>
            <Link href="/sector-commodities-industry">Commodities &amp; industry</Link>
            <Link href="/sector-project-specific-finance">Project-specific finance</Link>
            <Link href="/sector-government-business">Government &amp; business</Link>
          </div>
          <div className="footer-directory-group footer-transactions-group">
            <Link className="footer-directory-title" href="/transactions">Transactions</Link>
            <Link href="/transactions">Selected transactions</Link>
            <Link className="footer-directory-title footer-subtitle" href="/offices">Offices</Link>
            <Link href="/offices">All offices</Link>
          </div>
          <div className="footer-directory-group footer-about-group">
            <Link className="footer-directory-title" href="/about-afii">About AFII</Link>
            {[['About AFII', '/about-afii'], ['Leadership', '/team'], ['Group network', '/group'], ['Virtual data room', '/vdr'], ['Contact', '/contact']].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
        </div>
        <div className="footer-contact">
          <a className="footer-email" href="mailto:reachus@afiicapital.com">reachus@afiicapital.com <span aria-hidden="true">↗</span></a>
          <div className="footer-socials" aria-label="Social media">
            {socialLinks.map((item) => <a key={item.label} href="#" aria-label={item.label} title={item.label} onClick={(event) => event.preventDefault()}>{item.mark}</a>)}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 AFII. All rights reserved.</span>
        <span>Information is provided for general informational purposes only.</span>
        <Link href="/trust">Trust &amp; governance</Link>
      </div>
    </footer>
  );
}
