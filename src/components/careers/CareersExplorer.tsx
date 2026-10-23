"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { careerJobs, companies, countries, departments, jobTypes, levels, workModes } from "@/lib/afii-careers-data";
import { Arrow, CareerTag, DemoNotice } from "./CareerIcons";

type SearchState = { q: string; country: string; company: string; department: string; type: string; level: string; mode: string; category: string; years: string; sort: string };
const defaults: SearchState = { q: "", country: "", company: "", department: "", type: "", level: "", mode: "", category: "", years: "", sort: "relevant" };
const filters: { key: keyof SearchState; name: string; options: string[] }[] = [
  { key: "country", name: "Country", options: countries },
  { key: "company", name: "Group company / network", options: companies },
  { key: "department", name: "Department", options: departments },
  { key: "type", name: "Employment type", options: jobTypes },
  { key: "level", name: "Experience level", options: levels },
  { key: "mode", name: "Working arrangement", options: workModes },
];

export default function CareersExplorer() {
  const [query, setQuery] = useState<SearchState>(defaults);
  const [ready, setReady] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery({ ...defaults, ...Object.fromEntries(Object.keys(defaults).filter(k => params.has(k)).map(k => [k, params.get(k) || ""])) });
    setReady(true);
  }, []);
  // React state updates stay pure. Sync the address bar only after commit,
  // rather than calling window.history within the state updater (Next Router warning).
  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value && value !== defaults[key as keyof SearchState]) params.set(key, value);
    }
    const search = params.toString();
    const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}`;
    if (`${window.location.pathname}${window.location.search}` !== nextUrl) {
      window.history.replaceState(window.history.state, "", nextUrl);
    }
  }, [query, ready]);
  const change = (key: keyof SearchState, value: string) => {
    setQuery(prev => ({ ...prev, [key]: value }));
  };
  const clear = () => setQuery({ ...defaults });
  const experienceOptions = Array.from({ length: 51 }, (_, i) => (i / 2).toString());
  const yearsLabel = (value: string) => `${value} ${value === "1" ? "year" : "years"}`;
  const results = useMemo(() => {
    const text = query.q.trim().toLocaleLowerCase();
    const arr = careerJobs.filter(job => {
      if (query.country && job.country !== query.country) return false;
      if (query.company && job.company !== query.company) return false;
      if (query.department && job.department !== query.department) return false;
      if (query.type && job.type !== query.type) return false;
      if (query.level && job.level !== query.level) return false;
      if (query.mode && job.mode !== query.mode) return false;
      if (query.category && job.category !== query.category) return false;
      if (query.years !== "") {
        const years = Number(query.years);
        if (!Number.isFinite(years) || years < job.experienceMin || years > job.experienceMax) return false;
      }
      return !text || [job.title, job.id, job.company, job.city, job.country, job.department, job.summary, ...job.skills].join(" ").toLowerCase().includes(text);
    });
    if (query.sort === "az") arr.sort((a, b) => a.title.localeCompare(b.title));
    if (query.sort === "location") arr.sort((a, b) => a.country.localeCompare(b.country));
    return arr;
  }, [query]);
  const count = Object.entries(query).filter(([k, v]) => k !== "q" && k !== "sort" && v).length;
  return (
    <div className="ac-explorer">
      <DemoNotice compact />
      <div className="ac-searchbar">
        <div className="ac-searchfield"><span aria-hidden="true">⌕</span><label className="ac-sr-only" htmlFor="ac-keywords">Search job title, keyword or job ID</label><input id="ac-keywords" autoComplete="off" placeholder="Job title, keyword, skill or job ID" value={query.q} onChange={e => change("q", e.target.value)} /></div>
        <button className="ac-filter-mobile-button" type="button" aria-expanded={mobileFilters} onClick={() => setMobileFilters(v => !v)}>Filters {count > 0 ? `(${count})` : ""}</button>
        <div className="ac-search-count">{ready ? results.length : careerJobs.length} illustrative {results.length === 1 ? "role" : "roles"}</div>
      </div>
      <div className="ac-search-layout">
        <aside className={`ac-filter-panel ${mobileFilters ? "is-open" : ""}`} aria-label="Job filters">
          <div className="ac-filter-top"><h2>Refine your search</h2><button type="button" onClick={clear}>Clear all</button></div>
          {filters.map(f => <label className="ac-filter-control" key={f.key}><span>{f.name}</span><select value={query[f.key]} onChange={e => change(f.key, e.target.value)}><option value="">All {f.name === "Country" ? "countries" : f.name === "Group company / network" ? "companies" : f.name === "Department" ? "departments" : "options"}</option>{f.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}</select></label>)}
          <label className="ac-filter-control ac-years-filter"><span>Years of experience (0–25)</span><select value={query.years} onChange={e => change("years", e.target.value)}><option value="">Any experience</option>{experienceOptions.map(value => <option value={value} key={value}>{yearsLabel(value)}</option>)}</select><small>0.5-year intervals · matches example role ranges</small></label>
          <fieldset className="ac-career-stage"><legend>Career stage</legend>{["Experienced", "Early careers", "Internships"].map(x => <label key={x}><input type="radio" name="career-stage" checked={query.category === x} onChange={() => change("category", x)} />{x}</label>)}<label><input type="radio" name="career-stage" checked={!query.category} onChange={() => change("category", "")} />All career stages</label></fieldset>
        </aside>
        <div className="ac-results-pane">
          <div className="ac-results-bar"><div><span className="ac-eyebrow">OPPORTUNITY DIRECTORY</span><h2>{results.length} sample {results.length === 1 ? "position" : "positions"}</h2></div><label className="ac-sort">Sort by <select value={query.sort} onChange={e => change("sort", e.target.value)}><option value="relevant">Relevance</option><option value="az">Job title A–Z</option><option value="location">Country A–Z</option></select></label></div>
          {count > 0 && <div className="ac-active-filters">{Object.entries(query).filter(([k, v]) => k !== "sort" && k !== "q" && v).map(([k, v]) => <button type="button" key={k} onClick={() => change(k as keyof SearchState, "")}>{k === "years" ? yearsLabel(v) : v} <span aria-hidden="true">×</span></button>)}</div>}
          {results.length ? <div className="ac-job-list">{results.map(job => <article className="ac-job-row" key={job.id}><div className="ac-job-main"><div className="ac-job-meta"><span>{job.department.toUpperCase()}</span><span>·</span><span>{job.id}</span></div><h3><Link href={`/careers/jobs/${job.slug}`}>{job.title} <Arrow diagonal /></Link></h3><p className="ac-job-desc">{job.summary}</p><p className="ac-job-entity">{job.company}</p><div className="ac-job-tags"><CareerTag>{job.city}, {job.country}</CareerTag><CareerTag>{job.type}</CareerTag><CareerTag>{job.level}</CareerTag><CareerTag>{job.experienceMin}–{job.experienceMax} yrs (demo)</CareerTag><CareerTag>{job.mode}</CareerTag></div></div><Link className="ac-job-button" href={`/careers/jobs/${job.slug}`} aria-label={`View sample job description for ${job.title}`}>View role <Arrow /></Link></article>)}</div> : <div className="ac-zero"><div className="ac-zero-mark">⌕</div><h3>No matching example roles</h3><p>Try another country, company or keyword. Live openings will be added after recruitment integration.</p><button type="button" onClick={clear}>Reset filters <Arrow /></button></div>}
          <div className="ac-search-bottom"><p>Roles shown here are for layout and workflow testing only. An approved job opening in the AFII HRMS will replace the demo dataset at launch.</p><Link href="/careers">About careers at AFII <Arrow /></Link></div>
        </div>
      </div>
    </div>
  );
}
