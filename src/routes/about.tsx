import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TransformVisual } from "@/components/site/visuals";
import { CtaBand } from "@/components/site/Cta";

const TITLE = "About | Datatonin AI Data Operations";
const DESC =
  "Datatonin is an emerging AI data operations company focused on the human side of machine learning: annotation, review, and validation workflows built around clear standards.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  ["PRECISION", "Labels that hold up to inspection, defined by explicit rules rather than habit."],
  ["CONSISTENCY", "The same interpretation applied across annotators, batches, and time."],
  ["SCALABILITY", "Capacity and process that extend from a pilot batch to production volume."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building dependable human infrastructure for AI."
        copy="Datatonin is an emerging AI data operations company focused on the human side of machine learning. We organize annotation and quality-review workflows around clear standards to help AI teams turn raw data into structured, usable datasets."
      />

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            title="Human-powered data infrastructure for AI."
            copy="High-quality annotation, validation, and human-in-the-loop data operations for AI systems — structured around your guidelines, tools, formats, and delivery requirements."
          />
          <Reveal delay={100}>
            <TransformVisual />
          </Reveal>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeader eyebrow="Principles" title="What we hold constant." />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {principles.map(([t, c], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="surface-card h-full p-8">
                <h3 className="text-lg font-semibold tracking-[0.16em]">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
