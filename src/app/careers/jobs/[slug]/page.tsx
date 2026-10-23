import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Arrow, DemoNotice } from "@/components/careers/CareerIcons";
import { careerJobs, getCareerJob } from "@/lib/afii-careers-data";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return careerJobs.map(job => ({ slug: job.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getCareerJob((await params).slug);
  if (!job) return { title: "Role not found | AFII Careers", robots: { index: false } };
  return { title: `${job.title} — Sample role | AFII Group Careers`, description: `Illustrative job description: ${job.title} in ${job.city}, ${job.country}. Not an active vacancy.`, robots: { index: false, follow: true } };
}
export default async function CareerJobDetail({ params }: Props) {
  const job = getCareerJob((await params).slug);
  if (!job) notFound();
  return <main className="afii-careers"><SiteHeader />
    <section className="ac-job-hero"><div className="container"><div className="ac-breadcrumb"><Link href="/careers">Careers</Link><span>/</span><Link href="/careers/opportunities">Opportunities</Link><span>/</span><span>{job.id}</span></div><span className="ac-eyebrow ac-eyebrow-on-dark">{job.department.toUpperCase()} / SAMPLE JOB DESCRIPTION</span><h1>{job.title}</h1><div className="ac-job-hero-tags"><span>{job.city}, {job.country}</span><span>{job.type}</span><span>{job.mode}</span><span>{job.level}</span></div><p>{job.summary}</p></div></section>
    <section className="ac-job-detail"><div className="container"><DemoNotice compact /><div className="ac-job-detail-grid"><article className="ac-job-description"><div className="ac-detail-section"><span className="ac-eyebrow">THE OPPORTUNITY</span><h2>About this position</h2><p>{job.introduction}</p></div><div className="ac-detail-section"><span className="ac-eyebrow">WHAT YOU COULD DO</span><h2>Key responsibilities</h2><ul>{job.responsibilities.map(x => <li key={x}>{x}</li>)}</ul></div><div className="ac-detail-section"><span className="ac-eyebrow">WHAT YOU BRING</span><h2>Qualifications & experience</h2><ul>{job.requirements.map(x => <li key={x}>{x}</li>)}</ul></div><div className="ac-detail-section"><span className="ac-eyebrow">SKILLS</span><h2>Relevant capabilities</h2><div className="ac-job-tags">{job.skills.map(x => <span className="ac-tag" key={x}>{x}</span>)}</div></div><div className="ac-equal-note"><strong>Recruitment integrity</strong><p>AFII will not request recruitment or security-deposit fees. Any live posting should clearly identify the employing legal entity, location, employment terms and relevant privacy notice. Local employment eligibility and requirements will be disclosed in approved postings.</p></div></article><aside className="ac-detail-sidebar"><div className="ac-detail-card"><p className="ac-eyebrow">POSITION OVERVIEW</p><h3>Role information</h3><dl><dt>Reference</dt><dd>{job.id}</dd><dt>Group company / network</dt><dd>{job.company}</dd><dt>Location</dt><dd>{job.city}, {job.country}</dd><dt>Department</dt><dd>{job.department}</dd><dt>Employment type</dt><dd>{job.type}</dd><dt>Level</dt><dd>{job.level}</dd><dt>Example experience range</dt><dd>{job.experienceMin}–{job.experienceMax} years</dd><dt>Work arrangement</dt><dd>{job.mode}</dd><dt>Status</dt><dd>Demonstration only</dd></dl><a className="ac-button ac-button-dark ac-button-wide ac-apply-entry" href={`/careers/jobs/${job.slug}/apply`}>Try application preview <Arrow /></a><p className="ac-detail-small">The preview form does not submit personal information to AFII or ERPNext.</p></div><div className="ac-sidebar-back"><Link href="/careers/opportunities">← Back to all example roles</Link></div></aside></div></div></section><SiteFooter /></main>;
}
