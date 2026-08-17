import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

const links = [
  { to: "/services", label: "Services" },
  { to: "/quality", label: "Quality" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_30px_-8px_var(--glow)]"
          >
            Request a Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
