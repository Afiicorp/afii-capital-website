"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const slides = [
  { image: "/images/hero-transit.jpg", kicker: "INDEPENDENT THINKING. STRUCTURED SOLUTIONS.", first: "Capital for", emphasis: "what comes next.", text: "Structured finance and investment advisory for complex projects, essential assets and cross-border opportunities." },
  { image: "/images/hero-building-alt.jpg", kicker: "FINANCE BUILT AROUND THE PROJECT.", first: "Structures that", emphasis: "move projects forward.", text: "Financial, legal and commercial perspectives brought together around the realities of each mandate." },
  { image: "/images/hero-finance.jpg", kicker: "CAPITAL. COMMERCE. CONNECTIVITY.", first: "A clearer view of", emphasis: "complex finance.", text: "Advisory capabilities across project finance, capital goods, trade and structured financing solutions." },
  { image: "/images/hero-infrastructure.jpg", kicker: "LONG-TERM THINKING. REAL-WORLD ASSETS.", first: "Backing the assets", emphasis: "that matter.", text: "A cross-border perspective on infrastructure, energy, transportation and industrial opportunities." },
];

const services = [
  { number: "01", eyebrow: "PROJECT & STRUCTURED FINANCE", title: "Project finance", text: "Financial, legal and business structuring for greenfield and brownfield projects, shaped around project fundamentals and long-term objectives.", href: "/project-finance", image: "/images/stock-exchange.jpg" },
  { number: "02", eyebrow: "EXPORT CREDIT & CAPITAL GOODS", title: "Equipment finance", text: "Financing structures for capital equipment across renewables, industrial machinery, aircraft and marine applications.", href: "/equipment-finance", image: "/images/equipment-powerlines.jpg" },
  { number: "03", eyebrow: "TRADE & WORKING CAPITAL", title: "Trade finance", text: "Structured solutions designed around trade flows, receivables and the commercial requirements of businesses.", href: "/trade-finance", image: "/images/hero-finance.jpg" },
  { number: "04", eyebrow: "ENERGY & TRANSITION", title: "Energy and infrastructure", text: "Advisory perspectives across essential infrastructure, renewable energy and long-term asset development.", href: "/sectors", image: "/images/energy-reactor.jpg" },
];
const sectors = [
  ["01", "Aviation", "Aircraft acquisition, airport development and maintenance infrastructure."],
  ["02", "Infrastructure", "Energy, railways, roads, ports and associated project or equipment finance."],
  ["03", "Industry & commodities", "Industrial assets, capital goods and trade receivables securitisation."],
  ["04", "Financial services", "Structured instruments, asset-backed approaches and cross-border finance."],
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 3800);
    return () => window.clearInterval(timer);
  }, []);
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
        <div className="container intro-grid"><div><div className="eyebrow"><span></span> OUR APPROACH</div><h2>Complex challenges.<br /><em>Considered solutions.</em></h2></div><div className="intro-copy"><p>AFII Capital Partners specialises in structured project and trade finance solutions across infrastructure, industrial, financial services and agribusiness sectors.</p><p>Building on the legacy of AFII Corp and more than two decades of corporate advisory experience, AFII brings financial structuring and cross-border execution perspectives to complex mandates.</p><Link className="text-link" href="/about-afii">Discover AFII <span>↗</span></Link></div></div>
        <div className="container principle-row"><div><span>01</span><strong>Commercial perspective</strong></div><div><span>02</span><strong>Structured thinking</strong></div><div><span>03</span><strong>Cross-border outlook</strong></div></div>
      </section>

      <section className="expertise section-pad" id="expertise"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span></span> WHAT WE DO</div><h2>Finance with <em>purpose.</em></h2></div><p>Advisory and financing capabilities shaped around the needs of projects, businesses and assets.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><Link href={service.href} className="service-image" aria-label={`Learn more about ${service.title}`}><Image src={service.image} alt="" fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className="image-arrow">↗</span></Link><div className="service-meta"><span>{service.number}</span><span>{service.eyebrow}</span></div><h3>{service.title}</h3><p>{service.text}</p><Link className="text-link" href={service.href}>Explore this area <span>↗</span></Link></article>)}</div></div></section>

      <section className="sectors section-pad" id="sectors"><div className="container sectors-layout"><div className="sectors-heading"><div className="eyebrow eyebrow-light"><span></span> WHERE WE WORK</div><h2>Essential sectors.<br /><em>Real economies.</em></h2><p>AFII's sector experience includes transportation, energy, infrastructure, industrial assets and structured trade finance.</p><Link className="button button-outline" href="/sectors">View sectors <span>↗</span></Link></div><div className="sector-list">{sectors.map(([number, title, text]) => <Link className="sector-item" href="/sectors" key={number}><span className="sector-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="sector-arrow">↗</span></Link>)}</div></div></section>

      <section className="image-story"><div className="story-image"><Image src="/images/infrastructure-building.jpg" alt="Contemporary infrastructure and commercial buildings" fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="story-copy"><div className="eyebrow"><span></span> A CROSS-BORDER PERSPECTIVE</div><h2>Local understanding.<br /><em>International reach.</em></h2><p>AFII Capital Partners is part of an international network of independent advisory firms, with teams and partners spanning Europe, the Middle East and Asia.</p><Link className="text-link" href="/group">Explore our group <span>↗</span></Link></div></section>

      <section className="transaction-teaser section-pad"><div className="container transaction-teaser-inner"><div><div className="eyebrow"><span></span> SELECTED EXPERIENCE</div><h2>Experience across<br /><em>complex mandates.</em></h2></div><div><p>AFII's published track record spans infrastructure, energy, aviation, healthcare, water and financial services, including joint ventures, development projects and structured financing.</p><Link className="text-link" href="/transactions">Explore transactions <span>↗</span></Link></div></div></section>
      <section className="contact-cta"><div className="container contact-inner"><div className="eyebrow eyebrow-light"><span></span> START A CONVERSATION</div><h2>Have a project<br />to <em>structure?</em></h2><p>Tell us about your mandate. We’ll connect you with the appropriate team.</p><Link className="button button-gold" href="/contact">Discuss a mandate <span>↗</span></Link></div></section>
      <SiteFooter />
    </main>
  );
}
