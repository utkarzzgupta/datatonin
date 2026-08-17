export function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-[7px] border border-primary/50" />
        <span className="absolute inset-[6px] rounded-[2px] bg-gradient-to-br from-primary to-accent" />
        <span className="absolute -inset-1 rounded-[10px] bg-primary/20 blur-md" />
      </span>
      <span
        className={
          size === "lg"
            ? "text-2xl font-semibold tracking-[0.22em] text-foreground"
            : "text-[15px] font-semibold tracking-[0.24em] text-foreground"
        }
      >
        DATATONIN
      </span>
    </span>
  );
}
