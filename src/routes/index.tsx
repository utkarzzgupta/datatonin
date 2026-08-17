import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/Cta";
import {
  DataFlowVisual,
  TechBackdrop,
  TransformVisual,
  VerticalPipeline,
} from "@/components/site/visuals";

const TITLE = "Datatonin | AI Data Operations & Annotation";
const DESC =
  "Datatonin provides scalable AI data annotation, image labeling, human validation, and quality assurance services for computer vision and AI workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Datatonin",
          description: DESC,
          email: "hello@datatonin.com",
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

const strip = [
  "IMAGE ANNOTATION",
  "BOUNDING BOXES",
  "OBJECT DETECTION",
  "DATA LABELING",
  "HUMAN VALIDATION",
  "QUALITY ASSURANCE",
];

const services = [
  {
    n: "01",
    title: "Image Annotation",
    copy: "Structured visual labeling for computer vision and machine-learning workflows.",
  },
  {
    n: "02",
    title: "Bounding Box Annotation",
    copy: "Precise object localization for detection and recognition datasets.",
  },
  {
    n: "03",
    title: "Image Classification",
    copy: "Consistent categorization and attribute labeling across visual datasets.",
  },
  {
    n: "04",
    title: "Natural Language Data",
    copy: "Human-written image and object descriptions in US English according to project guidelines.",
  },
  {
    n: "05",
    title: "Human Validation",
    copy: "Human review and validation of AI-generated or machine-labeled data.",
  },
  {
    n: "06",
    title: "Quality Assurance",
    copy: "Structured QA workflows designed to improve consistency and reduce annotation errors.",
  },
];

const pillars = [
  {
    n: "01",
    title: "HUMAN-IN-THE-LOOP",
    copy: "Human judgment where automated systems still need context and precision.",
  },
  {
    n: "02",
    title: "QUALITY-FIRST",
    copy: "Structured review, correction, and validation throughout the annotation lifecycle.",
  },
  {
    n: "03",
    title: "FLEXIBLE CAPACITY",
    copy: "Managed workforce allocation that can adapt to project volume and complexity.",
  },
  {
    n: "04",
    title: "CLIENT-ALIGNED",
    copy: "Workflows designed around your annotation guidelines, tools, formats, and delivery requirements.",
  },
];

const qualityStages = [
  "GUIDELINE ALIGNMENT",
  "CALIBRATION",
  "INDEPENDENT REVIEW",
  "CORRECTION & FINAL VALIDATION",
];

const timeline = [
  ["01", "Requirements"],
  ["02", "Guideline Calibration"],
  ["03", "Pilot Batch"],
  ["04", "Production"],
  ["05", "QA Review"],
  ["06", "Final Delivery"],
];

