"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const slides = [
  { image: "/images/hero-transit.jpg", kicker: "INDEPENDENT THINKING. STRUCTURED SOLUTIONS.", first: "Capital for", emphasis: "what comes next.", text: "Structured finance and investment advisory for complex projects, essential assets and cross-border opportunities." },
  { image: "/images/hero-building-alt.jpg", kicker: "FINANCE BUILT AROUND THE PROJECT.", first: "Structures that", emphasis: "move projects forward.", text: "Financial, legal and commercial perspectives brought together around the realities of each mandate." },
  { image: "/images/hero-finance.jpg", kicker: "CAPITAL. COMMERCE. CONNECTIVITY.", first: "A clearer view of", emphasis: "complex finance.", text: "Advisory capabilities across project finance, capital goods and structured financing solutions." },
  { image: "/images/hero-infrastructure.jpg", kicker: "LONG-TERM THINKING. REAL-WORLD ASSETS.", first: "Backing the assets", emphasis: "that matter.", text: "A cross-border perspective on infrastructure, energy, transportation and industrial opportunities." },
];

const services = [
  { number: "01", eyebrow: "PROJECT & STRUCTURED FINANCE", title: "Project finance", text: "Financial, legal and business structuring for greenfield and brownfield projects, shaped around project fundamentals and long-term objectives.", href: "/project-finance", image: "/images/project-finance-feature.jpg" },
  { number: "02", eyebrow: "EXPORT CREDIT & CAPITAL GOODS", title: "Equipment finance", text: "Financing structures for capital equipment across renewables, industrial machinery, aircraft and marine applications.", href: "/equipment-finance", image: "/images/equipment-finance-feature.jpg" },
  { number: "03", eyebrow: "EXPORT CREDIT AGENCY", title: "Export credit financing", text: "Export credit-supported structures for eligible capital goods and infrastructure requirements.", href: "/eca-financing", image: "/images/eca-financing-feature.webp" },
  { number: "04", eyebrow: "ENERGY & TRANSITION", title: "Energy and infrastructure", text: "Advisory perspectives across essential infrastructure, renewable energy and long-term asset development.", href: "/sectors", image: "/images/sectors-feature.jpg" },
];
const sectors = [
  ["01", "Aviation", "Aircraft acquisition, airport development and maintenance infrastructure.", "/aviation-business"],
  ["02", "Infrastructure", "Energy, railways, roads, ports and associated project or equipment finance.", "/project-finance"],
  ["03", "Industry & commodities", "Industrial assets, capital goods and manufacturing projects.", "/equipment-finance"],
  ["04", "Financial services", "Structured instruments, asset-backed approaches and cross-border finance.", "/securitizations"],
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [approachVisible, setApproachVisible] = useState(false);
  const approachCardsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 3800);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const node = approachCardsRef.current;
    if (!node || approachVisible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setApproachVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -35px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [approachVisible]);
  const slide = slides[activeSlide];
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="home" aria-label="AFII Capital introduction">
        <div className="hero-image-wrap" key={slide.image}>
          <Image src={slide.image} alt="Architecture and infrastructure representing AFII Capital's work" fill priority sizes="100vw" className="hero-image" />
          <div className="hero-shade"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-kicker"><span></span>{slide.kicker}</div>
          <h1>{slide.first}<br /><em>{slide.emphasis}</em></h1>
          <div className="hero-bottom"><p>{slide.text}</p><Link className="button button-light" href="/project-finance">Explore our expertise <span>↘</span></Link></div>
          <div className="hero-index"><span>AFII CAPITAL PARTNERS</span><div className="slide-controls" aria-label="Hero slides">{slides.map((item, index) => <button type="button" key={item.image} aria-label={`Show slide ${index + 1}`} aria-current={activeSlide === index ? "true" : undefined} className={activeSlide === index ? "slide-dot active" : "slide-dot"} onClick={() => setActiveSlide(index)} />)}</div><span><strong>{String(activeSlide + 1).padStart(2, "0")}</strong><i> / </i>04</span></div>
        </div>
      </section>

      <section className="intro section-pad" id="approach">
        <div className="container intro-grid"><div><div className="eyebrow"><span></span> OUR APPROACH</div><h2>Complex challenges.<br /><em>Considered solutions.</em></h2></div><div className="intro-copy"><p>AFII Capital Partners advises on structured project finance and infrastructure investment across industrial, financial services and agribusiness sectors.</p><p>Building on the legacy of AFII Corp and more than two decades of corporate advisory experience, AFII brings financial structuring and cross-border execution perspectives to complex mandates.</p><Link className="text-link" href="/about-afii">Discover AFII <span>↗</span></Link></div></div>
        <div ref={approachCardsRef} className={`container approach-cards${approachVisible ? " is-visible" : ""}`}>
          <article className="approach-card">
            <div className="approach-card-image"><Image src="/images/approach-target.jpg" alt="Aiming for a clear strategic objective" fill sizes="(max-width: 760px) 100vw, 22vw" /></div>
            <div className="approach-card-content"><div className="approach-card-top"><span>01</span></div>
            <h3>Commercial perspective</h3>
            <p>Start with the project's purpose, counterparties and operating realities—not a pre-set financing template.</p>
            <span className="approach-card-foot">Understand the context <b>↗</b></span></div>
          </article>
          <article className="approach-card">
            <div className="approach-card-image"><Image src="/images/approach-workshop.jpg" alt="People collaborating around a table of ideas" fill sizes="(max-width: 760px) 100vw, 22vw" /></div>
            <div className="approach-card-content"><div className="approach-card-top"><span>02</span></div>
            <h3>Structured thinking</h3>
            <p>Bring financial, legal and business considerations together to explore a structure suited to the mandate.</p>
            <span className="approach-card-foot">Shape the structure <b>↗</b></span></div>
          </article>
          <article className="approach-card">
            <div className="approach-card-image"><Image src="/images/approach-markets.jpg" alt="Market data used to understand international financial trends" fill sizes="(max-width: 760px) 100vw, 22vw" /></div>
            <div className="approach-card-content"><div className="approach-card-top"><span>03</span></div>
            <h3>Cross-border outlook</h3>
            <p>Consider international counterparties, jurisdictions and execution requirements from the outset.</p>
            <span className="approach-card-foot">Connect the perspectives <b>↗</b></span></div>
          </article>
        </div>
      </section>

      <section className="expertise section-pad" id="expertise"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span></span> WHAT WE DO</div><h2>Finance with <em>purpose.</em></h2></div><p>Advisory and financing capabilities shaped around the needs of projects, businesses and assets.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><Link href={service.href} className="service-image" aria-label={`Learn more about ${service.title}`}><Image src={service.image} alt="" fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className="image-arrow">↗</span></Link><div className="service-meta"><span>{service.number}</span><span>{service.eyebrow}</span></div><h3>{service.title}</h3><p>{service.text}</p><Link className="text-link" href={service.href}>Explore this area <span>↗</span></Link></article>)}</div></div></section>

      <section className="sectors section-pad" id="sectors"><div className="container sectors-layout"><div className="sectors-heading"><div className="eyebrow eyebrow-light"><span></span> WHERE WE WORK</div><h2>Essential sectors.<br /><em>Real economies.</em></h2><p>AFII's sector experience includes transportation, energy, infrastructure and industrial assets.</p><Link className="button button-outline" href="/sectors">View sectors <span>↗</span></Link></div><div className="sector-list">{sectors.map(([number, title, text, href]) => <Link className="sector-item" href={href} key={number}><span className="sector-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="sector-arrow">↗</span></Link>)}</div></div></section>

      <section className="image-story"><div className="story-image"><Image src="/images/city-infrastructure.jpg" alt="Contemporary infrastructure and commercial buildings" fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="story-copy"><div className="eyebrow"><span></span> A CROSS-BORDER PERSPECTIVE</div><h2>Local understanding.<br /><em>International reach.</em></h2><p>AFII Capital Partners is part of an international network of independent advisory firms, with teams and partners spanning Europe, the Middle East and Asia.</p><Link className="text-link" href="/group">Explore our group <span>↗</span></Link></div></section>

      <section className="field-notes section-pad" id="meetings">
        <div className="container">
          <div className="section-heading field-notes-heading">
            <div><div className="eyebrow">MEETINGS, MARKETS &amp; MOMENTUM</div><h2>Ideas move forward<br /><em>in conversation.</em></h2></div>
            <div className="field-notes-intro"><p>A visual look at the sectors, places and market themes around AFII's work. This gallery is ready to grow with photographs from future meetings, summits and project milestones.</p><Link className="text-link" href="/contact">Connect with AFII <span>↗</span></Link></div>
          </div>
          <div className="field-notes-grid">
            <article className="field-note field-note-feature">
              <div className="field-note-image"><Image src="/images/engagement-desk.jpg" alt="Finance publications on a working desk" fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
              <div className="field-note-caption"><span>01 / FINANCE & ADVISORY</span><h3>Research, perspective and preparation</h3></div>
            </article>
            <article className="field-note">
              <div className="field-note-image"><Image src="/images/engagement-windfarm.jpg" alt="Wind turbines across a mountain landscape" fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
              <div className="field-note-caption"><span>02 / ENERGY &amp; INFRASTRUCTURE</span><h3>Backing essential infrastructure</h3></div>
            </article>
            <article className="field-note">
              <div className="field-note-image"><Image src="/images/engagement-workshop.jpg" alt="Colleagues collaborating around ideas at a workshop" fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
              <div className="field-note-caption"><span>03 / STRATEGIC DISCUSSIONS</span><h3>Progress starts with a conversation</h3></div>
            </article>
          </div>
        </div>
      </section>

      <section className="office-preview section-pad" id="offices">
        <div className="container">
          <div className="section-heading office-preview-heading">
            <div><div className="eyebrow"><span></span> OFFICES &amp; CONTACTS</div><h2>Local presence.<br /><em>Cross-border perspective.</em></h2></div>
            <p>Find AFII Capital’s published headquarters, registered office and regional advisory contacts.</p>
          </div>
          <div className="office-preview-grid office-preview-grid-five">
            <Link href="/offices" className="office-preview-card"><div className="office-preview-image"><Image src="/images/office-london.jpg" alt="Representative city and infrastructure imagery for the UK network" fill sizes="(max-width: 760px) 100vw, 20vw" /></div><span className="office-preview-city">United Kingdom</span><span className="office-preview-link">Headquarters ↗</span></Link>
            <Link href="/offices" className="office-preview-card"><div className="office-preview-image"><Image src="/images/office-germany.jpg" alt="Representative commercial architecture for the German network" fill sizes="(max-width: 760px) 100vw, 20vw" /></div><span className="office-preview-city">Germany</span><span className="office-preview-link">Registered office ↗</span></Link>
            <Link href="/offices" className="office-preview-card"><div className="office-preview-image"><Image src="/images/office-delhi.jpg" alt="AFII India back-office building in New Delhi" fill sizes="(max-width: 760px) 100vw, 20vw" /></div><span className="office-preview-city">New Delhi, India</span><span className="office-preview-link">India back office ↗</span></Link>
            <Link href="/offices" className="office-preview-card"><div className="office-preview-image"><Image src="/images/office-mumbai.jpg" alt="Mumbai city skyline used for infrastructure advisory" fill sizes="(max-width: 760px) 100vw, 20vw" /></div><span className="office-preview-city">Mumbai, India</span><span className="office-preview-link">Infrastructure advisory ↗</span></Link>
            <Link href="/offices" className="office-preview-card"><div className="office-preview-image"><Image src="/images/office-uae.jpg" alt="UAE infrastructure development imagery" fill sizes="(max-width: 760px) 100vw, 20vw" /></div><span className="office-preview-city">United Arab Emirates</span><span className="office-preview-link">Middle East ↗</span></Link>
          </div>
        </div>
      </section>

      <section className="transaction-teaser section-pad"><div className="container transaction-teaser-inner"><div><div className="eyebrow">SELECTED EXPERIENCE</div><h2>Experience across<br /><em>complex mandates.</em></h2></div><div><p>AFII's published track record spans infrastructure, energy, aviation, healthcare, water and financial services, including joint ventures, development projects and structured financing.</p><Link className="text-link" href="/transactions">Explore transactions <span>↗</span></Link></div></div></section>
      <section className="contact-cta"><div className="container contact-inner"><div className="eyebrow eyebrow-light"><span></span> START A CONVERSATION</div><h2>Have a project<br />to <em>structure?</em></h2><p>Tell us about your mandate. We’ll connect you with the appropriate team.</p><Link className="button button-gold" href="/contact">Discuss a mandate <span>↗</span></Link></div></section>
      <SiteFooter />
    </main>
  );
}
