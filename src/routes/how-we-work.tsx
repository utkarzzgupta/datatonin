import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { VerticalPipeline } from "@/components/site/visuals";
import { CtaBand } from "@/components/site/Cta";

const TITLE = "How We Work | Datatonin Annotation Workflow";
const DESC =
  "From client requirements and guideline setup through calibration, pilot, production, QA, correction, final validation, and delivery.";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-we-work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-we-work" }],
  }),
  component: HowWeWorkPage,
});

const stages = [
  "Client Requirements",
  "Guideline Setup",
  "Calibration",
  "Pilot",
  "Production",
  "QA",
  "Correction",
  "Final Validation",
  "Delivery",
];

const captions = [
  "Scope, formats, volumes, and quality expectations.",
  "Written rules, class definitions, and edge cases.",
  "Alignment batches before production begins.",
  "A controlled batch that validates assumptions.",
  "Scaled annotation with managed capacity.",
  "Independent review against the guidelines.",
  "Rework of flagged items and guideline updates.",
  "Closing pass on the corrected batch.",
  "Structured output in the agreed format.",
];

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Designed to scale from pilot to production."
        copy="We recommend beginning with a controlled pilot to validate annotation requirements, quality expectations, throughput, and commercial assumptions before scaling."
      />

      <Section className="pt-4">
        <VerticalPipeline stages={stages} captions={captions} />
      </Section>

      <Section tone="raised">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Tooling"
            title="Designed to work with your existing tools."
            copy="Projects can be structured around client-provided platforms or established annotation environments depending on project requirements."
          />
          <Reveal delay={100} className="grid gap-4 sm:grid-cols-3">
            {["CVAT", "Client-provided platforms", "Established annotation environments"].map(
              (t) => (
                <div key={t} className="surface-card p-6">
                  <span className="mono-label text-primary">Environment</span>
                  <p className="mt-3 text-sm font-medium leading-snug">{t}</p>
                </div>
              ),
            )}
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
