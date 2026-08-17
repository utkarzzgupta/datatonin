import { cn } from "@/lib/utils";

/** Subtle full-bleed technical background: fine grid + radial glow. */
export function TechBackdrop({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 grid-bg opacity-[0.5]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[420px] w-[520px] rounded-full bg-accent/10 blur-[140px]" />
    </div>
  );
}

/** Animated horizontal data-flow diagram used in the hero. */
export function DataFlowVisual() {
  const stages = ["RAW DATA", "ANNOTATION", "HUMAN REVIEW", "QUALITY", "AI-READY DATA"];
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />

      <svg
        viewBox="0 0 1000 220"
        className="relative hidden h-auto w-full sm:block"
        role="img"
        aria-label="Data flow from raw data through annotation, human review and quality to AI-ready data"
      >
        <defs>
          <linearGradient id="dt-line" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--glow)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--glow)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <line x1="60" y1="110" x2="940" y2="110" stroke="var(--border)" strokeWidth="1" />
        <line
          x1="60"
          y1="110"
          x2="940"
          y2="110"
          stroke="url(#dt-line)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          style={{ animation: "dt-dash 6s linear infinite" }}
        />

        {stages.map((s, i) => {
          const x = 60 + (880 / (stages.length - 1)) * i;
          return (
            <g key={s}>
              <rect
                x={x - 34}
                y={76}
                width={68}
                height={68}
                rx={8}
                fill="none"
                stroke="var(--border)"
              />
              <rect
                x={x - 20}
                y={90}
                width={40}
                height={40}
                rx={4}
                fill="var(--glow)"
                fillOpacity="0.07"
                stroke="var(--glow)"
                strokeOpacity="0.5"
              />
              <circle
                cx={x}
                cy={110}
                r={4}
                fill="var(--glow)"
                style={{ animation: `dt-pulse 3.2s ${i * 0.45}s ease-in-out infinite` }}
              />
              <text
                x={x}
                y={180}
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="11"
                letterSpacing="2.4"
                fontFamily="var(--font-mono)"
              >
                {s}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="relative space-y-3 sm:hidden">
        {stages.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              style={{ animation: `dt-pulse 3s ${i * 0.4}s ease-in-out infinite` }}
            />
            <span className="mono-label text-foreground">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Vertical glowing pipeline. */
export function VerticalPipeline({
  stages,
  captions,
}: {
  stages: string[];
  captions?: string[];
}) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
      <div
        className="absolute left-[19px] top-2 h-24 w-px bg-gradient-to-b from-transparent via-primary to-transparent sm:left-1/2 sm:-translate-x-1/2"
        style={{ animation: "dt-sweep 6s linear infinite" }}
      />
      <ul className="relative space-y-5">
        {stages.map((s, i) => (
          <li
            key={s}
            className="flex items-start gap-5 sm:grid sm:grid-cols-[1fr_40px_1fr] sm:items-center sm:gap-0"
          >
            <div className={cn("hidden sm:block", i % 2 === 0 ? "text-right pr-8" : "order-3 pl-8")}>
              <p className="text-lg font-semibold tracking-tight">{s}</p>
              {captions?.[i] && (
                <p className="mt-1 text-sm text-muted-foreground">{captions[i]}</p>
              )}
            </div>
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:order-2 sm:mx-auto">
              <span className="absolute inset-0 rounded-full border border-border bg-background" />
              <span
                className="absolute inset-[13px] rounded-full bg-primary"
                style={{ animation: `dt-pulse 3s ${i * 0.35}s ease-in-out infinite` }}
              />
            </div>
            <div className={cn("sm:hidden")}>
              <p className="text-base font-semibold tracking-tight">{s}</p>
              {captions?.[i] && (
                <p className="mt-1 text-sm text-muted-foreground">{captions[i]}</p>
              )}
            </div>
            <div className={cn("hidden sm:block", i % 2 === 0 ? "order-3" : "")} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Abstract raw → structured transformation visual. */
export function TransformVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-8">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <div className="grid grid-cols-6 gap-1.5">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="aspect-square rounded-[2px] bg-muted-foreground/25"
              style={{
                opacity: 0.25 + ((i * 37) % 60) / 100,
                animation: `dt-drift ${5 + (i % 5)}s ${(i % 7) * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="mono-label">transform</span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <div className="grid grid-cols-6 gap-1.5">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="aspect-square rounded-[2px] border border-primary/40 bg-primary/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Quality loop ring visual. */
export function QualityLoop({ steps }: { steps: string[] }) {
  const size = 340;
  const r = 128;
  const c = size / 2;
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full" role="img" aria-label="Quality loop">
        <circle cx={c} cy={c} r={r} fill="none" stroke="var(--border)" />
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="var(--glow)"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeDasharray="18 26"
          style={{ animation: "dt-dash 9s linear infinite" }}
        />
        {steps.map((s, i) => {
          const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
          const x = c + r * Math.cos(a);
          const y = c + r * Math.sin(a);
          return (
            <g key={s}>
              <circle
                cx={x}
                cy={y}
                r={5}
                fill="var(--glow)"
                style={{ animation: `dt-pulse 3s ${i * 0.4}s ease-in-out infinite` }}
              />
              <text
                x={x + (Math.cos(a) * 34)}
                y={y + (Math.sin(a) * 26) + 4}
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="10"
                letterSpacing="1.8"
                fontFamily="var(--font-mono)"
              >
                {s}
              </text>
            </g>
          );
        })}
        <text
          x={c}
          y={c}
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
          letterSpacing="4"
          fontFamily="var(--font-mono)"
        >
          CONTINUOUS
        </text>
      </svg>
    </div>
  );
}