const useCases = [
  ["COMPUTER VISION", "Object detection, classification, and visual recognition datasets."],
  ["AI TRAINING DATA", "Structured datasets for machine-learning workflows."],
  ["IMAGE UNDERSTANDING", "Visual descriptions, attributes, and categorization."],
  ["HUMAN VALIDATION", "Human review for AI-generated and machine-labeled data."],
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-48">
        <TechBackdrop />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">AI Data Operations</p>
            <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-7xl">
              Human-powered data for{" "}
              <span className="text-gradient">intelligent machines.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Datatonin delivers scalable image annotation, data labeling, natural-language
              description, and human validation services for computer vision and AI workflows.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_44px_-8px_var(--glow)]"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-16">
            <DataFlowVisual />
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY STRIP */}
      <div className="border-y border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
          {strip.map((s, i) => (
            <div key={s} className="flex items-center gap-8">
              {i > 0 && <span className="hidden h-3 w-px bg-border sm:block" />}
              <span className="mono-label">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            title="AI is only as good as the data behind it."
            copy="Datatonin helps AI teams transform raw visual and language data into structured, validated datasets through organized human-in-the-loop workflows."
          />
          <Reveal delay={100}>
            <TransformVisual />
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section tone="raised">
        <SectionHeader eyebrow="What we do" title="Data operations built for AI." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="surface-card group h-full p-7">
                <div className="flex items-start justify-between">
                  <span className="mono-label text-primary">{s.n}</span>
                  <span className="relative h-8 w-8">
                    <span className="absolute inset-0 rounded-md border border-border transition-colors group-hover:border-primary/50" />
                    <span className="absolute left-1.5 top-1.5 h-2 w-2 border-l border-t border-primary/70" />
                    <span className="absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-primary/70" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            to="/services"
            className="mono-label text-primary transition-opacity hover:opacity-70"
          >
            View all services →
          </Link>
        </Reveal>
      </Section>

      {/* WHY */}
      <Section>
        <SectionHeader title="Built around precision." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div className="surface-card h-full p-8">
                <span className="mono-label text-primary">{p.n}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PIPELINE */}
      <Section tone="raised" className="overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative">
          <SectionHeader
            align="center"
            eyebrow="Pipeline"
            title="From raw data to AI-ready datasets."
          />
          <div className="mt-16">
            <VerticalPipeline
              stages={[
                "RAW IMAGES",
                "GUIDELINES",
                "ANNOTATION",
                "QA",
                "VALIDATION",
                "AI-READY DATA",
              ]}
              captions={[
                "Unstructured source material enters the workflow.",
                "Project rules, edge cases, and labeling conventions.",
                "Structured labeling by trained annotators.",
                "Independent review against the guidelines.",
                "Corrections confirmed and signed off.",
                "Structured output delivered in your format.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* QUALITY */}
      <Section className="bg-background">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Quality control"
            title="Quality is a workflow, not a final check."
            copy="Every production workflow can be structured around clear guidelines, calibration, independent review, correction, and final validation."
          />
          <div className="space-y-4">
            {qualityStages.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="surface-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="mono-label text-primary">{`0${i + 1}`}</span>
                    <span className="text-sm font-medium tracking-wide">{s}</span>
                  </div>
                  <div className="mt-4 h-px w-full overflow-hidden bg-border">
                    <div
                      className="h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                      style={{ animation: `dt-flow ${6 + i}s linear infinite` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section tone="raised">
        <SectionHeader
          title="Designed to scale from pilot to production."
          copy="We recommend beginning with a controlled pilot to validate annotation requirements, quality expectations, throughput, and commercial assumptions before scaling."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map(([n, label], i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="surface-card relative h-full overflow-hidden p-7">
                <span className="mono-label text-primary">{n}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{label}</h3>
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            to="/how-we-work"
            className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
          >
            Start a Pilot
          </Link>
        </Reveal>
      </Section>

      {/* WORKFORCE */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            title="Human capacity, organized for scale."
            copy="Datatonin operates through a managed annotation workforce that can be organized into production, quality-review, and project-coordination functions according to project requirements."
          />
          <Reveal delay={100}>
            <div className="relative rounded-2xl border border-border bg-surface/50 p-8">
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
              <ul className="relative space-y-3">
                {["PROJECT MANAGEMENT", "PRODUCTION TEAM", "QUALITY REVIEW", "FINAL DELIVERY"].map(
                  (n, i) => (
                    <li key={n}>
                      <div className="rounded-xl border border-border bg-background/60 px-5 py-4 text-center text-sm font-medium tracking-[0.16em]">
                        {n}
                      </div>
                      {i < 3 && (
                        <div className="mx-auto h-6 w-px bg-gradient-to-b from-primary/70 to-transparent" />
                      )}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* USE CASES */}
      <Section tone="raised">
        <SectionHeader title="Supporting the data layer behind AI." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {useCases.map(([t, c], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="surface-card group relative h-full overflow-hidden p-8">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-20 transition-opacity group-hover:opacity-40" />
                <h3 className="relative text-xl font-semibold tracking-[0.12em]">{t}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />

      {/* ABOUT */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="About"
            title="Building dependable human infrastructure for AI."
            copy="Datatonin is an emerging AI data operations company focused on the human side of machine learning. We organize annotation and quality-review workflows around clear standards to help AI teams turn raw data into structured, usable datasets."
          />
          <Reveal delay={100} className="grid gap-4 sm:grid-cols-3">
            {["PRECISION", "CONSISTENCY", "SCALABILITY"].map((p) => (
              <div
                key={p}
                className="surface-card flex aspect-square items-center justify-center p-4 text-center text-xs font-medium tracking-[0.2em]"
              >
                {p}
              </div>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
