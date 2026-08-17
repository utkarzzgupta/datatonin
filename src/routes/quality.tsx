import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QualityLoop } from "@/components/site/visuals";
import { CtaBand } from "@/components/site/Cta";

const TITLE = "Quality | Datatonin Annotation Quality Control";
const DESC =
  "How Datatonin structures annotation quality: guideline standardization, calibration, independent QA, error categorization, correction, validation, and delivery checks.";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quality" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

const items = [
  [
    "Guideline Standardization",
    "Written, versioned annotation rules covering classes, edge cases, and formats so every annotator works from the same definition.",
  ],
  [
    "Annotator Calibration",
    "Controlled warm-up batches and reference examples used to align interpretation before production begins.",
  ],
  [
    "Independent QA",
    "Review performed by someone other than the original annotator, sampled or full depending on the stage.",
  ],
  [
    "Error Categorization",
    "Findings grouped into recurring error types so feedback targets causes rather than individual items.",
  ],
  [
    "Correction",
    "Flagged items returned for rework, with guideline updates when an issue is systemic.",
  ],
  [
    "Final Validation",
    "A closing pass confirming corrections are applied and the batch matches the agreed specification.",
  ],
  [
    "Delivery Checks",
    "Format, structure, and completeness verification before the dataset is handed over.",
  ],
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality control"
        title="Quality is a workflow, not a final check."
        copy="Every production workflow can be structured around clear guidelines, calibration, independent review, correction, and final validation."
      />

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-4">
            {items.map(([t, c], i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="surface-card p-6">
                  <div className="flex items-baseline gap-4">
                    <span className="mono-label text-primary">{`0${i + 1}`}</span>
                    <h2 className="text-lg font-semibold tracking-tight">{t}</h2>
                  </div>
                  <p className="mt-2 pl-0 text-sm leading-relaxed text-muted-foreground sm:pl-[3.4rem]">
                    {c}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface/40 p-6">
              <p className="eyebrow text-center">Continuous loop</p>
              <div className="mt-4">
                <QualityLoop
                  steps={["GUIDELINES", "ANNOTATE", "REVIEW", "CORRECT", "VALIDATE", "IMPROVE"]}
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Findings feed back into the guidelines, so quality compounds across batches.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeader
          align="center"
          title="Consistency across annotators, batches, and time."
          copy="Quality expectations are defined with you at the start of a project and re-validated as volume and complexity grow."
        />
      </Section>

      <CtaBand />
    </>
  );
}
