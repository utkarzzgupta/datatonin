import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Contact | Request a Quote from Datatonin";
const DESC =
  "Tell Datatonin about your annotation project — type, volume, timeline, and requirements — and request a quote for AI data operations.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Image Annotation",
  "Bounding Box Annotation",
  "Image Classification",
  "Image Description",
  "Data Validation",
  "Human Validation",
  "Other",
];

const volumes = ["Pilot", "10K–50K", "50K–100K", "100K–500K", "500K–1M+", "Other"];

const fieldClass =
  "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-ring/40";

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="mono-label">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  // Integration point: replace this handler with your email/CRM endpoint.
  // Until then the form composes a pre-filled message to hello@datatonin.com.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    setSent(true);
    window.location.href = `mailto:hello@datatonin.com?subject=${encodeURIComponent(
      "Quote request — Datatonin",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build your data workflow."
        copy="Share your project details and we'll respond with a scoped approach, pilot recommendation, and quote."
      />

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="surface-card grid gap-6 p-8 sm:grid-cols-2 sm:p-10"
            >
              <Field label="Name">
                <input name="Name" required className={fieldClass} placeholder="Your name" />
              </Field>
              <Field label="Work Email">
                <input
                  name="Work Email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Company">
                <input name="Company" className={fieldClass} placeholder="Company name" />
              </Field>
              <Field label="Project Type">
                <select name="Project Type" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select a type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Estimated Volume">
                <select name="Estimated Volume" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select a volume
                  </option>
                  {volumes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Expected Timeline">
                <input
                  name="Expected Timeline"
                  className={fieldClass}
                  placeholder="e.g. pilot in 3 weeks"
                />
              </Field>
              <Field label="Annotation Requirements" full>
                <textarea
                  name="Annotation Requirements"
                  rows={3}
                  className={fieldClass}
                  placeholder="Classes, formats, tooling, guidelines"
                />
              </Field>
              <Field label="Message" full>
                <textarea
                  name="Message"
                  rows={4}
                  className={fieldClass}
                  placeholder="Anything else we should know"
                />
              </Field>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_44px_-8px_var(--glow)]"
                >
                  Request a Quote
                </button>
                {sent && (
                  <p className="mt-4 text-sm text-primary">
                    Opening your email client with the details prefilled.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="surface-card p-8">
              <p className="mono-label">Direct</p>
              <a
                href="mailto:hello@datatonin.com"
                className="mt-3 block text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                hello@datatonin.com
              </a>
              <a
                href="tel:+918736946491"
                className="mt-2 block text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                +91 87369 46491
              </a>
            </div>
            <div className="surface-card p-8">
              <p className="mono-label">What to include</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Data type and sample volume</li>
                <li>Annotation classes and guidelines</li>
                <li>Preferred tooling and output format</li>
                <li>Timeline and quality expectations</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
