import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import ApplicationPreview from "@/components/careers/ApplicationPreview";
import { careerJobs, getCareerJob } from "@/lib/afii-careers-data";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return careerJobs.map(job => ({ slug: job.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getCareerJob((await params).slug);
  return { title: `${job?.title ?? "Application"} | Application Preview | AFII Careers`, robots: { index: false, follow: false } };
}
export default async function ApplyPage({ params }: Props) {
  const job = getCareerJob((await params).slug);
  if (!job) notFound();
  return <main className="afii-careers"><SiteHeader /><section className="ac-apply-top"><div className="container"><div className="ac-breadcrumb"><Link href="/careers">Careers</Link><span>/</span><Link href="/careers/opportunities">Opportunities</Link><span>/</span><Link href={`/careers/jobs/${job.slug}`}>{job.title}</Link><span>/</span><span>Application preview</span></div><p className="ac-eyebrow ac-eyebrow-on-dark">AFII GROUP · CAREER PORTAL DEMONSTRATION</p><h1>Application <em>preview.</em></h1><p>Explore a proposed applicant journey for {job.title}. This is a non-operational demonstration, not a real recruitment submission.</p></div></section><section className="ac-apply-section"><div className="container"><ApplicationPreview job={job} /></div></section><SiteFooter /></main>;
}
