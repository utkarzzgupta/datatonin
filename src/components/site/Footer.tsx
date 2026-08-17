import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

const links = [
  { to: "/services", label: "Services" },
  { to: "/quality", label: "Quality" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mono-label mt-4">AI Data Operations &amp; Annotation</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Human-powered data infrastructure for AI.
          </p>
        </div>

        <div>
          <p className="mono-label">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label">Contact</p>
          <a
            href="mailto:hello@datatonin.com"
            className="mt-4 inline-block text-sm text-foreground transition-colors hover:text-primary"
          >
            hello@datatonin.com
          </a>
          <Link
            to="/contact"
            className="mt-6 block w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Datatonin. All rights reserved.</span>
        <span className="mono-label">Precision · Consistency · Scalability</span>
      </div>
    </footer>
  );
}
