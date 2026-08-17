import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/Cta";

const TITLE = "Services | Datatonin AI Data Annotation";
const DESC =
  "Image annotation, bounding boxes, object detection, classification, segmentation, image descriptions, data validation, human review, and quality assurance.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Image Annotation",
    about: "Structured visual labeling of objects, regions, and attributes inside images.",
    use: "Building supervised training sets for visual models.",
    role: "Core production stage of the annotation pipeline.",
    ai: "Computer vision, visual search, retail and industrial imagery.",
  },
  {
    n: "02",
    title: "Bounding Box Annotation",
    about: "Rectangular localization of objects with consistent tightness and class rules.",
    use: "Detection datasets where object position and extent matter.",
    role: "Production stage, verified against tightness and class guidelines.",
    ai: "Object detection, tracking, robotics perception.",
  },
  {
    n: "03",
    title: "Object Detection Data",
    about: "Multi-object labeling across cluttered, occluded, or dense scenes.",
    use: "Datasets requiring many instances and classes per image.",
    role: "Production plus dedicated review for missed or duplicated objects.",
    ai: "Surveillance, autonomous systems, inventory recognition.",
  },
  {
    n: "04",
    title: "Image Classification",
    about: "Assigning categories and attributes at image or region level.",
    use: "Taxonomy-driven datasets with defined label sets.",
    role: "Production stage with calibration on ambiguous categories.",
    ai: "Content categorization, quality grading, catalog enrichment.",
  },
  {
    n: "05",
    title: "Segmentation",
    about: "Pixel- or polygon-level delineation of object boundaries.",
    use: "Tasks where shape and precise contour are required.",
    role: "High-precision production stage with boundary-focused QA.",
    ai: "Medical-style imaging workflows, scene understanding, editing tools.",
  },
  {
    n: "06",
    title: "Image Descriptions",
    about: "Human-written descriptions of images and objects in US English.",
    use: "Datasets pairing visual content with natural-language text.",
    role: "Language production stage guided by tone and format rules.",
    ai: "Vision-language models, captioning, accessibility.",
  },
  {
    n: "07",
    title: "Natural Language Annotation",
    about: "Labeling, structuring, and tagging of text according to project schemas.",
    use: "Text datasets that need consistent structure and categories.",
    role: "Production stage aligned to schema and annotation guidelines.",
    ai: "NLP pipelines, intent and attribute extraction, model evaluation.",
  },
  {
    n: "08",
    title: "Data Validation",
    about: "Systematic checking of labels against guidelines and format requirements.",
    use: "Confirming dataset integrity before delivery.",
    role: "Verification stage after production and correction.",
    ai: "Any supervised training or evaluation dataset.",
  },
  {
    n: "09",
    title: "Human Review",
    about: "Human assessment of AI-generated or machine-labeled outputs.",
    use: "Correcting, accepting, or rejecting automated predictions.",
    role: "Human-in-the-loop stage layered over model output.",
    ai: "Model bootstrapping, active learning, output auditing.",
  },
  {
    n: "10",
    title: "Quality Assurance",
    about: "Independent review, error categorization, and corrective feedback loops.",
    use: "Maintaining consistency across annotators and batches.",
    role: "Continuous control layer across the full lifecycle.",
    ai: "All annotation programs moving from pilot to production.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Data operations built for AI."
        copy="A complete set of annotation, description, validation, and quality services structured around your guidelines, tools, and delivery formats."
      />

      <Section className="pt-4">
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 80}>
              <article className="surface-card h-full p-8">
                <div className="flex items-center gap-4">
                  <span className="mono-label text-primary">{s.n}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.about}</p>
                <dl className="mt-6 space-y-3 border-t border-border pt-5">
                  {[
                    ["Typical use", s.use],
                    ["Workflow role", s.role],
                    ["AI applications", s.ai],
                  ].map(([k, v]) => (
                    <div key={k} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
                      <dt className="mono-label">{k}</dt>
                      <dd className="text-sm text-foreground/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
