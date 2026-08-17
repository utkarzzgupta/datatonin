import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 20%, color-mix(in oklab, var(--glow) 22%, transparent) 45%, color-mix(in oklab, var(--accent) 22%, transparent) 60%, transparent 85%)",
          backgroundSize: "200% 100%",
          animation: "dt-flow 14s linear infinite",
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          Have a dataset that needs human intelligence?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Start with a controlled pilot and build toward production-scale data operations.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_44px_-8px_var(--glow)]"
          >
            Request a Quote
          </Link>
          <Link
            to="/how-we-work"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Start a Pilot
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
